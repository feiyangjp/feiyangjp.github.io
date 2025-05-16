/**
 * main.js — 项目所有功能入口
 * --------------------------------
 * 1. 动态设置当前年份
 * 2. 联系表单验证与提交
 * 3. 移动端导航菜单切换
 * 4. 图片懒加载（示例）
 */
(function() {
  'use strict';

  /*———————————————
    功能 1：动态设置当前年份
  ————————————————*/
  function setCurrentYear() {
    const yearEl = document.getElementById('current-year');
    if (!yearEl) return;
    const currentYear = new Date().getFullYear();
    yearEl.textContent = currentYear;
    yearEl.setAttribute('datetime', currentYear);
  }

  /*———————————————
    功能 2：联系表单验证与提交
  ————————————————
  function initContactForm() {
    const form = document.querySelector('form#contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name  = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const msg   = form.querySelector('[name="message"]').value.trim();
      if (!name || !email || !msg) {
        alert('请填写所有必填项！');
        return;
      }
      alert('表单已提交，谢谢！');
      form.reset();
    });
  }
*/
  /*———————————————
    功能 3：移动端导航菜单切换
  ————————————————*/
  function initMobileNav() {
    const toggle = document.querySelector('.menu-toggle');
    const menu   = document.querySelector('nav ul');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

  /*———————————————
    功能 4：图片懒加载（简单示例）
  ————————————————*/
  function initLazyLoad() {
    const imgs = document.querySelectorAll('img[data-src]');
    if (!imgs.length || !window.IntersectionObserver) return;
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          obs.unobserve(img);
        }
      });
    });
    imgs.forEach(img => observer.observe(img));
  }
  /*———————————————
    功能 5：图片轮播多图
  ————————————————*/  
// 在 initMobileNav() 之后，或者在 DOMContentLoaded 回调里添加：
function initHeroSlideshow() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // 轮播的图片路径列表
  const images = [
    'images/hero-1.png',
    'images/hero-2.png',
    'images/hero-3.png'
  ];

  let idx = 0;
  // 首次设置
  hero.style.backgroundImage = `url('${images[idx]}')`;

  // 每 5 秒切换一次
  setInterval(() => {
    idx = (idx + 1) % images.length;
    // 淡入淡出效果（可选）
    hero.style.transition = 'background-image 1s ease-in-out';
    hero.style.backgroundImage = `url('${images[idx]}')`;
  }, 5000);
}

  /*———————————————
    所有功能统一初始化
  ————————————————*/
  document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    initMobileNav();   // 包含切换菜单逻辑
    initLazyLoad();
    initHeroSlideshow();
  });

})();
