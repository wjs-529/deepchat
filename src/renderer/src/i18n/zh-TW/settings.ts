export default {
  title: '設定',
  common: {
    title: '一般設定',
    resetData: '重設資料',
    language: '語言',
    languageSelect: '選擇語言',
    searchEngine: '搜尋引擎',
    searchEngineSelect: '選擇搜尋引擎',
    searchPreview: '搜尋預覽',
    searchAssistantModel: '搜尋助理模型',
    selectModel: '選擇模型',
    proxyMode: '代理伺服器模式',
    proxyModeSelect: '選擇代理伺服器模式',
    proxyModeSystem: '系統代理伺服器',
    proxyModeNone: '不使用代理伺服器',
    proxyModeCustom: '自訂代理伺服器',
    customProxyUrl: '自訂代理伺服器位址',
    customProxyUrlPlaceholder: '例如：http://127.0.0.1:7890',
    invalidProxyUrl: '無效的代理伺服器位址，請輸入有效的 http/https URL',
    addCustomSearchEngine: '新增自訂搜尋引擎',
    addCustomSearchEngineDesc:
      '新增一個新的搜尋引擎，需要提供名稱和搜尋 URL。URL 中必須包含 {query} 作為查詢預留位置。',
    searchEngineName: '搜尋引擎名稱',
    searchEngineNamePlaceholder: '請輸入搜尋引擎名稱',
    searchEngineUrl: '搜尋 URL',
    searchEngineUrlPlaceholder: '如：https://a.com/search?q={query}',
    searchEngineUrlError: 'URL 必須包含 {query} 作為查詢預留位置',
    deleteCustomSearchEngine: '刪除自訂搜尋引擎',
    deleteCustomSearchEngineDesc: '確定要刪除自訂搜尋引擎「{name}」嗎？此操作無法復原。',
    testSearchEngine: '測試搜尋引擎',
    testSearchEngineDesc: '即將使用 {engine} 搜尋引擎進行測試搜尋，將搜尋關鍵字「天氣」。',
    testSearchEngineNote:
      '如果搜尋頁面需要登入或其他操作，您可以在測試視窗中進行。完成測試後請關閉測試視窗。',
    theme: '主題',
    themeSelect: '選擇主題',
    closeToQuit: '點選關閉按鈕時結束程式',
    contentProtection: '畫面保護',
    contentProtectionDialogTitle: '畫面保護切換確認',
    contentProtectionEnableDesc:
      '開啟畫面保護可以防止錄影軟體擷取 DeepChat 主視窗，用來保護您的內容隱私。請注意，此功能不會徹底隱藏所有介面，請合理合規使用。並且，並不是所有錄影軟體都遵守使用者隱私設定，該功能可能會在一些不遵守隱私設定的錄影軟體上失效，某些環境中可能會殘留一個黑色視窗。',
    contentProtectionDisableDesc: '關閉畫面保護將允許錄影軟體擷取 DeepChat 視窗。',
    contentProtectionRestartNotice: '切換此設定將會重新啟動應用程式，請問您是否要繼續？',
    loggingEnabled: '啟用日誌',
    loggingDialogTitle: '確認日誌設定變更',
    loggingEnableDesc: '啟用日誌將幫助我們診斷問題並改進應用程式。日誌檔案可能包含敏感資訊。',
    loggingDisableDesc: '停用日誌將停止收集應用程式日誌。',
    loggingRestartNotice: '切換此設定將會重新啟動應用程式，請問您是否要繼續？'
  },
  data: {
    title: '資料設定',
    syncEnable: '啟用資料同步',
    syncFolder: '同步資料夾',
    openSyncFolder: '開啟同步資料夾',
    lastSyncTime: '上次同步時間',
    never: '從未同步',
    startBackup: '立即備份',
    backingUp: '備份中...',
    importData: '匯入資料',
    incrementImport: '增量匯入',
    overwriteImport: '覆蓋匯入',
    importConfirmTitle: '確認匯入資料',
    importConfirmDescription:
      '匯入將會覆蓋目前所有資料，包括聊天記錄和設定。請確保已備份重要資料。匯入完成後需要重新啟動應用程式。',
    importing: '匯入中...',
    confirmImport: '確認匯入',
    importSuccessTitle: '匯入成功',
    importErrorTitle: '匯入失敗'
  },
  model: {
    title: '模型設定',
    systemPrompt: {
      label: '系統提示詞',
      placeholder: '請輸入系統提示詞...',
      description: '設定 AI 助理的系統提示詞，用於定義其行為和角色'
    },
    temperature: {
      label: '模型溫度',
      description: '控制輸出的隨機性，較高的值會產生更具創造性的回應'
    },
    contextLength: {
      label: '前後文長度',
      description: '設定對話前後文的最大長度'
    },
    responseLength: {
      label: '回應文字長度',
      description: '設定 AI 回應的最大長度'
    },
    artifacts: {
      title: 'Artifacts 效果',
      description: '程式碼區塊生成動畫效果'
    },
    provider: '服務提供者',
    modelList: '模型清單',
    selectModel: '選擇模型',
    providerSetting: '服務提供者設定',
    configureModel: '設定模型',
    addModel: '新增模型'
  },
  provider: {
    enable: '啟用服務',
    urlPlaceholder: '請輸入 API URL',
    keyPlaceholder: '請輸入 API 金鑰',
    verifyKey: '驗證金鑰',
    howToGet: '如何取得',
    getKeyTip: '請前往',
    getKeyTipEnd: '取得 API 金鑰',
    urlFormat: 'API 範例：{defaultUrl}',
    modelList: '模型清單',
    enableModels: '啟用模型',
    disableAllModels: '全部停用',
    modelsEnabled: '模型已啟用',
    verifyLink: '驗證連結',
    syncModelsFailed: '同步模型失敗...',
    addCustomProvider: '新增自訂服務提供者',
    delete: '刪除',
    stopModel: '停止模型',
    pulling: '下載中...',
    runModel: '執行模型',
    dialog: {
      disableModel: {
        title: '確認停用模型',
        content: '是否確認停用模型「{name}」？',
        confirm: '停用'
      },
      disableAllModels: {
        title: '確認停用所有模型',
        content: '是否確認停用「{name}」的所有模型？',
        confirm: '全部停用'
      },
      configModels: {
        title: '設定模型清單'
      },
      verify: {
        missingFields: '請輸入 API 金鑰和 API URL',
        failed: '驗證失敗',
        success: '驗證成功'
      },
      addCustomProvider: {
        title: '新增自訂服務提供者',
        description: '請填寫服務提供者的必要資訊',
        name: '名稱',
        namePlaceholder: '請輸入服務提供者名稱',
        apiType: 'API 類型',
        apiTypePlaceholder: '請選擇 API 類型',
        apiKey: 'API 金鑰',
        apiKeyPlaceholder: '請輸入 API 金鑰',
        baseUrl: 'API 基礎網址',
        baseUrlPlaceholder: '請輸入 API 基礎網址',
        enable: '啟用服務提供者'
      },
      deleteProvider: {
        title: '確認刪除服務提供者',
        content: '是否確認刪除服務提供者「{name}」？此操作無法復原。',
        confirm: '刪除'
      },
      deleteModel: {
        title: '確認刪除模型',
        content: '是否確認刪除模型「{name}」？此操作無法復原。',
        confirm: '刪除'
      },
      pullModel: {
        title: '下載模型',
        pull: '下載'
      }
    },
    pullModels: '下載模型',
    refreshModels: '重新整理模型',
    modelsRunning: '執行中的模型',
    runningModels: '執行中的模型',
    noRunningModels: '沒有執行中的模型',
    deleteModel: '刪除模型',
    deleteModelConfirm: '是否確認刪除模型「{name}」？此操作無法復原。',
    localModels: '本機模型',
    noLocalModels: '沒有本機模型'
  },
  mcp: {
    title: 'MCP設定',
    description: '管理和配置MCP（模型控制協議）伺服器和工具',
    enabledTitle: '啟用MCP',
    enabledDescription: '啟用或停用MCP功能和工具',
    enableToAccess: '請先啟用MCP以訪問配置選項',
    tabs: {
      servers: '伺服器',
      tools: '工具'
    },
    serverList: '伺服器列表',
    addServer: '新增伺服器',
    running: '運行中',
    stopped: '已停止',
    stopServer: '停止伺服器',
    startServer: '啟動伺服器',
    noServersFound: '未找到伺服器',
    addServerDialog: {
      title: '新增伺服器',
      description: '配置新的MCP伺服器'
    },
    editServerDialog: {
      title: '編輯伺服器',
      description: '編輯MCP伺服器配置'
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
      baseUrl: '基礎網址',
      baseUrlPlaceholder: '輸入伺服器基礎網址（如：http://localhost:3000）',
      command: '命令',
      commandPlaceholder: '輸入命令',
      commandRequired: '命令不能為空',
      args: '參數',
      argsPlaceholder: '輸入參數，用空格分隔',
      argsRequired: '參數不能為空',
      env: '環境變數',
      envPlaceholder: '輸入JSON格式的環境變數',
      envInvalid: '環境變數必須是有效的JSON格式',
      description: '描述',
      descriptionPlaceholder: '輸入伺服器描述',
      descriptions: '描述',
      descriptionsPlaceholder: '輸入伺服器描述',
      icon: '圖示',
      iconPlaceholder: '輸入圖示',
      icons: '圖示',
      iconsPlaceholder: '輸入圖示',
      autoApprove: '自動授權',
      autoApproveAll: '全部',
      autoApproveRead: '讀取',
      autoApproveWrite: '寫入',
      autoApproveHelp: '選擇需要自動授權的操作類型，無需用戶確認即可執行',
      submit: '提交',
      add: '新增',
      update: '更新',
      cancel: '取消',
      jsonConfigIntro: '您可以直接粘貼JSON配置或選擇手動配置伺服器。',
      jsonConfig: 'JSON配置',
      jsonConfigPlaceholder: '請粘貼MCP伺服器的JSON格式配置',
      jsonConfigExample: 'JSON配置範例',
      parseSuccess: '配置解析成功',
      configImported: '配置導入成功',
      parseError: '解析錯誤',
      skipToManual: '跳過至手動配置',
      parseAndContinue: '解析並繼續'
    },
    deleteServer: '刪除伺服器',
    editServer: '編輯伺服器',
    setDefault: '設為預設',
    removeDefault: '移除預設',
    isDefault: '預設伺服器',
    default: '預設',
    setAsDefault: '設為預設伺服器',
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
      '此操作將恢復所有預設伺服器，同時保留您自訂的伺服器。對預設伺服器的任何修改將會丟失。',
    resetConfirm: '恢復',
    builtInServers: '內建服務',
    customServers: '自訂服務',
    builtIn: '內建',
    cannotRemoveBuiltIn: '無法刪除內建服務',
    builtInServerCannotBeRemoved: '內建服務不能被刪除，僅支援修改參數和環境變數'
  },
  about: {
    title: '關於我們',
    version: '版本',
    checkUpdate: '檢查更新',
    checking: '檢查中...',
    latestVersion: '最新版本'
  }
}
