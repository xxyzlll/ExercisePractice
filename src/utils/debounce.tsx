export default (fn:Function, debTime:number):Function => {
  let timer:any = null;
  return (debTime:number,...args:any[]) => {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this,args);
      timer = null;
    }, debTime)
  }
}
