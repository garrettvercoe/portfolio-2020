const path = require("path")

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await wrapper(
    graphql(`
      {
        prismic {
          allProjects {
            edges {
              node {
                body {
                  ... on PRISMIC_ProjectBody2_grid {
                    type
                    primary {
                      left_image
                      left_caption
                      right_image
                      right_caption
                    }
                  }
                  ... on PRISMIC_ProjectBody4_grid {
                    type
                    primary {
                      left_left
                      left_center
                      center_right
                      right_right
                      left_left_caption
                      left_center_caption
                      center_right_caption
                      right_right_caption
                    }
                  }
                  ... on PRISMIC_ProjectBodyFull_screen_image {
                    type
                    primary {
                      full
                      full_caption
                    }
                  }
                  __typename
                }
                completed
                featured_project
                project_title
                project_category
                project_preview_thumbnail
                video_link
                challenge
                outcome
                additional_info
                links
                project_details
                project_post_date
                _meta {
                  uid
                }
              }
            }
          }
          allPosts {
            edges {
              node {
                post_title
                post_hero_image
                post_hero_annotation
                post_date
                post_category
                post_body
                post_preview_description
                post_author
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    `)
  )

  const projectsList = result.data.prismic.allProjects.edges
  const postsList = result.data.prismic.allPosts.edges

  const projectTemplate = require.resolve("./src/templates/project.jsx")
  const postTemplate = require.resolve("./src/templates/post.jsx")

  projectsList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      type: "Project",
      match: "/:uid",
      path: `/${edge.node._meta.uid}`,
      component: projectTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node._meta.uid,
      },
    })
  })

  postsList.forEach(edge => {
    createPage({
      type: "Project",
      match: "/blog/:uid",
      path: `/blog/${edge.node._meta.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })
}
