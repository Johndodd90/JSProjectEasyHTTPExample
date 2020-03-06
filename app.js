const http = new easyHTTP();

// Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Create Data
const data = {
  title: "Custom Post",
  body: "This is a custom post"
};

// Create Post (POST REQUEST)
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// UPDATE POST (PUT REQUEST)
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  posts
) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
