export default {
  title: '設置',
  common: {
    title: '通用設置',
    resetData: '重置數據',
    language: '語言',
    languageSelect: '選擇語言',
    searchEngine: '搜索引擎',
    searchEngineSelect: '選擇搜索引擎',
    searchPreview: '搜索預覽',
    searchAssistantModel: '搜索助手模型',
    selectModel: '選擇模型',
    proxyMode: '代理模式',
    proxyModeSelect: '選擇代理模式',
    proxyModeSystem: '系統代理',
    proxyModeNone: '不使用代理',
    proxyModeCustom: '自定義代理',
    customProxyUrl: '自定義代理地址',
    customProxyUrlPlaceholder: '例如: http://127.0.0.1:7890',
    invalidProxyUrl: '無效的代理地址，請輸入有效的 http/https URL',
    addCustomSearchEngine: '添加自訂搜尋引擎',
    addCustomSearchEngineDesc:
      '添加一個新的搜尋引擎，需要提供名稱和搜尋URL。URL中必須包含{"{"}query{"}"}作為查詢佔位符。',
    searchEngineName: '搜尋引擎名稱',
    searchEngineNamePlaceholder: '請輸入搜尋引擎名稱',
    searchEngineUrl: '搜尋URL',
    searchEngineUrlPlaceholder: '如: https://a.com/search?q={"{"}query{"}"}',
    searchEngineUrlError: 'URL必須包含{"{"}query{"}"}作為查詢占位符',
    deleteCustomSearchEngine: '刪除自定義搜索引擎',
    deleteCustomSearchEngineDesc: '確定要刪除自定義搜索引擎 "{name}" 嗎？此操作無法撤銷。',
    testSearchEngine: '測試搜索引擎',
    testSearchEngineDesc: '即將使用 {engine} 搜索引擎進行測試搜索，將搜索關鍵詞 "天氣"。',
    testSearchEngineNote:
      '如果搜索頁面需要登錄或其他操作，您可以在測試窗口中進行。完成測試後請關閉測試窗口。',
    theme: '主題',
    themeSelect: '選擇主題',
    closeToQuit: '點擊關閉按鈕時退出程序',
    contentProtection: '投屏保護',
    contentProtectionDialogTitle: '確認切換投屏保護',
    contentProtectionEnableDesc:
      '開啟投屏保護可以防止投屏軟件捕獲DeepChat主窗口，用來保護您的內容隱私。請注意，此功能不會徹底隱藏所有界面，請合理合規使用。並且，並不是所有投屏軟件都遵守用戶隱私設定，該功能可能在一些不遵守隱私設定的投屏軟件上失效，且部分環境中可能會殘留一個黑色窗體。',
    contentProtectionDisableDesc: '關閉投屏保護將允許投屏軟件捕獲DeepChat窗口。',
    contentProtectionRestartNotice: '切換此設置將導致程序重啟，請確認是否繼續？',
    loggingEnabled: '啟用日誌',
    loggingDialogTitle: '確認日誌設定變更',
    loggingEnableDesc: '啟用日誌將幫助我們診斷問題並改進應用程式。日誌檔案可能包含敏感資訊。',
    loggingDisableDesc: '停用日誌將停止收集應用程式日誌。',
    loggingRestartNotice: '切換此設定將導致程序重啟，請確認是否繼續？'
  },
  data: {
    title: '數據設置',
    syncEnable: '啟用數據同步',
    syncFolder: '同步資料夾',
    openSyncFolder: '打開同步資料夾',
    lastSyncTime: '最後同步時間',
    never: '從未同步',
    startBackup: '立即備份',
    backingUp: '備份中...',
    importData: '導入數據',
    incrementImport: '增量導入',
    overwriteImport: '覆蓋導入',
    importConfirmTitle: '確認導入數據',
    importConfirmDescription:
      '導入將會覆蓋所有當前數據，包括聊天記錄和設置。請確保已備份重要數據。導入後需要重新啟動應用程序。',
    importing: '導入中...',
    confirmImport: '確認導入',
    importSuccessTitle: '導入成功',
    importErrorTitle: '導入失敗'
  },
  model: {
    title: '模型設置',
    systemPrompt: {
      label: '系統提示詞',
      placeholder: '請輸入系統提示詞...',
      description: '設置AI助手的系統提示詞，用於定義其行為和角色'
    },
    temperature: {
      label: '模型溫度',
      description: '控制輸出的隨機性，較高的值會產生更具創造性的響應'
    },
    contextLength: {
      label: '上下文長度',
      description: '設置對話上下文的最大長度'
    },
    responseLength: {
      label: '返回文本長度',
      description: '設置AI響應的最大長度'
    },
    artifacts: {
      description: '啟用Artifacts功能允許AI生成更豐富的內容'
    }
  },
  provider: {
    enable: '開啟服務',
    urlPlaceholder: '請輸入API URL',
    keyPlaceholder: '請輸入API Key',
    verifyKey: '驗證密鑰',
    howToGet: '如何獲取',
    getKeyTip: '請前往',
    getKeyTipEnd: '獲取API Key',
    urlFormat: 'API範例：{defaultUrl}',
    modelList: '模型列表',
    enableModels: '模型已經啟用',
    verifyLink: '驗證鏈接',
    syncModelsFailed: '同步模型失敗...',
    addCustomProvider: '添加自定義服務商',
    disableAllModels: '禁用全部模型',
    delete: '刪除',
    stopModel: '停止模型',
    pulling: '拉取中...',
    runModel: '運行模型',
    dialog: {
      disableModel: {
        title: '確認禁用模型',
        content: '是否確認禁用模型 "{name}"？',
        confirm: '禁用'
      },
      configModels: {
        title: '配置模型列表'
      },
      disableAllModels: {
        title: '確認禁用全部模型',
        content: '是否確認禁用 "{name}" 的全部模型？',
        confirm: '全部禁用'
      },
      verify: {
        missingFields: '請輸入 API Key 和 API URL',
        failed: '驗證失敗',
        success: '驗證成功'
      },
      addCustomProvider: {
        title: '添加自定義服務商',
        description: '請填寫服務商的必要信息',
        name: '名稱',
        namePlaceholder: '請輸入服務商名稱',
        apiType: 'API類型',
        apiTypePlaceholder: '請選擇API類型',
        apiKey: 'API密鑰',
        apiKeyPlaceholder: '請輸入API密鑰',
        baseUrl: 'API基礎地址',
        baseUrlPlaceholder: '請輸入API基礎地址',
        enable: '啟用服務商'
      },
      deleteProvider: {
        title: '確認刪除服務商',
        content: '是否確認刪除服務商 "{name}"？此操作不可恢復。',
        confirm: '刪除'
      },
      deleteModel: {
        title: '確認刪除模型',
        content: '是否確認刪除模型 "{name}"？此操作不可恢復。',
        confirm: '刪除'
      },
      pullModel: {
        title: '拉取模型',
        pull: '拉取'
      }
    },
    pullModels: '拉取模型',
    refreshModels: '刷新模型',
    modelsRunning: '模型正在運行',
    runningModels: '運行中的模型',
    noRunningModels: '沒有運行中的模型',
    deleteModel: '刪除模型',
    deleteModelConfirm: '是否確認刪除模型 "{name}"？此操作不可恢復。',
    noLocalModels: '沒有本地模型',
    localModels: '本地模型'
  },
  mcp: {
    title: 'MCP設置',
    description: '管理和配置MCP（Model Control Protocol）服務器和工具',
    enabledTitle: '啟用MCP',
    enabledDescription: '啟用或禁用MCP功能和工具',
    enableToAccess: '請先啟用MCP以訪問配置選項',
    tabs: {
      servers: '服務器',
      tools: '工具'
    },
    serverList: '服務器列表',
    addServer: '添加服務器',
    running: '運行中',
    stopped: '已停止',
    stopServer: '停止服務器',
    startServer: '啟動服務器',
    noServersFound: '未找到服務器',
    addServerDialog: {
      title: '添加服務器',
      description: '配置新的MCP服務器'
    },
    editServerDialog: {
      title: '編輯服務器',
      description: '編輯MCP服務器配置'
    },
    serverForm: {
      name: '伺服器名稱',
      namePlaceholder: '輸入伺服器名稱',
      nameRequired: '伺服器名稱不能為空',
      type: '伺服器類型',
      typePlaceholder: '選擇伺服器類型',
      typeStdio: '標準輸入輸出',
      typeSse: '伺服器發送事件',
      typeInMemory: '記憶體',
      baseUrl: '基礎URL',
      baseUrlPlaceholder: '輸入伺服器基礎URL（如：http://localhost:3000）',
      command: '命令',
      commandPlaceholder: '輸入命令',
      commandRequired: '命令不能為空',
      args: '參數',
      argsPlaceholder: '輸入參數，用空格分隔',
      argsRequired: '參數不能為空',
      env: '環境變量',
      envPlaceholder: '輸入JSON格式的環境變量',
      envInvalid: '環境變量必須是有效的JSON格式',
      description: '描述',
      descriptionPlaceholder: '輸入伺服器描述',
      descriptions: '描述',
      descriptionsPlaceholder: '輸入伺服器描述',
      icon: '圖標',
      iconPlaceholder: '輸入圖標',
      icons: '圖標',
      iconsPlaceholder: '輸入圖標',
      autoApprove: '自動授權',
      autoApproveAll: '全部',
      autoApproveRead: '讀取',
      autoApproveWrite: '寫入',
      autoApproveHelp: '選擇需要自動授權的操作類型，無需用戶確認即可執行',
      submit: '提交',
      add: '添加',
      update: '更新',
      cancel: '取消',
      jsonConfigIntro: '您可以直接粘貼JSON配置或選擇手動配置伺服器。',
      jsonConfig: 'JSON配置',
      jsonConfigPlaceholder: '請粘貼MCP伺服器的JSON格式配置',
      jsonConfigExample: 'JSON配置示例',
      parseSuccess: '配置解析成功',
      configImported: '配置導入成功',
      parseError: '解析錯誤',
      skipToManual: '跳過至手動配置',
      parseAndContinue: '解析並繼續'
    },
    deleteServer: '刪除伺服器',
    editServer: '編輯伺服器',
    setDefault: '設為默認',
    removeDefault: '移除默認',
    isDefault: '默認伺服器',
    default: '默認',
    setAsDefault: '設為默認',
    removeServer: '刪除伺服器',
    confirmRemoveServer: '確定要刪除伺服器 {name} 嗎？此操作無法撤銷。',
    removeServerDialog: {
      title: '刪除伺服器'
    },
    confirmDelete: {
      title: '確認刪除',
      description: '確定要刪除伺服器 {name} 嗎？此操作無法撤銷。',
      confirm: '刪除',
      cancel: '取消'
    },
    resetToDefault: '恢復預設服務',
    resetConfirmTitle: '恢復預設服務',
    resetConfirmDescription:
      '此操作將恢復所有預設伺服器，同時保留您自定義的伺服器。對預設伺服器的任何修改將會丟失。',
    resetConfirm: '恢復',
    builtInServers: '內置服務',
    customServers: '自定義服務',
    builtIn: '內置',
    cannotRemoveBuiltIn: '無法刪除內置服務',
    builtInServerCannotBeRemoved: '內置服務不能被刪除，僅支持修改參數和環境變量'
  },
  about: {
    title: '關於我們',
    version: '版本',
    checkUpdate: '檢查更新',
    checking: '檢查中...',
    latestVersion: '已是最新版本'
  }
}
