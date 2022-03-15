async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
<<<<<<< HEAD
  const post_text = document.querySelector('textarea[name="post-text"]').value;
=======
  const post_url = document.querySelector('input[name="post-url"]').value;
>>>>>>> a6ad9f4da49e7e9bd1368d9ffab33640333139f9

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
<<<<<<< HEAD
      post_text
=======
      post_url
>>>>>>> a6ad9f4da49e7e9bd1368d9ffab33640333139f9
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
