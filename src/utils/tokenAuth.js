
    let setToken = (token) => {
        localStorage.setItem('token', token)
    }

    let getToken = () => {
        let token = localStorage.getItem('token')
        if(token !== 'undefined' && token !== null){
            const payload = JSON.parse(atob(token.split('.')[1]))
            if(payload.exp < Date.now() / 1000){
                localStorage.removeItem('token')
                token = null
            }
        }
        return token === 'undefined' ? undefined : token
    }

    let removeToken = () => {
        localStorage.removeItem('token')
    }

    let tokenService = {
        setToken,
        getToken,
        removeToken
    }

  export default  tokenService
