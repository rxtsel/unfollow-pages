const unfollowPages = () => {
  const botones = document.querySelectorAll("button.PageLikeButton")

  if (botones) {
    botones.forEach((boton, index) => {
      setTimeout(() => {
        boton.click()

        setTimeout(() => {
          const unfollow = document.querySelector("a.itemAnchor")
          unfollow.click()
        }, 1000);

      }, index * 1200);

    })
  } else {
    location.reload()
  }
}

unfollowPages()
