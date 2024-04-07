import Cookies from 'js-cookie';

// Create getter and setter function for Cookies
function useCookie(){

    // Set cookies
    function setCookie(name, value, options)
    {
        Cookies.set(name, value, options);
    }

    // Get cookies
    function getCookie(name)
    {
        return Cookies.get(name);
    }
    return [getCookie, setCookie]; // Return both of functions as an functions array
}

export default useCookie;