import Cookies from 'js-cookie';

function useCookie(){
    function setCookie(name, value, options)
    {
        Cookies.set(name, value, options);
    }

    function getCookie(name)
    {
        return Cookies.get(name);
    }
    return [getCookie, setCookie];
}

export default useCookie;