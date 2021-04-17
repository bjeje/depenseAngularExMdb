import * as dayjs from "dayjs";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(email:string, password:string ) {
    return this.http.post<User>('/api/login', {email, password})
      .do(res => this.setSession)
      .shareReplay();
  }

  private setSession(authResult) {
    const expiresAt = dayjs().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return dayjs().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return dayjs(expiresAt);
  }
}
