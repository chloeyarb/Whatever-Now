import decode from 'jwt-decode';

class AuthService {
    getProfile () {
        // retrieve data save in token
        return decode(this.getToken());
    }

    // check if user is a saved token and valid
    LoggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }
    // checks if token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    // gets token from local storage
    getToken() {
        return localStorage.getItem('id_token');
    }

    // saves user token to local storage
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }
    // clears token from local storage
    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new AuthService();