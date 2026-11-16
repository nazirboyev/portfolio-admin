import React, { useState, useEffect } from 'react';
import {
  Lock,
  LogOut,
  Plus,
  Trash2,
  Upload,
  User,
  ExternalLink,
  MessageSquare,
  FolderGit2,
  Image as ImageIcon,
  Sun,
  Moon,
  ChevronDown,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Phone,
  Send,
  Edit3,
  Download,
  FileCode,
  Globe
} from 'lucide-react';

// Bayroqlar SVG
const UzbekFlag = () => (
  <svg className="lang-flag-svg" viewBox="0 0 640 480" width="22" height="15" style={{ borderRadius: 2 }}>
    <rect width="640" height="160" fill="#0099b5"/>
    <rect y="160" width="640" height="160" fill="#ce1126"/>
    <rect y="165" width="640" height="150" fill="#ffffff"/>
    <rect y="320" width="640" height="160" fill="#1eb53a"/>
    <circle cx="70" cy="80" r="30" fill="#ffffff"/>
    <circle cx="80" cy="80" r="30" fill="#0099b5"/>
  </svg>
);

const RussianFlag = () => (
  <svg className="lang-flag-svg" viewBox="0 0 640 480" width="22" height="15" style={{ borderRadius: 2 }}>
    <rect width="640" height="160" fill="#ffffff"/>
    <rect y="160" width="640" height="160" fill="#0039a6"/>
    <rect y="320" width="640" height="160" fill="#d52b1e"/>
  </svg>
);

const EnglishFlag = () => (
  <svg className="lang-flag-svg" viewBox="0 0 640 480" width="22" height="15" style={{ borderRadius: 2 }}>
    <rect width="640" height="480" fill="#012169"/>
    <path d="M0 0L640 480M640 0L0 480" stroke="#fff" strokeWidth="60"/>
    <path d="M0 0L640 480M640 0L0 480" stroke="#C8102E" strokeWidth="40"/>
    <path d="M320 0V480M0 240H640" stroke="#fff" strokeWidth="100"/>
    <path d="M320 0V480M0 240H640" stroke="#C8102E" strokeWidth="60"/>
  </svg>
);

const LANGUAGES = [
  { code: 'uz', name: "O'zbekcha", Flag: UzbekFlag },
  { code: 'ru', name: "Русский", Flag: RussianFlag },
  { code: 'en', name: "English", Flag: EnglishFlag }
];

const translations = {
  uz: {
    title: "Nazirboyev | Admin Paneli",
    loginTitle: "Admin Panelga Kirish",
    loginSubtitle: "Portfolio saytingizni xavfsiz boshqaring",
    loginLabel: "Login",
    passLabel: "Parol",
    loginBtn: "Tizimga kirish",
    logoutBtn: "Chiqish",
    liveSiteBtn: "Portfolio Saytini Ko'rish",
    tabProjects: "Loyihalar",
    tabAvatar: "Profil Rasmi",
    tabMessages: "Kelgan Xabarlar",
    tabSystem: "Zaxira & Baza",
    statProjects: "Jami Loyihalar",
    statMessages: "Kelgan Xabarlar",
    statAvatar: "Profil Rasmi",
    statStatus: "Tizim Holati",
    online: "Faol & Bog'langan",
    ready: "Yuklangan",
    notSet: "O'rnatilmagan",
    addNewProj: "Yangi Loyiha Qo'shish",
    projName: "Loyiha nomi",
    projUrl: "Loyiha havolasi (URL)",
    projDesc: "Qisqacha tavsif",
    projTags: "Teglar (vergul bilan)",
    addBtn: "Loyihani Saqlash",
    existingProjs: "Mavjud Loyihalar",
    searchProj: "Loyihalarni qidirish...",
    editProj: "Tahrirlash",
    deleteProj: "O'chirish",
    avatarHeading: "Profil Rasmini Boshqarish",
    avatarDesc: "Ushbu rasm asosiy portfolio saytingizning Hero bo'limida ko'rinadi.",
    uploadLocal: "Kompyuterdan rasm yuklash",
    uploadBtn: "Rasm faylini tanlash",
    urlHeading: "Yoki rasmning to'g'ridan-to'g'ri havolasi (URL):",
    saveAvatarBtn: "Havolani saqlash",
    deleteAvatarBtn: "Rasmni o'chirish",
    messagesHeading: "Kelgan Xabarlar Qutisi",
    messagesDesc: "Portfolio saytidagi bog'lanish formasidan yuborilgan barcha xabarlar:",
    noMessages: "Hozircha hech qanday xabar kelmagan.",
    clearAllMessages: "Barcha xabarlarni tozalash",
    replyTelegram: "Telegram orqali yozish",
    replyCall: "Qo'ng'iroq qilish",
    exportJson: "JSON Zaxirani yuklab olish",
    importJson: "Zaxiradan tiklash (Import)",
    syncSuccess: "O'zgarishlar portfolio bazasiga saqlandi!",
    errorLogin: "Login yoki parol noto'g'ri!"
  },
  ru: {
    title: "Назирбоев | Панель управления",
    loginTitle: "Вход в Панель Управления",
    loginSubtitle: "Безопасное управление вашим сайтом-портфолио",
    loginLabel: "Логин",
    passLabel: "Пароль",
    loginBtn: "Войти в систему",
    logoutBtn: "Выйти",
    liveSiteBtn: "Открыть сайт-портфолио",
    tabProjects: "Проекты",
    tabAvatar: "Фото профиля",
    tabMessages: "Входящие сообщения",
    tabSystem: "Резервная копия",
    statProjects: "Всего проектов",
    statMessages: "Сообщений",
    statAvatar: "Фото профиля",
    statStatus: "Статус системы",
    online: "Активно и подключено",
    ready: "Установлено",
    notSet: "Не установлено",
    addNewProj: "Добавить новый проект",
    projName: "Название проекта",
    projUrl: "Ссылка на проект (URL)",
    projDesc: "Краткое описание",
    projTags: "Теги (через запятую)",
    addBtn: "Сохранить проект",
    existingProjs: "Существующие проекты",
    searchProj: "Поиск проектов...",
    editProj: "Редактировать",
    deleteProj: "Удалить",
    avatarHeading: "Управление фото профиля",
    avatarDesc: "Это фото отображается в блоке Hero на вашем сайте-портфолио.",
    uploadLocal: "Загрузить фото с устройства",
    uploadBtn: "Выбрать файл фото",
    urlHeading: "Или прямая ссылка на фото (URL):",
    saveAvatarBtn: "Сохранить ссылку",
    deleteAvatarBtn: "Удалить фото",
    messagesHeading: "Входящие сообщения",
    messagesDesc: "Все сообщения, отправленные через контактную форму портфолио:",
    noMessages: "Пока нет сообщений.",
    clearAllMessages: "Очистить все сообщения",
    replyTelegram: "Написать в Telegram",
    replyCall: "Позвонить",
    exportJson: "Скачать резервную копию JSON",
    importJson: "Восстановить из файла (Import)",
    syncSuccess: "Изменения сохранены в базу портфолио!",
    errorLogin: "Неверный логин или пароль!"
  },
  en: {
    title: "Nazirboyev | Admin Panel",
    loginTitle: "Admin Panel Login",
    loginSubtitle: "Securely manage your portfolio website",
    loginLabel: "Username",
    passLabel: "Password",
    loginBtn: "Sign In",
    logoutBtn: "Logout",
    liveSiteBtn: "View Live Portfolio",
    tabProjects: "Projects",
    tabAvatar: "Profile Photo",
    tabMessages: "Messages Inbox",
    tabSystem: "Backup & Sync",
    statProjects: "Total Projects",
    statMessages: "Messages",
    statAvatar: "Profile Photo",
    statStatus: "System Status",
    online: "Active & Synced",
    ready: "Set",
    notSet: "Not set",
    addNewProj: "Add New Project",
    projName: "Project Title",
    projUrl: "Project URL",
    projDesc: "Short Description",
    projTags: "Tags (comma separated)",
    addBtn: "Save Project",
    existingProjs: "Existing Projects",
    searchProj: "Search projects...",
    editProj: "Edit",
    deleteProj: "Delete",
    avatarHeading: "Manage Profile Photo",
    avatarDesc: "This photo is shown in the Hero section of your live portfolio.",
    uploadLocal: "Upload photo from device",
    uploadBtn: "Select Photo File",
    urlHeading: "Or direct image URL:",
    saveAvatarBtn: "Save URL",
    deleteAvatarBtn: "Remove Photo",
    messagesHeading: "Messages Inbox",
    messagesDesc: "All messages submitted via the portfolio contact form:",
    noMessages: "No messages yet.",
    clearAllMessages: "Clear All Messages",
    replyTelegram: "Reply via Telegram",
    replyCall: "Call Phone",
    exportJson: "Download JSON Backup",
    importJson: "Restore from File",
    syncSuccess: "Changes saved to portfolio database!",
    errorLogin: "Invalid username or password!"
  }
};

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('admin_lang') || 'uz');
  const [theme, setTheme] = useState(() => localStorage.getItem('admin_theme') || 'dark');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('portfolio_admin_auth') === 'true';
  });

  const t = translations[lang] || translations.uz;
  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
  const otherLangs = LANGUAGES.filter((l) => l.code !== lang);

  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Dashboard state
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'avatar' | 'messages' | 'system'
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [statusAlert, setStatusAlert] = useState('');

  // Data from shared portfolio database
  const [projects, setProjects] = useState([]);
  const [avatar, setAvatar] = useState('/avatar.jpg');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Form states
  const [newProject, setNewProject] = useState({ title: '', url: '', description: '', tags: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [avatarUrlInput, setAvatarUrlInput] = useState('');
  const [editingProject, setEditingProject] = useState(null);

  // Apply Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('admin_theme', theme);
  }, [theme]);

  // Apply Language
  useEffect(() => {
    localStorage.setItem('admin_lang', lang);
  }, [lang]);

  // Click outside to close language dropdown
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.lang-dropdown-wrapper')) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Fetch portfolio data from shared /api/data
  const loadData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/data');
      if (res.ok) {
        const data = await res.json();
        if (data.projects) setProjects(data.projects);
        if (data.avatar) setAvatar(data.avatar);
        if (data.messages) setMessages(data.messages);
      }
    } catch (err) {
      console.warn('API error, reading fallback:', err);
      // Fallback from localStorage
      const savedProjects = localStorage.getItem('nazirboyev_projects');
      if (savedProjects) setProjects(JSON.parse(savedProjects));
      const savedAvatar = localStorage.getItem('nazirboyev_avatar');
      if (savedAvatar) setAvatar(savedAvatar);
      const savedMsgs = localStorage.getItem('nazirboyev_messages');
      if (savedMsgs) setMessages(JSON.parse(savedMsgs));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Sync to database
  const syncData = async (updatedProjects, updatedAvatar, updatedMessages) => {
    // Local storage fallback
    localStorage.setItem('nazirboyev_projects', JSON.stringify(updatedProjects));
    localStorage.setItem('nazirboyev_avatar', updatedAvatar);
    localStorage.setItem('nazirboyev_messages', JSON.stringify(updatedMessages));

    try {
      await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projects: updatedProjects,
          avatar: updatedAvatar,
          messages: updatedMessages
        })
      });
      triggerStatusAlert(t.syncSuccess);
    } catch (err) {
      console.warn('Sync failed:', err);
      triggerStatusAlert("Lokal saqlandi (tarmoq xatosi)");
    }
  };

  const triggerStatusAlert = (msg) => {
    setStatusAlert(msg);
    setTimeout(() => setStatusAlert(''), 4000);
  };

  // Login Handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'nazirboyev' && password === 'zuxra') {
      setIsAuthenticated(true);
      localStorage.setItem('portfolio_admin_auth', 'true');
      setLoginError('');
      setUsername('');
      setPassword('');
      loadData();
    } else {
      setLoginError(t.errorLogin);
    }
  };

  // Logout Handler
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('portfolio_admin_auth');
  };

  // Projects CRUD
  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title.trim() || !newProject.url.trim()) return;

    const tagsArray = newProject.tags
      ? newProject.tags.split(',').map((t) => t.trim()).filter(Boolean)
      : ['Web'];

    const formattedUrl = newProject.url.trim().startsWith('http')
      ? newProject.url.trim()
      : `https://${newProject.url.trim()}`;

    const projectItem = {
      id: Date.now(),
      title: newProject.title.trim(),
      url: formattedUrl,
      description: newProject.description.trim() || 'Web loyiha.',
      tags: tagsArray
    };

    const updated = [projectItem, ...projects];
    setProjects(updated);
    syncData(updated, avatar, messages);
    setNewProject({ title: '', url: '', description: '', tags: '' });
  };

  const handleDeleteProject = (id) => {
    if (window.confirm("Haqiqatan ham ushbu loyihani o'chirmoqchimisiz?")) {
      const updated = projects.filter((p) => p.id !== id);
      setProjects(updated);
      syncData(updated, avatar, messages);
    }
  };

  const handleSaveEditProject = (e) => {
    e.preventDefault();
    if (!editingProject) return;
    const tagsArray = typeof editingProject.tags === 'string'
      ? editingProject.tags.split(',').map(t => t.trim()).filter(Boolean)
      : editingProject.tags;

    const updated = projects.map(p => p.id === editingProject.id ? { ...editingProject, tags: tagsArray } : p);
    setProjects(updated);
    syncData(updated, avatar, messages);
    setEditingProject(null);
  };

  // Avatar Management
  const handleAvatarFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Fayl hajmi 5MB dan oshmasligi kerak!");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Img = reader.result;
        setAvatar(base64Img);
        syncData(projects, base64Img, messages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSetAvatarUrl = (e) => {
    e.preventDefault();
    if (avatarUrlInput.trim()) {
      const url = avatarUrlInput.trim();
      setAvatar(url);
      syncData(projects, url, messages);
      setAvatarUrlInput('');
    }
  };

  const handleDeleteAvatar = () => {
    if (window.confirm("Profil rasmini o'chirib standart holatga qaytarmoqchimisiz?")) {
      setAvatar('');
      syncData(projects, '', messages);
    }
  };

  // Messages Management
  const handleDeleteMessage = (id) => {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    syncData(projects, avatar, updated);
  };

  const handleClearAllMessages = () => {
    if (window.confirm("Barcha xabarlarni tozalashni tasdiqlaysizmi?")) {
      setMessages([]);
      syncData(projects, avatar, []);
    }
  };

  // Backup Export / Import
  const handleExportBackup = () => {
    const backupObj = { projects, avatar, messages, exportedAt: new Date().toISOString() };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupObj, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `nazirboyev-portfolio-backup-${Date.now()}.json`);
    dlAnchor.click();
  };

  const handleImportBackup = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed.projects) setProjects(parsed.projects);
          if (parsed.avatar) setAvatar(parsed.avatar);
          if (parsed.messages) setMessages(parsed.messages);
          syncData(parsed.projects || projects, parsed.avatar || avatar, parsed.messages || messages);
          alert("Zaxira muvaffaqiyatli tiklandi!");
        } catch {
          alert("Noto'g'ri JSON fayl!");
        }
      };
      reader.readAsText(file);
    }
  };

  // Filtered projects
  const filteredProjects = projects.filter((p) => {
    const q = searchQuery.toLowerCase();
    return p.title.toLowerCase().includes(q) || (p.tags && p.tags.some(t => t.toLowerCase().includes(q)));
  });

  // -------------------------------------------------------------
  // LOGIN SCREEN (agar autentifikatsiyadan o'tmagan bo'lsa)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="login-header">
            <img src="/logo.jpg" alt="Logo" className="login-logo" />
            <h1 className="login-title">{t.loginTitle}</h1>
            <p className="login-subtitle">{t.loginSubtitle}</p>
          </div>

          {loginError && (
            <div className="form-alert error">
              <AlertCircle size={18} />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">{t.loginLabel}</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="nazirboyev"
                  className="form-input has-icon"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{t.passLabel}</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="form-input has-icon"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? "Yashirish" : "Ko'rsatish"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '0.8rem' }}>
              <Lock size={17} />
              <span>{t.loginBtn}</span>
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '0.6rem' }}>
            {LANGUAGES.map((item) => (
              <button
                key={item.code}
                type="button"
                className={`btn-secondary ${lang === item.code ? 'active' : ''}`}
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.8rem' }}
                onClick={() => setLang(item.code)}
              >
                <item.Flag />
                <span>{item.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="dashboard-layout">
      {/* HEADER NAVBAR */}
      <header className="dashboard-header">
        <div className="header-container">
          <div className="header-brand">
            <img src="/logo.jpg" alt="Logo" className="brand-logo-img" />
            <div className="brand-info">
              <span className="brand-name">Nazirboyev</span>
              <span className="brand-badge">Admin Dashboard</span>
            </div>
          </div>

          <div className="header-actions">
            {/* Jonli Portfolio Saytga havola */}
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              title={t.liveSiteBtn}
            >
              <Globe size={15} color="var(--accent)" />
              <span style={{ display: 'none', md: 'inline' }}>{t.liveSiteBtn}</span>
              <ExternalLink size={13} style={{ opacity: 0.6 }} />
            </a>

            {/* Til tanlash Dropdown */}
            <div className="lang-dropdown-wrapper" style={{ position: 'relative' }}>
              <button
                type="button"
                className="btn-secondary"
                style={{ padding: '0.5rem 0.75rem', gap: '6px' }}
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              >
                <currentLang.Flag />
                <ChevronDown size={14} style={{ transform: langDropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>

              {langDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 6px)',
                    right: 0,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-card)',
                    padding: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    minWidth: '130px',
                    zIndex: 1000
                  }}
                >
                  {otherLangs.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      className="btn-secondary"
                      style={{ border: 'none', justifyContent: 'flex-start', padding: '0.5rem 0.75rem' }}
                      onClick={() => {
                        setLang(item.code);
                        setLangDropdownOpen(false);
                      }}
                    >
                      <item.Flag />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              className="btn-secondary"
              style={{ padding: '0.55rem' }}
              onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
              title={theme === 'dark' ? "Kunduzgi rejim" : "Tungi rejim"}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Chiqish (Logout) */}
            <button
              className="btn-danger"
              onClick={handleLogout}
              title={t.logoutBtn}
            >
              <LogOut size={16} />
              <span>{t.logoutBtn}</span>
            </button>
          </div>
        </div>
      </header>

      {/* DASHBOARD BODY */}
      <main className="dashboard-main">
        {/* Status Alert Notification */}
        {statusAlert && (
          <div className="form-alert success" style={{ marginBottom: '1.5rem' }}>
            <CheckCircle2 size={18} />
            <span>{statusAlert}</span>
          </div>
        )}

        {/* STATISTIKA KARTALARI */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <FolderGit2 size={24} />
            </div>
            <div className="stat-content">
              <span className="stat-value">{projects.length}</span>
              <span className="stat-label">{t.statProjects}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.15)' }}>
              <MessageSquare size={24} />
            </div>
            <div className="stat-content">
              <span className="stat-value">{messages.length}</span>
              <span className="stat-label">{t.statMessages}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ color: '#f59e0b', background: 'rgba(245, 158, 11, 0.15)' }}>
              <ImageIcon size={24} />
            </div>
            <div className="stat-content">
              <span className="stat-value" style={{ fontSize: '1.1rem' }}>
                {avatar ? t.ready : t.notSet}
              </span>
              <span className="stat-label">{t.statAvatar}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.15)' }}>
              <RefreshCw size={24} />
            </div>
            <div className="stat-content">
              <span className="stat-value" style={{ fontSize: '1.1rem', color: '#10b981' }}>
                {t.online}
              </span>
              <span className="stat-label">{t.statStatus}</span>
            </div>
          </div>
        </div>

        {/* ASOSIY BO'LIM TABLARI */}
        <div className="dashboard-tabs">
          <button
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FolderGit2 size={17} />
            <span>{t.tabProjects}</span>
            <span className="badge-pill">{projects.length}</span>
          </button>

          <button
            className={`tab-btn ${activeTab === 'avatar' ? 'active' : ''}`}
            onClick={() => setActiveTab('avatar')}
          >
            <ImageIcon size={17} />
            <span>{t.tabAvatar}</span>
          </button>

          <button
            className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <MessageSquare size={17} />
            <span>{t.tabMessages}</span>
            {messages.length > 0 && <span className="badge-pill" style={{ background: '#ef4444' }}>{messages.length}</span>}
          </button>

          <button
            className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`}
            onClick={() => setActiveTab('system')}
          >
            <FileCode size={17} />
            <span>{t.tabSystem}</span>
          </button>
        </div>

        {/* ==================================================== */}
        {/* TAB 1: LOYIHALAR BOSHQARUVI */}
        {/* ==================================================== */}
        {activeTab === 'projects' && (
          <div>
            {/* Yangi loyiha qo'shish formasi */}
            <div className="dashboard-card">
              <div className="card-title-bar">
                <h3 className="card-title">
                  <Plus size={20} color="var(--accent)" />
                  {t.addNewProj}
                </h3>
              </div>

              <form onSubmit={handleAddProject}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
                  <div className="form-group">
                    <label className="form-label">{t.projName}</label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Online Magazin CRM"
                      className="form-input"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{t.projUrl}</label>
                    <input
                      type="text"
                      required
                      placeholder="https://loyiha.vercel.app"
                      className="form-input"
                      value={newProject.url}
                      onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{t.projDesc}</label>
                  <textarea
                    rows={2}
                    placeholder="Loyiha vazifasi, texnologiyalari va imkoniyatlari haqida qisqacha..."
                    className="form-textarea"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t.projTags}</label>
                  <input
                    type="text"
                    placeholder="React, JavaScript, Tailwind, Vercel"
                    className="form-input"
                    value={newProject.tags}
                    onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: 'auto', padding: '0.75rem 2rem' }}>
                  <Plus size={18} />
                  <span>{t.addBtn}</span>
                </button>
              </form>
            </div>

            {/* Mavjud loyihalar ro'yxati */}
            <div className="dashboard-card">
              <div className="card-title-bar" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                <h3 className="card-title">
                  <FolderGit2 size={20} color="var(--accent)" />
                  {t.existingProjs} ({filteredProjects.length})
                </h3>

                <input
                  type="text"
                  placeholder={t.searchProj}
                  className="form-input"
                  style={{ maxWidth: '280px', padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {filteredProjects.length === 0 ? (
                <div className="empty-state">
                  <FolderGit2 size={48} style={{ opacity: 0.3, marginBottom: '0.5rem' }} />
                  <p>Hech qanday loyiha topilmadi.</p>
                </div>
              ) : (
                <div className="projects-list">
                  {filteredProjects.map((p) => (
                    <div key={p.id} className="project-item">
                      <div className="project-meta">
                        <div className="project-title-row">
                          <span className="project-title">{p.title}</span>
                          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                            {Array.isArray(p.tags) && p.tags.map((tag, i) => (
                              <span key={i} className="project-tag">{tag}</span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="project-url"
                        >
                          <ExternalLink size={12} />
                          <span>{p.url}</span>
                        </a>

                        <p className="project-desc">{p.description}</p>
                      </div>

                      <div className="project-actions">
                        <button
                          className="btn-secondary"
                          onClick={() => setEditingProject({ ...p, tags: Array.isArray(p.tags) ? p.tags.join(', ') : p.tags })}
                          title={t.editProj}
                        >
                          <Edit3 size={15} />
                          <span>{t.editProj}</span>
                        </button>

                        <button
                          className="btn-danger"
                          onClick={() => handleDeleteProject(p.id)}
                          title={t.deleteProj}
                        >
                          <Trash2 size={15} />
                          <span>{t.deleteProj}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 2: PROFIL RASMI (AVATAR) */}
        {/* ==================================================== */}
        {activeTab === 'avatar' && (
          <div className="dashboard-card">
            <div className="card-title-bar">
              <h3 className="card-title">
                <ImageIcon size={20} color="var(--accent)" />
                {t.avatarHeading}
              </h3>
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
              {t.avatarDesc}
            </p>

            <div className="avatar-section-grid">
              {/* Preview Box */}
              <div className="avatar-preview-card">
                {avatar ? (
                  <img src={avatar} alt="Profil rasmi" className="avatar-big-img" />
                ) : (
                  <div className="avatar-placeholder-box">
                    <User size={48} />
                    <span style={{ fontSize: '0.85rem' }}>Rasm yo'q</span>
                  </div>
                )}

                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  {avatar ? "Joriy profil rasmi" : "Standart bo'sh rasm"}
                </span>

                {avatar && (
                  <button
                    className="btn-danger"
                    onClick={handleDeleteAvatar}
                    style={{ width: '100%' }}
                  >
                    <Trash2 size={15} />
                    <span>{t.deleteAvatarBtn}</span>
                  </button>
                )}
              </div>

              {/* Upload & URL Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ background: 'var(--input-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{t.uploadLocal}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
                    Qurilmangizdagi (JPG, PNG yoki WebP) fotosuratingizni to'g'ridan-to'g'ri tanlang. Rasm avtomatik ravishda tayyorlanadi va saqlanadi.
                  </p>
                  <label className="btn-primary" style={{ cursor: 'pointer', display: 'inline-flex', width: 'auto' }}>
                    <Upload size={17} />
                    <span>{t.uploadBtn}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarFileUpload}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>

                <form
                  onSubmit={handleSetAvatarUrl}
                  style={{ background: 'var(--input-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}
                >
                  <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{t.urlHeading}</h4>
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
                    <input
                      type="url"
                      placeholder="https://example.com/rasm.jpg"
                      className="form-input"
                      value={avatarUrlInput}
                      onChange={(e) => setAvatarUrlInput(e.target.value)}
                    />
                    <button type="submit" className="btn-primary" style={{ width: 'auto', whiteSpace: 'nowrap' }}>
                      {t.saveAvatarBtn}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 3: KELGAN XABARLAR (INBOX) */}
        {/* ==================================================== */}
        {activeTab === 'messages' && (
          <div className="dashboard-card">
            <div className="card-title-bar">
              <h3 className="card-title">
                <MessageSquare size={20} color="var(--accent)" />
                {t.messagesHeading} ({messages.length})
              </h3>

              {messages.length > 0 && (
                <button
                  className="btn-danger"
                  onClick={handleClearAllMessages}
                  style={{ fontSize: '0.82rem' }}
                >
                  <Trash2 size={14} />
                  <span>{t.clearAllMessages}</span>
                </button>
              )}
            </div>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
              {t.messagesDesc}
            </p>

            {messages.length === 0 ? (
              <div className="empty-state">
                <MessageSquare size={52} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
                <p>{t.noMessages}</p>
              </div>
            ) : (
              <div className="messages-list">
                {messages.map((msg) => (
                  <div key={msg.id} className="message-card">
                    <div className="message-header">
                      <div>
                        <span className="message-sender">{msg.name}</span>
                        <span className="message-contact">({msg.contact})</span>
                      </div>
                      <span className="message-date">{msg.date}</span>
                    </div>

                    <div className="message-body">{msg.message}</div>

                    <div className="message-footer">
                      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                        {msg.contact && msg.contact.includes('@') && (
                          <a
                            href={`https://t.me/${msg.contact.replace('@', '')}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary"
                            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                          >
                            <Send size={13} color="#0088cc" />
                            <span>{t.replyTelegram}</span>
                          </a>
                        )}

                        {msg.contact && msg.contact.replace(/\D/g, '').length >= 9 && (
                          <a
                            href={`tel:${msg.contact}`}
                            className="btn-secondary"
                            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                          >
                            <Phone size={13} color="#10b981" />
                            <span>{t.replyCall}</span>
                          </a>
                        )}
                      </div>

                      <button
                        className="btn-danger"
                        style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
                        onClick={() => handleDeleteMessage(msg.id)}
                        title="O'chirish"
                      >
                        <Trash2 size={14} />
                        <span>O'chirish</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 4: ZAXIRA & TIZIM MA'LUMOTLARI */}
        {/* ==================================================== */}
        {activeTab === 'system' && (
          <div className="dashboard-card">
            <div className="card-title-bar">
              <h3 className="card-title">
                <FileCode size={20} color="var(--accent)" />
                {t.tabSystem}
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: 'var(--input-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Zaxira Nusxasini Saqlash</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
                  Barcha loyihalaringiz, profil rasmi va xabarlarni bitta `.json` fayl sifatida kompyuteringizga yuklab oling.
                </p>
                <button
                  className="btn-primary"
                  onClick={handleExportBackup}
                  style={{ width: 'auto' }}
                >
                  <Download size={16} />
                  <span>{t.exportJson}</span>
                </button>
              </div>

              <div style={{ background: 'var(--input-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Zaxiradan Qayta Tiklash</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
                  Oldin yuklab olingan zaxira JSON faylini yuklash orqali ma'lumotlarni bir zumda tiklang.
                </p>
                <label className="btn-secondary" style={{ cursor: 'pointer', display: 'inline-flex', width: 'auto' }}>
                  <Upload size={16} />
                  <span>{t.importJson}</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportBackup}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* TAHRIRLASH MODALI */}
      {editingProject && (
        <div className="modal-overlay" onClick={() => setEditingProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.2rem' }}>
              Loyihani tahrirlash: {editingProject.title}
            </h3>

            <form onSubmit={handleSaveEditProject}>
              <div className="form-group">
                <label className="form-label">{t.projName}</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.projUrl}</label>
                <input
                  type="url"
                  required
                  className="form-input"
                  value={editingProject.url}
                  onChange={(e) => setEditingProject({ ...editingProject, url: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.projDesc}</label>
                <textarea
                  rows={3}
                  className="form-textarea"
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.projTags}</label>
                <input
                  type="text"
                  className="form-input"
                  value={editingProject.tags}
                  onChange={(e) => setEditingProject({ ...editingProject, tags: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setEditingProject(null)}
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: 'auto' }}
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
