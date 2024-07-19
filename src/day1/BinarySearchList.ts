export default function bs_list(haystack: number[], needle: number): boolean {
    let min=0;
    let max=haystack.length;
    while(min<max){
        const mid = Math.floor(min+(max-min)/2);
        if(haystack[mid]===needle) return true;
        else if(haystack[mid]<needle) min=mid+1;
        else max=mid;
    }
    return false
}