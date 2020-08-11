const baseUrl = process.env.NODE_ENV === 'development'?
process.env.VUE_APP_DEV : process.env.VUE_APP_PRO

export default baseUrl