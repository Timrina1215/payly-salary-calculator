(function (root) {
  "use strict";

  var MAX_MONEY = 1e9;
  var CURRENCIES = ["USD", "EUR", "GBP", "RUB"];
  var LANGS = ["en", "ru", "fr", "ar"];
  var SYMBOLS = { USD: "$", EUR: "€", GBP: "£", RUB: "₽" };
  var LOCALES = {
    en: "en-US",
    ru: "ru-RU",
    fr: "fr-FR",
    ar: "ar-EG-u-nu-latn",
  };

  var DICT = {
    en: {
      subtitle: "Salary Calculator",
      language: "Language",
      currency: "Currency",
      currencyHint: "Switching currency changes the symbol only — amounts are not converted.",
      mode: "Calculation mode",
      calculate: "Calculate salary",
      hourly: "Hourly",
      monthly: "Monthly",
      monthRow: "Monthly",
      hourlyRate: "Hourly rate",
      hoursPerWeek: "Hours per week",
      hoursSuffix: "h",
      hoursHint: "From 0 to 168 hours.",
      monthlySalary: "Monthly salary",
      taxRate: "Tax rate %",
      taxHint: "A simple percentage from 0 to 100.",
      gross: "Gross income",
      taxes: "Estimated taxes",
      net: "Net income",
      grossShort: "Gross",
      taxShort: "Tax",
      netShort: "Net",
      weekly: "Weekly",
      annual: "Annual",
      perMonth: "per month",
      breakdown: "Full breakdown",
      estimate: "Estimate",
      reset: "Reset",
      formula: "Annual income uses 52 weeks. The monthly average is annual income ÷ 12.",
      disclaimer: "This result is an approximate estimate and is not tax or financial advice.",
      privacy: "Your salary data stays on your device.",
      themeLight: "Light",
      themeDark: "Dark",
      themeToLight: "Switch to light mode",
      themeToDark: "Switch to dark mode",
      errNegative: "Enter a value of zero or greater.",
      errTax: "Tax rate must be between 0 and 100.",
      errHours: "Hours per week must be between 0 and 168.",
      errInvalid: "Enter a valid number.",
      errLarge: "That value is too large.",
      summary: "Results summary",
      title: "Payly — Salary Calculator",
      description: "Payly estimates gross pay, tax, and take-home pay. Your salary data stays on your device.",
    },
    ru: {
      subtitle: "Калькулятор зарплаты",
      language: "Язык",
      currency: "Валюта",
      currencyHint: "Смена валюты меняет только знак — суммы не конвертируются.",
      mode: "Режим расчёта",
      calculate: "Рассчитать зарплату",
      hourly: "Почасовая",
      monthly: "За месяц",
      monthRow: "В месяц",
      hourlyRate: "Почасовая ставка",
      hoursPerWeek: "Часов в неделю",
      hoursSuffix: "ч",
      hoursHint: "От 0 до 168 часов.",
      monthlySalary: "Зарплата в месяц",
      taxRate: "Налоговая ставка, %",
      taxHint: "Простой процент от 0 до 100.",
      gross: "Доход до налогов",
      taxes: "Оценка налогов",
      net: "Чистый доход",
      grossShort: "До вычета",
      taxShort: "Налог",
      netShort: "Чистыми",
      weekly: "В неделю",
      annual: "В год",
      perMonth: "в месяц",
      breakdown: "Полная разбивка",
      estimate: "Оценка",
      reset: "Сбросить",
      formula: "Годовой доход считается по 52 неделям. Среднее за месяц — это годовой доход ÷ 12.",
      disclaimer: "Результат является приблизительной оценкой и не является налоговой или финансовой консультацией.",
      privacy: "Данные о вашей зарплате остаются на вашем устройстве.",
      themeLight: "Светлая",
      themeDark: "Тёмная",
      themeToLight: "Включить светлую тему",
      themeToDark: "Включить тёмную тему",
      errNegative: "Введите значение не меньше нуля.",
      errTax: "Налоговая ставка должна быть от 0 до 100.",
      errHours: "Количество часов в неделю должно быть от 0 до 168.",
      errInvalid: "Введите корректное число.",
      errLarge: "Слишком большое значение.",
      summary: "Сводка результатов",
      title: "Payly — Калькулятор зарплаты",
      description: "Payly оценивает доход до налогов, налог и сумму на руки. Данные остаются на устройстве.",
    },
    fr: {
      subtitle: "Calculateur de salaire",
      language: "Langue",
      currency: "Devise",
      currencyHint: "Changer de devise modifie uniquement le symbole — les montants ne sont pas convertis.",
      mode: "Mode de calcul",
      calculate: "Calculer le salaire",
      hourly: "Horaire",
      monthly: "Mensuel",
      monthRow: "Mensuel",
      hourlyRate: "Taux horaire",
      hoursPerWeek: "Heures par semaine",
      hoursSuffix: "h",
      hoursHint: "De 0 à 168 heures.",
      monthlySalary: "Salaire mensuel",
      taxRate: "Taux d'imposition %",
      taxHint: "Un pourcentage simple de 0 à 100.",
      gross: "Revenu brut",
      taxes: "Impôts estimés",
      net: "Revenu net",
      grossShort: "Brut",
      taxShort: "Impôt",
      netShort: "Net",
      weekly: "Hebdomadaire",
      annual: "Annuel",
      perMonth: "par mois",
      breakdown: "Détail complet",
      estimate: "Estimation",
      reset: "Réinitialiser",
      formula: "Le revenu annuel est calculé sur 52 semaines. La moyenne mensuelle correspond au revenu annuel ÷ 12.",
      disclaimer: "Ce résultat est une estimation approximative et ne constitue pas un conseil fiscal ou financier.",
      privacy: "Les données de votre salaire restent sur votre appareil.",
      themeLight: "Clair",
      themeDark: "Sombre",
      themeToLight: "Activer le mode clair",
      themeToDark: "Activer le mode sombre",
      errNegative: "Saisissez une valeur supérieure ou égale à zéro.",
      errTax: "Le taux d'imposition doit être compris entre 0 et 100.",
      errHours: "Les heures par semaine doivent être comprises entre 0 et 168.",
      errInvalid: "Saisissez un nombre valide.",
      errLarge: "La valeur est trop élevée.",
      summary: "Résumé des résultats",
      title: "Payly — Calculateur de salaire",
      description: "Payly estime le brut, l'impôt et le net. Vos données restent sur votre appareil.",
    },
    ar: {
      subtitle: "حاسبة الراتب",
      language: "اللغة",
      currency: "العملة",
      currencyHint: "تغيير العملة يبدّل الرمز فقط — لا تُحوَّل المبالغ.",
      mode: "وضع الحساب",
      calculate: "احسب الراتب",
      hourly: "بالساعة",
      monthly: "شهري",
      monthRow: "شهري",
      hourlyRate: "الأجر بالساعة",
      hoursPerWeek: "ساعات العمل أسبوعيًا",
      hoursSuffix: "س",
      hoursHint: "من 0 إلى 168 ساعة.",
      monthlySalary: "الراتب الشهري",
      taxRate: "نسبة الضريبة ٪",
      taxHint: "نسبة مئوية بسيطة من 0 إلى 100.",
      gross: "الدخل الإجمالي",
      taxes: "الضرائب التقديرية",
      net: "صافي الدخل",
      grossShort: "الإجمالي",
      taxShort: "الضريبة",
      netShort: "الصافي",
      weekly: "أسبوعي",
      annual: "سنوي",
      perMonth: "في الشهر",
      breakdown: "التفاصيل الكاملة",
      estimate: "تقدير",
      reset: "إعادة تعيين",
      formula: "يُحسب الدخل السنوي على أساس 52 أسبوعًا. المتوسط الشهري = الدخل السنوي ÷ 12.",
      disclaimer: "هذه النتيجة تقدير تقريبي وليست استشارة ضريبية أو مالية.",
      privacy: "تبقى بيانات راتبك على جهازك.",
      themeLight: "فاتح",
      themeDark: "داكن",
      themeToLight: "التبديل إلى الوضع الفاتح",
      themeToDark: "التبديل إلى الوضع الداكن",
      errNegative: "يُرجى إدخال قيمة صفر أو أكبر.",
      errTax: "يجب أن تكون نسبة الضريبة بين 0 و 100.",
      errHours: "يجب أن تكون ساعات الأسبوع بين 0 و 168.",
      errInvalid: "يُرجى إدخال رقم صالح.",
      errLarge: "القيمة كبيرة جدًا.",
      summary: "ملخص النتائج",
      title: "Payly — حاسبة الراتب",
      description: "يقدّر Payly الدخل الإجمالي والضريبة والصافي. تبقى بياناتك على جهازك.",
    },
  };

  var state = {
    lang: "en",
    theme: "light",
    themePref: null,
    currency: "USD",
    mode: "hourly",
    hourlyRate: "",
    hours: "",
    salary: "",
    tax: "",
  };

  function t(key) {
    var pack = DICT[state.lang] || DICT.en;
    return Object.prototype.hasOwnProperty.call(pack, key) ? pack[key] : DICT.en[key] || key;
  }

  function storageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (err) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      if (value == null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch (err) {
      /* private mode */
    }
  }

  function digitsToLatin(value) {
    return String(value)
      .replace(/[٠-٩]/g, function (d) {
        return String("٠١٢٣٤٥٦٧٨٩".indexOf(d));
      })
      .replace(/[۰-۹]/g, function (d) {
        return String("۰۱۲۳۴۵۶۷۸۹".indexOf(d));
      })
      .replace(/\u066B/g, ".")
      .replace(/\u066C/g, ",")
      .replace(/[٪%]/g, "");
  }

  function normalizeNumberString(raw, lang) {
    var s = digitsToLatin(raw).trim().replace(/[$€£₽\s\u00a0\u202f]/g, "");
    if (s === "") return "";
    s = s.replace(/−/g, "-");
    if (s.indexOf("-") !== -1) return s;

    var commas = (s.match(/,/g) || []).length;
    var dots = (s.match(/\./g) || []).length;

    if (lang === "en") {
      if (commas && dots) {
        if (s.lastIndexOf(".") > s.lastIndexOf(",")) s = s.replace(/,/g, "");
        else s = s.replace(/\./g, "").replace(",", ".");
      } else if (commas) {
        if (/^\d{1,3}(,\d{3})+$/.test(s)) s = s.replace(/,/g, "");
        else if (commas === 1) s = s.replace(",", ".");
        else return null;
      }
    } else if (commas && dots) {
      if (s.lastIndexOf(",") > s.lastIndexOf(".")) s = s.replace(/\./g, "").replace(",", ".");
      else s = s.replace(/,/g, "");
    } else if (commas === 1) {
      s = s.replace(",", ".");
    } else if (commas > 1) {
      return null;
    } else if (dots > 1) {
      if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, "");
      else return null;
    }

    if (/^\d+\.$/.test(s)) s = s.slice(0, -1);
    return s;
  }

  function parseField(raw, options) {
    var opts = options || {};
    var max = typeof opts.max === "number" ? opts.max : MAX_MONEY;
    var tooBig = opts.tooBig || "large";
    var lang = opts.lang || "en";
    if (raw == null || String(raw).trim() === "") return { ok: true, empty: true, value: 0 };
    var normalized = normalizeNumberString(raw, lang);
    if (normalized == null || normalized === "") return { ok: false, error: "invalid" };
    if (normalized.indexOf("-") !== -1) return { ok: false, error: "negative" };
    if (!/^\d+(\.\d+)?$/.test(normalized)) return { ok: false, error: "invalid" };
    var value = Number(normalized);
    if (!Number.isFinite(value)) return { ok: false, error: "invalid" };
    if (value < 0) return { ok: false, error: "negative" };
    if (value > max) return { ok: false, error: tooBig };
    return { ok: true, empty: false, value: value };
  }

  function toCents(amount) {
    if (!Number.isFinite(amount)) return null;
    return Math.round(amount * 100);
  }

  function periodMoney(gross) {
    var grossC = toCents(gross);
    if (grossC == null) return null;
    return { grossC: grossC };
  }

  // Annual = weekly × 52. Average month = annual ÷ 12. Never treat a month as 4 weeks.
  function compute(input) {
    var taxPct = input.taxPct;
    if (!Number.isFinite(taxPct) || taxPct < 0 || taxPct > 100) return null;
    var grossAnnual;
    if (input.mode === "hourly") {
      if (!Number.isFinite(input.rate) || !Number.isFinite(input.hours)) return null;
      if (input.rate < 0 || input.hours < 0 || input.hours > 168) return null;
      if (input.rate > MAX_MONEY) return null;
      grossAnnual = input.rate * input.hours * 52;
    } else {
      if (!Number.isFinite(input.salary) || input.salary < 0 || input.salary > MAX_MONEY) return null;
      grossAnnual = input.salary * 12;
    }
    if (!Number.isFinite(grossAnnual)) return null;
    var grossWeekly = grossAnnual / 52;
    var grossMonthly = grossAnnual / 12;
    var periods = {
      week: periodMoney(grossWeekly),
      month: periodMoney(grossMonthly),
      year: periodMoney(grossAnnual),
    };
    if (!periods.week || !periods.month || !periods.year) return null;
    var keys = ["week", "month", "year"];
    var out = { gross: {}, tax: {}, net: {} };
    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      var grossC = periods[key].grossC;
      var taxC = Math.round((grossC * taxPct) / 100);
      var netC = grossC - taxC;
      out.gross[key] = grossC / 100;
      out.tax[key] = taxC / 100;
      out.net[key] = netC / 100;
    }
    return out;
  }

  function formatMoney(amount, currency, lang) {
    if (typeof amount !== "number" || !Number.isFinite(amount)) return "—";
    var code = CURRENCIES.indexOf(currency) === -1 ? "USD" : currency;
    var locale = LOCALES[lang] || "en-US";
    var number;
    try {
      number = new Intl.NumberFormat(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);
    } catch (err) {
      return "—";
    }
    var symbol = SYMBOLS[code];
    if (lang === "en") return symbol + number;
    return number + "\u00a0" + symbol;
  }

  root.PaylyCore = {
    DICT: DICT,
    parseField: parseField,
    compute: compute,
    formatMoney: formatMoney,
  };

  if (typeof document === "undefined") return;

  var els = {};
  var manualTheme = false;

  function $(id) {
    return document.getElementById(id);
  }

  function cacheEls() {
    els.hourlyRate = $("hourly-rate");
    els.hours = $("hours-week");
    els.salary = $("monthly-salary");
    els.tax = $("tax-rate");
    els.netHero = $("net-hero");
    els.netWeek = $("net-week");
    els.netYear = $("net-year");
    els.grossMonth = $("gross-month");
    els.taxMonth = $("tax-month");
    els.breakdown = $("breakdown-list");
    els.themeBtn = $("theme-toggle");
    els.themeIcon = $("theme-icon");
    els.themeLabel = $("theme-label");
    els.hourlyPanel = $("panel-hourly");
    els.monthlyPanel = $("panel-monthly");
    els.hourlyTab = $("tab-hourly");
    els.monthlyTab = $("tab-monthly");
  }

  function systemTheme() {
    var tg = telegramApp();
    if (tg && isInsideTelegram() && (tg.colorScheme === "dark" || tg.colorScheme === "light")) {
      return tg.colorScheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    state.theme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", state.theme);
    var meta = $("theme-color");
    if (meta) meta.setAttribute("content", state.theme === "dark" ? "#0c100e" : "#e7eee9");
    paintThemeButton();
    syncTelegramChrome();
  }

  function paintThemeButton() {
    if (!els.themeBtn) return;
    var dark = state.theme === "dark";
    els.themeLabel.textContent = dark ? t("themeDark") : t("themeLight");
    els.themeBtn.setAttribute("aria-label", dark ? t("themeToLight") : t("themeToDark"));
    els.themeIcon.innerHTML = dark
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/></svg>';
  }

  function applyLanguage(lang) {
    state.lang = LANGS.indexOf(lang) === -1 ? "en" : lang;
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.title = t("title");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("description"));
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i += 1) {
      var node = nodes[i];
      var key = node.getAttribute("data-i18n");
      var attr = node.getAttribute("data-i18n-attr");
      var value = t(key);
      if (attr) node.setAttribute(attr, value);
      else node.textContent = value;
    }
    var langButtons = document.querySelectorAll("#lang-switch button");
    for (var j = 0; j < langButtons.length; j += 1) {
      var btn = langButtons[j];
      var on = btn.getAttribute("data-lang") === state.lang;
      btn.setAttribute("aria-checked", on ? "true" : "false");
    }
    var names = { en: "English", ru: "Русский", fr: "Français", ar: "العربية" };
    for (var k = 0; k < langButtons.length; k += 1) {
      var item = langButtons[k];
      var code = item.getAttribute("data-lang");
      item.setAttribute("aria-label", names[code] || code);
    }
    paintThemeButton();
    render();
  }

  function applyCurrency(code) {
    state.currency = CURRENCIES.indexOf(code) === -1 ? "USD" : code;
    var symbol = SYMBOLS[state.currency];
    var suffixes = document.querySelectorAll(".currency-suffix");
    for (var i = 0; i < suffixes.length; i += 1) suffixes[i].textContent = symbol;
    var buttons = document.querySelectorAll("#currency-switch button");
    for (var j = 0; j < buttons.length; j += 1) {
      var btn = buttons[j];
      btn.setAttribute("aria-checked", btn.getAttribute("data-currency") === state.currency ? "true" : "false");
    }
    render();
  }

  function applyMode(mode) {
    state.mode = mode === "monthly" ? "monthly" : "hourly";
    var hourly = state.mode === "hourly";
    els.hourlyPanel.hidden = !hourly;
    els.monthlyPanel.hidden = hourly;
    els.hourlyTab.setAttribute("aria-selected", hourly ? "true" : "false");
    els.monthlyTab.setAttribute("aria-selected", hourly ? "false" : "true");
    els.hourlyTab.tabIndex = hourly ? 0 : -1;
    els.monthlyTab.tabIndex = hourly ? -1 : 0;
    render();
  }

  function errorText(code) {
    if (code === "negative") return t("errNegative");
    if (code === "tax") return t("errTax");
    if (code === "hours") return t("errHours");
    if (code === "large") return t("errLarge");
    return t("errInvalid");
  }

  function showFieldError(id, message) {
    var control = document.querySelector('[data-control="' + id + '"]');
    var error = document.querySelector('[data-for="' + id + '"]');
    var input = $(id);
    if (control) control.classList.toggle("is-invalid", Boolean(message));
    if (input) input.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) error.textContent = message || "";
  }

  function setFigure(el, text) {
    if (!el) return;
    if (el.textContent === text) return;
    el.textContent = text;
    el.classList.remove("tick");
    void el.offsetWidth;
    el.classList.add("tick");
  }

  function moneyOrDash(amount, ok) {
    if (!ok) return "—";
    return formatMoney(amount, state.currency, state.lang);
  }

  function renderBreakdown(result, ok) {
    els.breakdown.replaceChildren();
    var periods = [
      { key: "week", label: "weekly" },
      { key: "month", label: "perMonth" },
      { key: "year", label: "annual" },
    ];
    for (var i = 0; i < periods.length; i += 1) {
      var period = periods[i];
      var li = document.createElement("li");
      li.className = "break-row" + (period.key === "month" ? " is-focus" : "");
      var title = document.createElement("p");
      title.className = "break-period";
      title.textContent = t(period.key === "week" ? "weekly" : period.key === "year" ? "annual" : "monthRow");
      var grid = document.createElement("div");
      grid.className = "break-grid";
      var cells = [
        ["grossShort", "gross"],
        ["taxShort", "tax"],
        ["netShort", "net"],
      ];
      for (var c = 0; c < cells.length; c += 1) {
        var wrap = document.createElement("div");
        var span = document.createElement("span");
        span.textContent = t(cells[c][0]);
        var strong = document.createElement("strong");
        strong.className = "num";
        strong.id = "val-" + period.key + "-" + cells[c][1];
        var amount = ok ? result[cells[c][1]][period.key] : null;
        strong.textContent = moneyOrDash(amount, ok);
        wrap.append(span, strong);
        grid.append(wrap);
      }
      li.append(title, grid);
      els.breakdown.append(li);
    }
  }

  function currentNumbers() {
    var rate = parseField(els.hourlyRate.value, { max: MAX_MONEY, lang: state.lang });
    var hours = parseField(els.hours.value, { max: 168, tooBig: "hours", lang: state.lang });
    var salary = parseField(els.salary.value, { max: MAX_MONEY, lang: state.lang });
    var tax = parseField(els.tax.value, { max: 100, tooBig: "tax", lang: state.lang });
    return { rate: rate, hours: hours, salary: salary, tax: tax };
  }

  function activeErrors(parsed) {
    var errors = {};
    if (state.mode === "hourly") {
      if (!parsed.rate.ok) errors["hourly-rate"] = errorText(parsed.rate.error);
      if (!parsed.hours.ok) errors["hours-week"] = errorText(parsed.hours.error);
    } else if (!parsed.salary.ok) {
      errors["monthly-salary"] = errorText(parsed.salary.error);
    }
    if (!parsed.tax.ok) errors["tax-rate"] = errorText(parsed.tax.error);
    return errors;
  }

  function render() {
    var parsed = currentNumbers();
    var errors = activeErrors(parsed);
    showFieldError("hourly-rate", errors["hourly-rate"] || "");
    showFieldError("hours-week", errors["hours-week"] || "");
    showFieldError("monthly-salary", errors["monthly-salary"] || "");
    showFieldError("tax-rate", errors["tax-rate"] || "");
    var ok = Object.keys(errors).length === 0;
    var result = null;
    if (ok) {
      result = compute({
        mode: state.mode,
        rate: parsed.rate.value,
        hours: parsed.hours.value,
        salary: parsed.salary.value,
        taxPct: parsed.tax.value,
      });
      ok = Boolean(result);
    }
    setFigure(els.netHero, moneyOrDash(ok ? result.net.month : null, ok));
    setFigure(els.netWeek, moneyOrDash(ok ? result.net.week : null, ok));
    setFigure(els.netYear, moneyOrDash(ok ? result.net.year : null, ok));
    setFigure(els.grossMonth, moneyOrDash(ok ? result.gross.month : null, ok));
    setFigure(els.taxMonth, moneyOrDash(ok ? result.tax.month : null, ok));
    renderBreakdown(result, ok);
  }

  function persist() {
    storageSet(
      "payly-inputs",
      JSON.stringify({
        hourlyRate: els.hourlyRate.value,
        hours: els.hours.value,
        salary: els.salary.value,
        tax: els.tax.value,
        mode: state.mode,
        currency: state.currency,
      }),
    );
    storageSet("payly-lang", state.lang);
    if (state.themePref) storageSet("payly-theme", state.themePref);
  }

  function restore() {
    var lang = storageGet("payly-lang");
    if (LANGS.indexOf(lang) !== -1) state.lang = lang;
    var theme = storageGet("payly-theme");
    if (theme === "light" || theme === "dark") {
      state.themePref = theme;
      manualTheme = true;
      state.theme = theme;
    } else {
      state.theme = systemTheme();
    }
    var raw = storageGet("payly-inputs");
    if (raw) {
      try {
        var saved = JSON.parse(raw);
        if (saved && typeof saved === "object") {
          if (typeof saved.hourlyRate === "string") els.hourlyRate.value = saved.hourlyRate.slice(0, 18);
          if (typeof saved.hours === "string") els.hours.value = saved.hours.slice(0, 8);
          if (typeof saved.salary === "string") els.salary.value = saved.salary.slice(0, 18);
          if (typeof saved.tax === "string") els.tax.value = saved.tax.slice(0, 8);
          if (saved.mode === "monthly" || saved.mode === "hourly") state.mode = saved.mode;
          if (CURRENCIES.indexOf(saved.currency) !== -1) state.currency = saved.currency;
        }
      } catch (err) {
        /* ignore broken storage */
      }
    }
  }

  function resetInputs() {
    els.hourlyRate.value = "";
    els.hours.value = "";
    els.salary.value = "";
    els.tax.value = "";
    persist();
    render();
  }

  function onInput() {
    persist();
    render();
  }

  function moveTab(delta) {
    var order = [els.hourlyTab, els.monthlyTab];
    var index = state.mode === "hourly" ? 0 : 1;
    var next = order[(index + delta + order.length) % order.length];
    applyMode(next.getAttribute("data-mode"));
    persist();
    next.focus();
  }

  function telegramApp() {
    return root.Telegram && root.Telegram.WebApp ? root.Telegram.WebApp : null;
  }

  function isInsideTelegram() {
    var tg = telegramApp();
    if (!tg) return false;
    if (tg.initData && String(tg.initData).length > 0) return true;
    if (tg.platform && tg.platform !== "unknown") return true;
    return false;
  }

  function syncTelegramChrome() {
    var tg = telegramApp();
    if (!tg || !isInsideTelegram()) return;
    try {
      tg.ready();
      tg.expand();
      var bg = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
      if (bg && typeof tg.setHeaderColor === "function") tg.setHeaderColor(bg);
      if (bg && typeof tg.setBackgroundColor === "function") tg.setBackgroundColor(bg);
    } catch (err) {
      /* Telegram API is optional */
    }
  }

  function bindTelegram() {
    var tg = telegramApp();
    if (!tg || !isInsideTelegram()) return;
    if (!manualTheme && (tg.colorScheme === "dark" || tg.colorScheme === "light")) {
      applyTheme(tg.colorScheme);
    } else {
      syncTelegramChrome();
    }
    if (typeof tg.onEvent === "function") {
      tg.onEvent("themeChanged", function () {
        if (!manualTheme && (tg.colorScheme === "dark" || tg.colorScheme === "light")) applyTheme(tg.colorScheme);
      });
    }
  }

  function maybeLoadTelegramSdk() {
    if (telegramApp()) {
      bindTelegram();
      return;
    }
    var blob = String(location.hash || "") + String(location.search || "");
    var hinted = /tgWebApp/i.test(blob) || root.TelegramWebviewProxy || root.TelegramWebviewProxyProto;
    if (!hinted) return;
    var script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    script.onload = bindTelegram;
    document.head.appendChild(script);
  }

  function boot() {
    var app = document.querySelector(".app");
    if (!app || app.getAttribute("data-booted") === "1") return;
    app.setAttribute("data-booted", "1");
    cacheEls();
    restore();
    applyTheme(state.themePref || state.theme);
    applyLanguage(state.lang);
    applyCurrency(state.currency);
    applyMode(state.mode);

    document.getElementById("calc-form").addEventListener("submit", function (event) {
      event.preventDefault();
    });
    [els.hourlyRate, els.hours, els.salary, els.tax].forEach(function (input) {
      input.addEventListener("input", onInput);
    });
    $("reset").addEventListener("click", resetInputs);
    els.themeBtn.addEventListener("click", function () {
      var next = state.theme === "dark" ? "light" : "dark";
      state.themePref = next;
      manualTheme = true;
      storageSet("payly-theme", next);
      applyTheme(next);
    });

    document.getElementById("lang-switch").addEventListener("click", function (event) {
      var btn = event.target.closest("button");
      if (!btn) return;
      applyLanguage(btn.getAttribute("data-lang"));
      persist();
    });
    document.getElementById("currency-switch").addEventListener("click", function (event) {
      var btn = event.target.closest("button");
      if (!btn) return;
      applyCurrency(btn.getAttribute("data-currency"));
      persist();
    });
    document.getElementById("mode-switch").addEventListener("click", function (event) {
      var btn = event.target.closest("button");
      if (!btn) return;
      applyMode(btn.getAttribute("data-mode"));
      persist();
    });
    document.getElementById("mode-switch").addEventListener("keydown", function (event) {
      var dir = document.documentElement.dir === "rtl" ? -1 : 1;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveTab(dir);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveTab(-dir);
      } else if (event.key === "Home") {
        event.preventDefault();
        applyMode("hourly");
        persist();
        els.hourlyTab.focus();
      } else if (event.key === "End") {
        event.preventDefault();
        applyMode("monthly");
        persist();
        els.monthlyTab.focus();
      }
    });

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
      if (!manualTheme) applyTheme(systemTheme());
    });

    maybeLoadTelegramSdk();
    root.__paylyReady = true;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})(typeof window !== "undefined" ? window : globalThis);
