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
  const { createPage, createRedirect } = actions

  // Add your redirect here
  createRedirect({
    fromPath: `/resume`,
    toPath: `https://garrettvercoe.cdn.prismic.io/garrettvercoe/Zfx8Gc68zyqdRpWw_VERCOE_GARRETT.pdf`,
    statusCode: 200,
    isPermanent: true,
    force: true,
  })

  const result = await wrapper(
    graphql(`
      {
        prismic {
          FirstTwenty: allProjects(sortBy: project_post_date_DESC) {
            edges {
              node {
                completed
                _meta {
                  uid
                }
              }
              cursor
            }
          }
          SecondTwenty: allProjects(
            after: "YXJyYXljb25uZWN0aW9uOjE5"
            sortBy: project_post_date_DESC
          ) {
            edges {
              node {
                completed
                _meta {
                  uid
                }
              }
              cursor
            }
          }
          ThirdTwenty: allProjects(
            after: "YXJyYXljb25uZWN0aW9uOjM5"
            sortBy: project_post_date_DESC
          ) {
            edges {
              node {
                completed
                _meta {
                  uid
                }
              }
              cursor
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

  // const projectsList = result.data.prismic.allProjects.edges
  const postsList = result.data.prismic.allPosts.edges

  const projectsList = [
    ...result.data.prismic.FirstTwenty.edges,
    ...result.data.prismic.SecondTwenty.edges,
    ...result.data.prismic.ThirdTwenty.edges,
  ]

  const projectTemplate = require.resolve("./src/templates/project.jsx")
  const postTemplate = require.resolve("./src/templates/post.jsx")

  projectsList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    edge.node.completed
      ? createPage({
          type: "Project",
          match: "/:uid",
          path: `/${edge.node._meta.uid}`,
          component: projectTemplate,
          context: {
            // Pass the unique ID (uid) through context so the template can filter by it
            uid: edge.node._meta.uid,
          },
        })
      : null
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
