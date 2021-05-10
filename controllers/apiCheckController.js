const checkApi = (req, res)=>{
  res.send({
    message: "API is working"
  })
}

const checkPostApi = (req, res)=>{
  res.send({
    message: "API post is working"
  })
}

module.exports = {
  checkPostApi,
  checkApi
}