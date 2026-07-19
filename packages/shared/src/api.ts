import type { FiltrosRegistro, Sesion } from "./types.js";
export class ApiError extends Error { constructor(public status:number,public body:unknown){super(`API ${status}`)} }
export class ApiClient {
  private accessToken:string|null=null; private refreshToken:string|null=null;
  private refreshPending:Promise<boolean>|null=null;
  constructor(private baseUrl:string,private onSessionExpired?:()=>void){}
  setSession(s:Pick<Sesion,"accessToken"|"refreshToken">|null){this.accessToken=s?.accessToken??null;this.refreshToken=s?.refreshToken??null;}
  async request<T>(path:string,init:RequestInit={},retry=true):Promise<T>{
    const res=await this.fetchAutenticado(path,init,retry);
    if(!res.ok)throw new ApiError(res.status,await res.json().catch(()=>null));
    return (res.status===204?undefined:await res.json()) as T;
  }
  async arrayBuffer(path:string,init:RequestInit={},retry=true):Promise<ArrayBuffer>{
    const res=await this.fetchAutenticado(path,init,retry);
    if(!res.ok)throw new ApiError(res.status,await res.json().catch(()=>null));
    return res.arrayBuffer();
  }
  download(path:string,init:RequestInit={}):Promise<ArrayBuffer>{return this.arrayBuffer(path,init);}
  private async fetchAutenticado(path:string,init:RequestInit,retry:boolean):Promise<Response>{
    const headers=new Headers(init.headers);if(init.body&&!headers.has("Content-Type"))headers.set("Content-Type","application/json");if(this.accessToken)headers.set("Authorization",`Bearer ${this.accessToken}`);
    const res=await fetch(`${this.baseUrl}${path}`,{...init,headers});
    if(res.status===401&&retry&&this.refreshToken){const ok=await this.refreshOnce();if(ok)return this.fetchAutenticado(path,init,false);}
    return res;
  }
  private refreshOnce(){if(!this.refreshPending)this.refreshPending=this.refresh().finally(()=>{this.refreshPending=null});return this.refreshPending;}
  private async refresh(){const res=await fetch(`${this.baseUrl}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:this.refreshToken})});if(!res.ok){this.setSession(null);this.onSessionExpired?.();return false;}const data=await res.json() as {accessToken:string;refreshToken:string};this.setSession(data);return true;}
  query(f:FiltrosRegistro){const q=new URLSearchParams(Object.entries(f).filter(([,v])=>v!==undefined).map(([k,v])=>[k,String(v)]));return q.toString();}
}
