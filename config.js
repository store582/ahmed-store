/* إعدادات المتجر — هذا الملف الوحيد الذي يُعدَّل لكل عميل */
window.STORE = {
  name: "alnor",
  color: "#0A3622",
  social: "alnor",
  pagesUrl: "https://store582.github.io/ahmed-store/",
  apkUrl: "https://github.com/store582/ahmed-store/releases/download/store-apk/AlbsamStore.apk",
  packageName: "com.ahmed.store",
  tgWorker: "https://store582-notify.bsamjasmdell.workers.dev",
  pushWorker: "https://ahmed-push.bsamjasmdell.workers.dev",
  license: "zzwfxedz8t",
  licenseWorker: "https://licenses.bsamjasmdell.workers.dev",
  firebase: {
    apiKey: "AIzaSyAugOUbxUk1cGpDQEKV7RQQs7oQAWMXe0I",
    authDomain: "my-project-ea865.firebaseapp.com",
    projectId: "my-project-ea865",
    databaseURL: "https://my-project-ea865-default-rtdb.firebaseio.com/"
  },
  supabase: {
    url: "https://zyzanrnrokiqzmrcubbr.supabase.co",
    key: "sb_publishable_OtreTInb2TYajLg71s5Ltw_uyAeVXxd"
  }
};
/* استبدال الاسم واليوزر المكتوبين بالصفحات الثابتة (يعمل بالمتصفح فقط) */
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    var S = window.STORE, N0 = "مجمع البسام", H0 = "albsam_store";
    function fix(v) { return v && (v.indexOf(N0) > -1 || v.indexOf(H0) > -1) ? v.split(N0).join(S.name).split(H0).join(S.social) : v; }
    document.title = fix(document.title);
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) { var t = fix(n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t; }
    document.querySelectorAll("[href],[content],[title],[alt],[placeholder]").forEach(function (e) {
      ["href", "title", "alt", "placeholder"].forEach(function (a) { var v = e.getAttribute(a); if (v) { var t = fix(v); if (t !== v) e.setAttribute(a, t); } });
    });
    document.querySelectorAll("meta[content]").forEach(function (m) { m.content = fix(m.content); });
  });
}
