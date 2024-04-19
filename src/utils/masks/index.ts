export function formatCnpjMask(value: string) {
return value
    .replace(/\D/g, "") 
    .replace(/^(\d{2})(\d)/, "$1.$2") 
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3") 
    .replace(/\.(\d{3})(\d)/, ".$1/$2") 
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}


export function formatZipCode(value: string) {
return value
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
}

export function phone_mask(v: any) {
v = v.replace(/\D/g, "");
if (v.length <= 11) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d{1})/, "($1) $2.");
    v = v.replace(/(\d{4})/, "$1-");
    v = v.replace(/(\d{4})/, "$1");
} else {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d{1})/, "($1) $2.");
    v = v.replace(/(\d{4})/, "$1-");
    v = v.replace(/(\d{4})/, "$1");
}
return v;
}