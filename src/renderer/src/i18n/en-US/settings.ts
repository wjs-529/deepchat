export default {
  title: 'Settings',
  common: {
    title: 'Common Settings',
    resetData: 'Reset Data',
    language: 'Language',
    languageSelect: 'Select language',
    searchEngine: 'Search Engine',
    searchEngineSelect: 'Select search engine',
    searchPreview: 'Search Preview',
    searchAssistantModel: 'Search Assistant Model',
    selectModel: 'Select Model',
    proxyMode: 'Proxy Mode',
    proxyModeSelect: 'Select proxy mode',
    proxyModeSystem: 'System Proxy',
    proxyModeNone: 'No Proxy',
    proxyModeCustom: 'Custom Proxy',
    customProxyUrl: 'Custom Proxy URL',
    customProxyUrlPlaceholder: 'Example: http://127.0.0.1:7890',
    invalidProxyUrl: 'Invalid proxy URL, please enter valid http/https URL',
    addCustomSearchEngine: 'Add Custom Search Engine',
    addCustomSearchEngineDesc:
      'Add a new search engine by providing a name and search URL. The URL must include {query} as the query placeholder.',
    searchEngineName: 'Search Engine Name',
    searchEngineNamePlaceholder: 'Enter search engine name',
    searchEngineUrl: 'Search URL',
    searchEngineUrlPlaceholder: "Ex: https://a.com/search?q={'{'}query{'}'}",
    searchEngineUrlError: "URL must include {'{'}query{'}'} as the query placeholder",
    deleteCustomSearchEngine: 'Delete Custom Search Engine',
    deleteCustomSearchEngineDesc:
      'Are you sure you want to delete the custom search engine "{name}"? This action cannot be undone.',
    testSearchEngine: 'Test Search Engine',
    testSearchEngineDesc:
      'A test search for "weather" will be performed using the {engine} search engine.',
    testSearchEngineNote:
      "If the search page requires login or other actions, you can perform them in the test window. Please close the test window when you're done.",
    theme: 'Theme',
    themeSelect: 'Select theme',
    closeToQuit: 'Exit app when closing window',
    contentProtection: 'Screen Protection',
    contentProtectionDialogTitle: 'Confirm Screen Protection Change',
    contentProtectionEnableDesc:
      'Enabling screen protection prevents screen sharing software from capturing the DeepChat window, protecting your content privacy. Note that this feature will not completely hide all interfaces. Please use this feature responsibly and in compliance with regulations. Additionally, not all screen sharing software supports this feature. Additionally, some environments may leave a black window.',
    contentProtectionDisableDesc:
      'Disabling screen protection will allow screen sharing software to capture the DeepChat window.',
    contentProtectionRestartNotice:
      'Changing this setting will restart the application. Do you want to continue?',
    loggingEnabled: 'Enable Logging',
    loggingDialogTitle: 'Confirm Logging Setting Change',
    loggingEnableDesc:
      'Enabling logging will help us diagnose issues and improve the application. Log files may contain sensitive information.',
    loggingDisableDesc: 'Disabling logging will stop collecting application logs.',
    loggingRestartNotice:
      'Changing this setting will restart the application. Do you want to continue?',
    openLogFolder: 'Open Log Folder'
  },
  data: {
    title: 'Data Settings',
    syncEnable: 'Enable Data Sync',
    syncFolder: 'Sync Folder',
    openSyncFolder: 'Open Sync Folder',
    lastSyncTime: 'Last Sync Time',
    never: 'Never',
    startBackup: 'Backup Now',
    backingUp: 'Backing up...',
    importData: 'Import Data',
    incrementImport: 'Incremental Import',
    overwriteImport: 'Overwrite Import',
    importConfirmTitle: 'Confirm Data Import',
    importConfirmDescription:
      "Importing will overwrite all current data, including chat history and settings. Make sure you have backed up important data. You'll need to restart the application after import.",
    importing: 'Importing...',
    confirmImport: 'Confirm Import',
    importSuccessTitle: 'Import Successful',
    importErrorTitle: 'Import Failed'
  },
  model: {
    title: 'Model Settings',
    systemPrompt: {
      label: 'System Prompt',
      placeholder: 'Please enter the system prompt...',
      description: 'Set the system prompt for the AI assistant to define its behavior and role'
    },
    temperature: {
      label: 'Model Temperature',
      description:
        'Controls the randomness of the output; higher values produce more creative responses'
    },
    contextLength: {
      label: 'Context Length',
      description: 'Set the maximum length of the conversation context'
    },
    responseLength: {
      label: 'Response Length',
      description: 'Set the maximum length of the AI response'
    },
    artifacts: {
      description: 'Enabling the Artifacts feature allows the AI to generate richer content'
    }
  },
  provider: {
    enable: 'Enable Service',
    urlPlaceholder: 'Please enter API URL',
    keyPlaceholder: 'Please enter API Key',
    verifyKey: 'Verify Key',
    howToGet: 'How to get',
    getKeyTip: 'Please visit',
    getKeyTipEnd: 'to get API Key',
    urlFormat: 'API Example: {defaultUrl}',
    modelList: 'Model List',
    enableModels: 'Enable Models',
    disableAllModels: 'Disable All Models',
    modelsEnabled: 'Models have been enabled',
    verifyLink: 'Verify Link',
    syncModelsFailed: 'Failed to sync models...',
    addCustomProvider: 'Add Custom Provider',
    delete: 'Delete',
    stopModel: 'Stop Model',
    pulling: 'Pulling...',
    runModel: 'Run Model',
    dialog: {
      disableModel: {
        title: 'Confirm Disable Model',
        content: 'Are you sure you want to disable model "{name}"?',
        confirm: 'Disable'
      },
      disableAllModels: {
        title: 'Confirm Disable All Models',
        content: 'Are you sure you want to disable all models?',
        confirm: 'Disable All'
      },
      configModels: {
        title: 'Configure Model List'
      },
      verify: {
        missingFields: 'Please enter API Key and API URL',
        failed: 'Verification failed',
        success: 'Verification successful'
      },
      addCustomProvider: {
        title: 'Add Custom Provider',
        description: 'Please fill in the necessary information for the provider',
        name: 'Name',
        namePlaceholder: 'Please enter the provider name',
        apiType: 'API Type',
        apiTypePlaceholder: 'Please select the API type',
        apiKey: 'API Key',
        apiKeyPlaceholder: 'Please enter the API key',
        baseUrl: 'API Base URL',
        baseUrlPlaceholder: 'Please enter the API base URL',
        enable: 'Enable Provider'
      },
      deleteProvider: {
        title: 'Confirm Delete Provider',
        content: 'Are you sure you want to delete provider "{name}"? This action cannot be undone.',
        confirm: 'Delete'
      },
      deleteModel: {
        title: 'Confirm Delete Model',
        content: 'Are you sure you want to delete model "{name}"? This action cannot be undone.',
        confirm: 'Delete'
      },
      pullModel: {
        title: 'Pull Model',
        pull: 'Pull'
      }
    },
    pullModels: 'Pull Models',
    refreshModels: 'Refresh Models',
    modelsRunning: 'Running Models',
    runningModels: 'Running Models',
    noRunningModels: 'No Running Models',
    deleteModel: 'Delete Model',
    deleteModelConfirm:
      'Are you sure you want to delete model "{name}"? This action cannot be undone.',
    noLocalModels: 'No Local Models',
    localModels: 'Local Models'
  },
  mcp: {
    title: 'MCP Settings',
    description: 'Manage and configure MCP (Model Control Protocol) servers and tools',
    enabledTitle: 'Enable MCP',
    enabledDescription: 'Enable or disable MCP functionality and tools',
    enableToAccess: 'Please enable MCP to access configuration options',
    tabs: {
      servers: 'Servers',
      tools: 'Tools'
    },
    serverList: 'Server List',
    addServer: 'Add Server',
    running: 'Running',
    stopped: 'Stopped',
    stopServer: 'Stop Server',
    startServer: 'Start Server',
    noServersFound: 'No Servers Found',
    addServerDialog: {
      title: 'Add Server',
      description: 'Configure a new MCP server'
    },
    editServerDialog: {
      title: 'Edit Server',
      description: 'Edit MCP server configuration'
    },
    serverForm: {
      name: 'Server Name',
      namePlaceholder: 'Enter server name',
      nameRequired: 'Server name is required',
      type: 'Server Type',
      typePlaceholder: 'Select server type',
      typeStdio: 'Standard I/O',
      typeSse: 'Server-Sent Events',
      typeInMemory: 'In-Memory',
      baseUrl: 'Base URL',
      baseUrlPlaceholder: 'Enter server base URL (e.g. http://localhost:3000)',
      command: 'Command',
      commandPlaceholder: 'Enter command',
      commandRequired: 'Command is required',
      args: 'Arguments',
      argsPlaceholder: 'Enter arguments separated by spaces',
      argsRequired: 'Arguments are required',
      env: 'Environment Variables',
      envPlaceholder: 'Enter environment variables in JSON format',
      envInvalid: 'Environment variables must be valid JSON',
      description: 'Description',
      descriptionPlaceholder: 'Enter server description',
      descriptions: 'Description',
      descriptionsPlaceholder: 'Enter server description',
      icon: 'Icon',
      iconPlaceholder: 'Enter icon',
      icons: 'Icon',
      iconsPlaceholder: 'Enter icon',
      autoApprove: 'Auto Approve',
      autoApproveAll: 'All',
      autoApproveRead: 'Read',
      autoApproveWrite: 'Write',
      autoApproveHelp: 'Select operation types to auto-approve without user confirmation',
      submit: 'Submit',
      add: 'Add',
      update: 'Update',
      cancel: 'Cancel',
      jsonConfigIntro:
        'You can paste a JSON configuration directly or choose to configure the server manually.',
      jsonConfig: 'JSON Configuration',
      jsonConfigPlaceholder: 'Paste your MCP server configuration in JSON format',
      jsonConfigExample: 'JSON Configuration Example',
      parseSuccess: 'Configuration Parsed',
      configImported: 'Configuration imported successfully',
      parseError: 'Parse Error',
      skipToManual: 'Skip to Manual Configuration',
      parseAndContinue: 'Parse & Continue'
    },
    deleteServer: 'Delete Server',
    editServer: 'Edit Server',
    setDefault: 'Set as Default',
    removeDefault: 'Remove Default',
    isDefault: 'Default Server',
    default: 'Default',
    setAsDefault: 'Set as Default',
    removeServer: 'Remove Server',
    confirmRemoveServer:
      'Are you sure you want to delete server {name}? This action cannot be undone.',
    removeServerDialog: {
      title: 'Delete Server'
    },
    confirmDelete: {
      title: 'Confirm Delete',
      description: 'Are you sure you want to delete server {name}? This action cannot be undone.',
      confirm: 'Delete',
      cancel: 'Cancel'
    },
    resetToDefault: 'Reset to Default',
    resetConfirmTitle: 'Reset to Default Servers',
    resetConfirmDescription:
      'This will restore all default servers while keeping your custom servers. Any modifications to default servers will be lost.',
    resetConfirm: 'Reset',
    builtInServers: 'Built-in Servers',
    customServers: 'Custom Servers',
    builtIn: 'Built-in',
    cannotRemoveBuiltIn: 'Cannot Remove Built-in Server',
    builtInServerCannotBeRemoved:
      'Built-in servers cannot be removed, only parameters and environment variables can be modified'
  },
  about: {
    title: 'About Us',
    version: 'Version',
    checkUpdate: 'Check Update',
    checking: 'Checking...',
    latestVersion: 'Latest Version'
  }
}
