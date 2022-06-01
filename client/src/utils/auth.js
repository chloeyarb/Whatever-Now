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

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decode.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

}