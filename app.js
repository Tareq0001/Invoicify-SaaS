/**
 * Invoicify SaaS - Business Invoicing & Billing Micro-SaaS
 * Developer: Tareq Aboushi (Tareq0001)
 */

// --- Localization Strings ---
const i18nData = {
  ar: {
    navBuilder: "محرر الفاتورة",
    navHistory: "سجل الفواتير",
    navPricing: "باقات الاشتراك",
    btnUpgrade: "ترقية إلى Pro 🚀",
    builderTitle: "إنشاء فاتورة ضريبية جديدة",
    builderSubtitle: "متوافقة مع متطلبات الفاتورة الإلكترونية والضريبة المضافة",
    btnSaveDraft: "حفظ الفاتورة",
    btnPrint: "طباعة / تحميل PDF",
    docTitle: "فاتورة ضريبية",
    lblInvNo: "رقم الفاتورة:",
    lblDate: "تاريخ الإصدار:",
    lblDueDate: "تاريخ الاستحقاق:",
    lblCurrency: "العملة:",
    billToTitle: "فاتورة إلى (العميل):",
    colDesc: "الوصف والخدمة",
    colQty: "الكمية",
    colRate: "سعر الوحدة",
    colTotal: "الإجمالي",
    btnAddItem: "إضافة بند جديد",
    notesTitle: "ملاحظات وشروط الدفع:",
    qrNotice: "رمز استجابة الفوترة الإلكترونية",
    totSub: "المجموع الفرعي:",
    totVat: "ضريبة القيمة المضافة:",
    totDiscount: "الخصم التجاري:",
    totGrand: "الإجمالي النهائي:",
    historyTitle: "سجل الفواتير الصادرة",
    historySubtitle: "إدارة وتتبع الفواتير وحالات الدفع",
    btnClearAll: "مسح السجل",
    thInvNo: "رقم الفاتورة",
    thClient: "العميل",
    thDate: "التاريخ",
    thAmount: "المبلغ الإجمالي",
    thStatus: "حالة الدفع",
    thActions: "إجراءات",
    badgePricing: "باقات مرنة",
    pricingTitle: "اختر الخطة المناسبة لحجم أعمالك",
    pricingSubtitle: "بدون عقود طويلة الأجل. يمكنك الترقية أو الإلغاء في أي وقت.",
    planFreeName: "المجانية (Starter)",
    planFreeDesc: "للمستقلين والمشاريع الناشئة التي تحتاج فواتير فورية.",
    planProName: "المحترفين (Pro)",
    planProDesc: "للشركات الصغيرة ورواد الأعمال الباحثين عن الأتمتة.",
    planEntName: "المؤسسات (Agency)",
    planEntDesc: "للشركات المتوسطة والوكالات ذات الفروع المتعددة.",
    mostPopular: "الأكثر طلباً 🔥",
    btnCurrentPlan: "خطتك الحالية",
    btnChoosePro: "ترقية الآن إلى Pro",
    btnChooseAgency: "التواصل مع المبيعات",
    feat1: "حتى 10 فواتير شهرياً",
    feat2: "تصدير PDF عالي الدقة",
    feat3: "حساب الضريبة المضافة التلقائي",
    feat4: "شعار مخصص للشركة",
    feat5: "ربط بوابات الدفع الإلكتروني",
    feat6: "فواتير غير محدودة",
    feat7: "تخصيص الهوية والشعار بالكامل",
    feat8: "تصدير تقارير Excel و CSV",
    feat9: "تتبع حالات الدفع والتحصيل",
    feat10: "دعم فني سريع على مدار الساعة",
    feat11: "كل مميزات باقة Pro",
    feat12: "تعدد المستخدمين وصلاحيات الفريق",
    feat13: "ربط برمجي عبر REST API",
    feat14: "سيرفرات مخصصة وأمان عالي",
    statusPaid: "مدفوعة ✔",
    statusPending: "معلقة ⏳",
    toastSaved: "تم حفظ الفاتورة بنجاح في السجل! 💾",
    toastPlanUpdated: "تم ترقية باقتك إلى ",
    confirmDelete: "هل أنت متأكد من حذف هذه الفاتورة؟",
    confirmClearAll: "هل أنت متأكد من مسح جميع الفواتير المحفوظة؟",
    emptyHistory: "لا توجد أي فواتير مسجلة حالياً."
  },
  en: {
    navBuilder: "Invoice Builder",
    navHistory: "Invoices Ledger",
    navPricing: "Pricing Plans",
    btnUpgrade: "Upgrade to Pro 🚀",
    builderTitle: "Create New Tax Invoice",
    builderSubtitle: "Standard compliant electronic invoice and VAT billing",
    btnSaveDraft: "Save Invoice",
    btnPrint: "Print / Save PDF",
    docTitle: "TAX INVOICE",
    lblInvNo: "Invoice #:",
    lblDate: "Issue Date:",
    lblDueDate: "Due Date:",
    lblCurrency: "Currency:",
    billToTitle: "Billed To (Client):",
    colDesc: "Description & Service",
    colQty: "Qty",
    colRate: "Unit Rate",
    colTotal: "Total",
    btnAddItem: "Add Line Item",
    notesTitle: "Notes & Payment Terms:",
    qrNotice: "E-Invoicing Compliance QR Code",
    totSub: "Subtotal:",
    totVat: "Value Added Tax (VAT):",
    totDiscount: "Commercial Discount:",
    totGrand: "Grand Total:",
    historyTitle: "Issued Invoices Ledger",
    historySubtitle: "Manage and track client billing & payment status",
    btnClearAll: "Clear Ledger",
    thInvNo: "Invoice #",
    thClient: "Client",
    thDate: "Date",
    thAmount: "Total Amount",
    thStatus: "Status",
    thActions: "Actions",
    badgePricing: "Flexible Plans",
    pricingTitle: "Choose the Perfect Plan for Your Business",
    pricingSubtitle: "No long-term commitments. Upgrade or downgrade at any time.",
    planFreeName: "Starter (Free)",
    planFreeDesc: "For freelancers and solopreneurs needing instant billing.",
    planProName: "Professional (Pro)",
    planProDesc: "For fast-growing SMBs needing automation and unlimited power.",
    planEntName: "Enterprise (Agency)",
    planEntDesc: "For established agencies and multi-branch companies.",
    mostPopular: "MOST POPULAR 🔥",
    btnCurrentPlan: "Current Plan",
    btnChoosePro: "Upgrade to Pro Now",
    btnChooseAgency: "Contact Sales",
    feat1: "Up to 10 invoices / month",
    feat2: "High-resolution PDF export",
    feat3: "Automated VAT & Tax math",
    feat4: "Custom company branding",
    feat5: "Payment gateway links",
    feat6: "Unlimited invoices",
    feat7: "Full custom logo & theme",
    feat8: "Excel & CSV data export",
    feat9: "Payment tracking & alerts",
    feat10: "24/7 Priority support",
    feat11: "All Pro features included",
    feat12: "Multi-user team roles",
    feat13: "Developer REST API access",
    feat14: "Dedicated servers & SLA",
    statusPaid: "Paid ✔",
    statusPending: "Pending ⏳",
    toastSaved: "Invoice saved to ledger successfully! 💾",
    toastPlanUpdated: "Plan successfully upgraded to ",
    confirmDelete: "Are you sure you want to delete this invoice?",
    confirmClearAll: "Are you sure you want to clear all invoices?",
    emptyHistory: "No invoices in ledger yet."
  }
};

// --- State Variables ---
let currentLang = "ar";
let currentPlan = "free";
let lineItems = [
  { desc: "تصميم واجهة مستخدم وتجربة مستخدم (UI/UX Design)", qty: 1, rate: 3500 },
  { desc: "تطوير لوحة تحكم سحابية تفاعلية (Frontend Engineering)", qty: 1, rate: 4500 }
];
let invoicesLedger = [];

// --- DOM Elements ---
const navLinks = document.querySelectorAll(".nav-link");
const viewSections = document.querySelectorAll(".view-section");
const currentPlanBadge = document.getElementById("currentPlanBadge");
const upgradeBtn = document.getElementById("upgradeBtn");
const langToggleBtn = document.getElementById("langToggleBtn");
const toast = document.getElementById("toast");

// Builder Elements
const invoiceDate = document.getElementById("invoiceDate");
const dueDate = document.getElementById("dueDate");
const currencySelect = document.getElementById("currencySelect");
const itemsTableBody = document.getElementById("itemsTableBody");
const addItemBtn = document.getElementById("addItemBtn");
const subTotalDisplay = document.getElementById("subTotalDisplay");
const taxRateInput = document.getElementById("taxRateInput");
const taxAmountDisplay = document.getElementById("taxAmountDisplay");
const discountInput = document.getElementById("discountInput");
const discountAmountDisplay = document.getElementById("discountAmountDisplay");
const grandTotalDisplay = document.getElementById("grandTotalDisplay");
const saveDraftBtn = document.getElementById("saveDraftBtn");
const printBtn = document.getElementById("printBtn");

// History Elements
const historyTableBody = document.getElementById("historyTableBody");
const clearAllBtn = document.getElementById("clearAllBtn");

// Pricing buttons
const planButtons = document.querySelectorAll(".select-plan-btn");

// --- Initialization ---
function initDates() {
  const today = new Date();
  const due = new Date();
  due.setDate(today.getDate() + 14);

  invoiceDate.value = today.toISOString().split("T")[0];
  dueDate.value = due.toISOString().split("T")[0];
}

function loadFromStorage() {
  const savedLedger = localStorage.getItem("invoicify_ledger");
  if (savedLedger) {
    try {
      invoicesLedger = JSON.parse(savedLedger);
    } catch (e) {
      invoicesLedger = [];
    }
  }

  const savedPlan = localStorage.getItem("invoicify_plan");
  if (savedPlan) {
    setPlan(savedPlan, false);
  }
}

function saveLedgerToStorage() {
  localStorage.setItem("invoicify_ledger", JSON.stringify(invoicesLedger));
}

// --- Line Items & Math Engine ---
function renderLineItems() {
  itemsTableBody.innerHTML = "";
  lineItems.forEach((item, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>
        <input type="text" class="line-input item-desc" data-index="${index}" value="${item.desc}" placeholder="وصف الخدمة...">
      </td>
      <td>
        <input type="number" class="line-input line-num item-qty" data-index="${index}" min="1" value="${item.qty}">
      </td>
      <td>
        <input type="number" class="line-input line-num item-rate" data-index="${index}" min="0" step="0.5" value="${item.rate}">
      </td>
      <td class="line-num item-total">
        ${(item.qty * item.rate).toFixed(2)}
      </td>
      <td class="no-print">
        <button class="btn-remove-row" data-index="${index}" title="حذف البند">✕</button>
      </td>
    `;

    itemsTableBody.appendChild(tr);
  });

  recalculateTotals();
}

function recalculateTotals() {
  const currency = currencySelect.value;
  let subtotal = 0;

  lineItems.forEach(item => {
    subtotal += (item.qty * item.rate);
  });

  const taxRate = parseFloat(taxRateInput.value) || 0;
  const taxAmount = subtotal * (taxRate / 100);

  const discountRate = parseFloat(discountInput.value) || 0;
  const discountAmount = subtotal * (discountRate / 100);

  const grandTotal = Math.max(0, subtotal + taxAmount - discountAmount);

  subTotalDisplay.textContent = `${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`;
  taxAmountDisplay.textContent = `${taxAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`;
  discountAmountDisplay.textContent = `${discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`;
  grandTotalDisplay.textContent = `${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`;

  return { subtotal, taxAmount, discountAmount, grandTotal, currency };
}

// --- History / Ledger View ---
function renderHistory() {
  historyTableBody.innerHTML = "";
  const lang = i18nData[currentLang];

  if (invoicesLedger.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="6" style="text-align:center; color: var(--text-muted); padding: 32px;">${lang.emptyHistory}</td>`;
    historyTableBody.appendChild(tr);
    return;
  }

  invoicesLedger.forEach((inv, index) => {
    const tr = document.createElement("tr");
    const statusText = inv.status === "paid" ? lang.statusPaid : lang.statusPending;
    const statusClass = inv.status === "paid" ? "status-paid" : "status-pending";

    tr.innerHTML = `
      <td><strong>${inv.number}</strong></td>
      <td>${inv.client}</td>
      <td>${inv.date}</td>
      <td><strong>${inv.total.toLocaleString(undefined, { minimumFractionDigits: 2 })} ${inv.currency}</strong></td>
      <td>
        <span class="status-badge ${statusClass}" style="cursor: pointer;" onclick="toggleInvoiceStatus(${index})" title="اضغط لتغيير الحالة">${statusText}</span>
      </td>
      <td>
        <button class="btn btn-ghost" onclick="deleteInvoice(${index})" style="padding: 4px 10px; font-size: 0.8rem; color: #ef4444;">حذف 🗑️</button>
      </td>
    `;

    historyTableBody.appendChild(tr);
  });
}

window.toggleInvoiceStatus = function(index) {
  if (invoicesLedger[index]) {
    invoicesLedger[index].status = invoicesLedger[index].status === "paid" ? "pending" : "paid";
    saveLedgerToStorage();
    renderHistory();
  }
};

window.deleteInvoice = function(index) {
  if (confirm(i18nData[currentLang].confirmDelete)) {
    invoicesLedger.splice(index, 1);
    saveLedgerToStorage();
    renderHistory();
  }
};

function saveCurrentInvoice() {
  const totals = recalculateTotals();
  const invNumber = document.getElementById("invoiceNumber").value;
  const client = document.getElementById("clientName").value;
  const date = invoiceDate.value;

  const newInvoice = {
    id: Date.now(),
    number: invNumber,
    client: client,
    date: date,
    total: totals.grandTotal,
    currency: totals.currency,
    status: "pending"
  };

  invoicesLedger.unshift(newInvoice);
  saveLedgerToStorage();
  showToast(i18nData[currentLang].toastSaved);
}

// --- Plan & Upgrade ---
function setPlan(plan, showFeedback = true) {
  currentPlan = plan;
  localStorage.setItem("invoicify_plan", plan);
  currentPlanBadge.textContent = `${plan.toUpperCase()} TIER`;

  if (showFeedback) {
    showToast(`${i18nData[currentLang].toastPlanUpdated}${plan.toUpperCase()}! 🎉`);
  }
}

// --- Toast Feedback ---
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// --- Navigation Tabs ---
function switchTab(targetTab) {
  navLinks.forEach(l => l.classList.remove("active"));
  viewSections.forEach(s => s.classList.remove("active"));

  const activeLink = document.querySelector(`.nav-link[data-tab="${targetTab}"]`);
  if (activeLink) activeLink.classList.add("active");

  const activeView = document.getElementById(`${targetTab}View`);
  if (activeView) activeView.classList.add("active");

  if (targetTab === "history") {
    renderHistory();
  }
}

// --- Localization Switching ---
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });

  document.getElementById("langText").textContent = lang === "ar" ? "English" : "العربية";
  renderHistory();
}

// --- Event Listeners ---
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    switchTab(link.getAttribute("data-tab"));
  });
});

upgradeBtn.addEventListener("click", () => {
  switchTab("pricing");
});

addItemBtn.addEventListener("click", () => {
  lineItems.push({ desc: "", qty: 1, rate: 0 });
  renderLineItems();
});

itemsTableBody.addEventListener("input", (e) => {
  const index = e.target.getAttribute("data-index");
  if (index === null) return;

  if (e.target.classList.contains("item-desc")) {
    lineItems[index].desc = e.target.value;
  } else if (e.target.classList.contains("item-qty")) {
    lineItems[index].qty = parseFloat(e.target.value) || 0;
  } else if (e.target.classList.contains("item-rate")) {
    lineItems[index].rate = parseFloat(e.target.value) || 0;
  }

  // Update total in that row
  const row = e.target.closest("tr");
  const totalCell = row.querySelector(".item-total");
  if (totalCell) {
    totalCell.textContent = (lineItems[index].qty * lineItems[index].rate).toFixed(2);
  }

  recalculateTotals();
});

itemsTableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-remove-row")) {
    const index = parseInt(e.target.getAttribute("data-index"), 10);
    lineItems.splice(index, 1);
    renderLineItems();
  }
});

currencySelect.addEventListener("change", recalculateTotals);
taxRateInput.addEventListener("input", recalculateTotals);
discountInput.addEventListener("input", recalculateTotals);

saveDraftBtn.addEventListener("click", saveCurrentInvoice);

printBtn.addEventListener("click", () => {
  window.print();
});

clearAllBtn.addEventListener("click", () => {
  if (confirm(i18nData[currentLang].confirmClearAll)) {
    invoicesLedger = [];
    saveLedgerToStorage();
    renderHistory();
  }
});

planButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const plan = btn.getAttribute("data-plan");
    setPlan(plan);
  });
});

langToggleBtn.addEventListener("click", () => {
  setLanguage(currentLang === "ar" ? "en" : "ar");
});

// Run on load
window.addEventListener("DOMContentLoaded", () => {
  initDates();
  loadFromStorage();
  renderLineItems();
});
