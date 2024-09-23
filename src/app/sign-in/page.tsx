import {login} from "@/utils/auth/login";

export default function Page(){
  return (
    <form action={login}>
      <input 
        name="email"
        placeholder="example@example.com"
        required
      />
      <input 
        type="password" 
        name="password" 
        placeholder="************" 
        required 
      />
      <button formAction={login}
      >ログイン
      </button>
    </form>
  );
}