const paginate = (followers) => {
  // بنقسم عدد المتابعين على الصفح بمعدل 10 متابعين فى كل صفحه واجمالي  100 مستخدم 
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

export default paginate
