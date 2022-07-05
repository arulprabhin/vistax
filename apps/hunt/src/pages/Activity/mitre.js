export const mitre_header = [{
  'title': 'Initial Access',
  'details': ['The initial access tactic represents the vectors adversaries use to gain an initial foothold within a network.']
}, {
  'title': 'Execution',
  'details': ['The execution tactic represents techniques that result in execution of adversary-controlled code on a local or remote system. This tactic is often used in conjunction with initial access as the means of executing code once access is obtained, and lateral movement to expand access to remote systems on a network.']
}, {
  'title': 'Persistence',
  'details': ['Persistence is any access, action, or configuration change to a system that gives an adversary a persistent presence on that system. Adversaries will often need to maintain access to systems through interruptions such as system restarts, loss of credentials, or other failures that would require a remote access tool to restart or alternate backdoor for them to regain access. ']
}, {
  'title': 'Privilege Escalation',
  'details': ['Privilege escalation is the result of actions that allows an adversary to obtain a higher level of permissions on a system or network. Certain tools or actions require a higher level of privilege to work and are likely necessary at many points throughout an operation. Adversaries can enter a system with unprivileged access and must take advantage of a system weakness to obtain local administrator or SYSTEM/root level privileges. A user account with administrator-like access can also be used. User accounts with permissions to access specific systems or perform specific functions necessary for adversaries to achieve their objective may also be considered an escalation of privilege.']
}, {
  'title': 'Defense Evasion',
  'details': ['Defense evasion consists of techniques an adversary may use to evade detection or avoid other defenses. Sometimes these actions are the same as or variations of techniques in other categories that have the added benefit of subverting a particular defense or mitigation. Defense evasion may be considered a set of attributes the adversary applies to all other phases of the operation.']
}, {
  'title': 'Credential Access',
  'details': ['Credential access represents techniques resulting in access to or control over system, domain, or service credentials that are used within an enterprise environment. Adversaries will likely attempt to obtain legitimate credentials from users or administrator accounts (local system administrator or domain users with administrator access) to use within the network. This allows the adversary to assume the identity of the account, with all of that accounts permissions on the system and network, and makes it harder for defenders to detect the adversary. With sufficient access within a network, an adversary can create accounts for later use within the environment.']
}, {
  'title': 'Discovery',
  'details': ['Discovery consists of techniques that allow the adversary to gain knowledge about the system and internal network. When adversaries gain access to a new system, they must orient themselves to what they now have control of and what benefits operating from that system give to their current objective or overall goals during the intrusion. The operating system provides many native tools that aid in this post-compromise information-gathering phase.']
}, {
  'title': 'Lateral Movement',
  'details': ['Lateral movement consists of techniques that enable an adversary to access and control remote systems on a network and could, but does not necessarily, include execution of tools on remote systems. The lateral movement techniques could allow an adversary to gather information from a system without needing additional tools, such as a remote access tool.']
}, {
  'title': 'Collection',
  'details': ['Collection consists of techniques used to identify and gather information, such as sensitive files, from a target network prior to exfiltration. This category also covers locations on a system or network where the adversary may look for information to exfiltrate.']
}, {
  'title': 'Exfiltration',
  'details': ['Exfiltration refers to techniques and attributes that result or aid in the adversary removing files and information from a target network. This category also covers locations on a system or network where the adversary may look for information to exfiltrate.']
}, {
  'title': 'Command and Control',
  'details': ['The command and control tactic represents how adversaries communicate with systems under their control within a target network. There are many ways an adversary can establish command and control with various levels of covertness, depending on system configuration and network topology. Due to the wide degree of variation available to the adversary at the network level, only the most common factors were used to describe the differences in command and control. There are still a great many specific techniques within the documented methods, largely due to how easy it is to define new protocols and use existing, legitimate protocols and network services for communication. ']
},
  {
      'title':'Impact',
      'details': ['The Impact tactic represents techniques whose primary objective directly reduces the availability or integrity of a system, service, or network; including manipulation of data to impact a business or operational process. These techniques may represent an adversarys end goal, or provide cover for a breach of confidentiality.']
  }];

export const  mitre_data = [{
  'title': 'Initial Access',
  'types': ['Drive-by Compromise', 'Exploit Public-Facing Application', 'External Remote Services', 'Hardware Additions', 'Replication Through Removable Media', 'Spearphishing Attachment', 'Spearphishing Link', 'Spearphishing via Service', 'Supply Chain Compromise', 'Trusted Relationship', 'Valid Accounts']
}, {
  'title': 'Execution',
  'types': ['AppleScript', 'CMSTP', 'Command-Line Interface', 'Compiled HTML File', 'Control Panel Items', 'Dynamic Data Exchange', 'Execution through API', 'Execution through Module Load', 'Exploitation for Client Execution', 'Graphical User Interface', 'InstallUtil', 'LSASS Driver', 'Launchctl', 'Local Job Scheduling', 'Mshta', 'PowerShell', 'Regsvcs/Regasm', 'Regsvr32', 'Rundll32', 'Scheduled Task', 'Scripting', 'Service Execution', 'Signed Binary Proxy Execution', 'Signed Script Proxy Execution', 'Source', 'Space after Filename', 'Third-party Software', 'Trap', 'Trusted Developer Utilities', 'User Execution', 'Windows Management Instrumentation', 'Windows Remote Management', 'XSL Script Processing']
}, {
  'title': 'Persistence',
  'types': ['.bash_profile and .bashrc', 'Accessibility Features', 'Account Manipulation', 'AppCert DLLs', 'AppInit DLLs', 'Application Shimming', 'Authentication Package', 'BITS Jobs', 'Bootkit', 'Browser Extensions', 'Change Default File Association', 'Component Firmware', 'Component Object Model Hijacking', 'Create Account', 'DLL Search Order Hijacking', 'Dylib Hijacking', 'External Remote Services', 'Emond', 'File System Permissions Weakness', 'Hidden Files and Directories', 'Hooking', 'Hypervisor', 'Image File Execution Options Injection', 'Kernel Modules and Extensions', 'Launch Agent', 'Launch Daemon', 'Launchctl', 'LC_LOAD_DYLIB Addition', 'Local Job Scheduling', 'Login Item', 'Logon Scripts', 'LSASS Driver', 'Modify Existing Service', 'Netsh Helper DLL', 'New Service', 'Office Application Startup', 'Path Interception', 'Plist Modification', 'Port Knocking', 'Port Monitors', 'Rc.common', 'Re-opened Applications', 'Redundant Access', 'Registry Run Keys / Startup Folder', 'Scheduled Task', 'Screensaver', 'Security Support Provider', 'Service Registry Permissions Weakness', 'Setuid and Setgid', 'Shortcut Modification', 'SIP and Trust Provider Hijacking', 'Startup Items', 'System Firmware', 'Systemd Service','Time Providers', 'Trap', 'Valid Accounts', 'Web Shell', 'Windows Management Instrumentation Event Subscription', 'Winlogon Helper DLL']
}, {
  'title': 'Privilege Escalation',
  'types': ['Access Token Manipulation', 'Accessibility Features', 'AppCert DLLs', 'AppInit DLLs', 'Application Shimming', 'Bypass User Account Control', 'DLL Search Order Hijacking', 'Dylib Hijacking', 'Elevated Execution with Prompt', 'Emond', 'Exploitation for Privilege Escalation', 'Extra Window Memory Injection', 'File System Permissions Weakness', 'Hooking', 'Image File Execution Options Injection', 'Launch Daemon', 'New Service', 'Path Interception', 'Plist Modification', 'Port Monitors', 'Process Injection', 'Scheduled Task', 'Service Registry Permissions Weakness', 'Setuid and Setgid', 'SID-History Injection', 'Startup Items', 'Sudo', 'Sudo Caching', 'Valid Accounts', 'Web Shell']
}, {
  'title': 'Defense Evasion',
  'types': ['Access Token Manipulation', 'Binary Padding', 'BITS Jobs', 'Bypass User Account Control', 'Clear Command History', 'CMSTP', 'Code Signing', 'Compiled HTML File', 'Compile After Delivery', 'Component Firmware', 'Component Object Model Hijacking', 'Control Panel Items', 'DCShadow', 'Deobfuscate/Decode Files or Information', 'Disabling Security Tools', 'DLL Search Order Hijacking', 'DLL Side-Loading', 'Execution Guardrails', 'Exploitation for Defense Evasion', 'Extra Window Memory Injection', 'File and Directory Permissions Modification', 'File Deletion', 'File Permissions Modification', 'File System Logical Offsets', 'Gatekeeper Bypass', 'Group Policy Modification', 'Hidden Files and Directories', 'Hidden Users', 'Hidden Window', 'HISTCONTROL', 'Image File Execution Options Injection', 'Indicator Blocking', 'Indicator Removal from Tools', 'Indicator Removal on Host', 'Indirect Command Execution', 'Install Root Certificate', 'InstallUtil', 'Launchctl', 'LC_MAIN Hijacking', 'Masquerading', 'Modify Registry', 'Mshta', 'Network Share Connection Removal', 'NTFS File Attributes', 'Obfuscated Files or Information', 'Parent PID Spoofing', 'Plist Modification', 'Port Knocking', 'Process Doppelgänging', 'Process Hollowing', 'Process Injection', 'Redundant Access', 'Regsvcs/Regasm', 'Regsvr32', 'Rootkit', 'Rundll32', 'Scripting', 'Signed Binary Proxy Execution', 'Signed Script Proxy Execution', 'SIP and Trust Provider Hijacking', 'Software Packing', 'Space after Filename', 'Template Injection', 'Timestomp', 'Trusted Developer Utilities', 'Valid Accounts', 'Virtualization/Sandbox Evasion', 'Web Service', 'XSL Script Processing']
}, {
  'title': 'Credential Access',
  'types': ['Account Manipulation', 'Bash History', 'Brute Force', 'Credential Dumping', 'Credentials from Web Browsers', 'Credentials in Files', 'Credentials in Registry', 'Exploitation for Credential Access', 'Forced Authentication', 'Hooking', 'Input Capture', 'Input Prompt', 'Kerberoasting', 'Keychain', 'LLMNR/NBT-NS Poisoning', 'Network Sniffing', 'Password Filter DLL', 'Private Keys', 'Securityd Memory', 'Steal Web Session Cookie', 'Two-Factor Authentication Interception']
}, {
  'title': 'Discovery',
  'types': ['Account Discovery', 'Application Window Discovery', 'Browser Bookmark Discovery', 'Domain Trust Discovery', 'File and Directory Discovery', 'Network Service Scanning', 'Network Share Discovery', 'Network Sniffing', 'Password Policy Discovery', 'Peripheral Device Discovery', 'Permission Groups Discovery', 'Process Discovery', 'Query Registry', 'Remote System Discovery', 'Security Software Discovery', 'Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery', 'System Service Discovery', 'System Time Discovery', 'Virtualization/Sandbox Evasion']
}, {
  'title': 'Lateral Movement',
  'types': ['AppleScript', 'Application Deployment Software', 'Component Object Model and Distributed COM', 'Distributed Component Object Model', 'Exploitation of Remote Services', 'Internal Spearphishing', 'Logon Scripts', 'Pass the Hash', 'Pass the Ticket', 'Remote Desktop Protocol', 'Remote File Copy', 'Remote Services', 'Replication Through Removable Media', 'Shared Webroot', 'SSH Hijacking', 'Taint Shared Content', 'Third-party Software', 'Windows Admin Shares', 'Windows Remote Management']
}, {
  'title': 'Collection',
  'types': ['Audio Capture', 'Automated Collection', 'Clipboard Data', 'Data from Information Repositories', 'Data from Local System', 'Data from Network Shared Drive', 'Data from Removable Media', 'Data Staged', 'Email Collection', 'Input Capture', 'Man in the Browser', 'Screen Capture', 'Video Capture']
}, {
  'title': 'Exfiltration',
  'types': ['Automated Exfiltration', 'Data Compressed', 'Data Encrypted', 'Data Transfer Size Limits', 'Exfiltration Over Alternative Protocol', 'Exfiltration Over Command and Control Channel', 'Exfiltration Over Other Network Medium', 'Exfiltration Over Physical Medium', 'Scheduled Transfer']
}, {
  'title': 'Command and Control',
  'types': ['Commonly Used Port', 'Communication Through Removable Media', 'Connection Proxy', 'Custom Command and Control Protocol', 'Custom Cryptographic Protocol', 'Data Encoding', 'Data Obfuscation', 'Domain Generation Algorithms', 'Domain Fronting', 'Fallback Channels', 'Multi-hop Proxy', 'Multi-Stage Channels', 'Multiband Communication', 'Multilayer Encryption', 'Port Knocking', 'Remote Access Tools', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol', 'Standard Non-Application Layer Protocol', 'Uncommonly Used Port', 'Web Service']
},
  {
  'title':'Impact',
  'types': ['Account Access Removal', 'Data Destruction', 'Data Encrypted for Impact', 'Defacement', 'Disk Content Wipe', 'Disk Structure Wipe', 'Endpoint Denial of Service', 'Firmware Corruption', 'Inhibit System Recovery', 'Network Denial of Service','Resource Hijacking','Runtime Data Manipulation','Service Stop','Stored Data Manipulation', 'System Shutdown/Reboot', 'Transmitted Data Manipulation']
}];


export const matrixos = {
  'Linux': {
      'Initial Access': ['Drive-by Compromise', 'Exploit Public-Facing Application', 'Hardware Additions', 'Spearphishing Attachment', 'Spearphishing Link', 'Spearphishing via Service', 'Supply Chain Compromise', 'Trusted Relationship', 'Valid Accounts'],
      'Execution': ['Command-Line Interface', 'Exploitation for Client Execution', 'Graphical User Interface', 'Local Job Scheduling', 'Scripting', 'Source', 'Space after Filename', 'Third-party Software', 'Trap', 'User Execution'],
      'Persistence': ['bash_profile and bashrc', 'Bootkit', 'Browser Extensions', 'Create Account', 'Hidden Files and Directories', 'Kernel Modules and Extensions','Local Job Scheduling','Port Knocking','Redundant Access','Setuid and Setgid','Systemd Service','Trap','Valid Accounts','Web Shell'],
      'Privilege Escalation': ['Exploitation for Privilege Escalation','Process Injection','Setuid and Setgid','Sudo Caching','Sudo','Valid Accounts','Web Shell'],
      'Defense Evasion': ['Binary Padding','Clear Command History','Compile After Delivery','Disabling Security Tools','Execution Guardrails','Exploitation for Defense Evasion','File Deletion','File Permissions Modification','HISTCONTROL','Hidden Files and Directories','Indicator Removal from Tools','Indicator Removal on Host','Install Root Certificate','Masquerading','Obfuscated Files or Information','Port Knocking','Process Injection','Redundant Access','Rootkit','Scripting','Space after Filename','Timestomp','Valid Accounts','Web Service'],
      'Credential Access': ['Bash History','Brute Force','Credential Dumping','Credentials in Files','Exploitation for Credential Access','Input Capture','Network Sniffing','Private Keys','Two-Factor Authentication Interception'],
      'Discovery': ['Account Discovery','Browser Bookmark Discovery','File and Directory Discovery','Network Service Scanning','Network Sniffing','Password Policy Discovery','Permission Groups Discovery','Process Discovery','Remote System Discovery','System Information Discovery','System Network Configuration Discovery','System Network Connections Discovery','System Owner/User Discovery'],
      'Lateral Movement': ['Application Deployment Software','Exploitation of Remote Services','Remote File Copy','Remote Services','SSH Hijacking','Third-party Software'],
      'Collection': ['Audio Capture','Automated Collection','Clipboard Data','Data Staged','Data from Information Repositories','Data from Local System','Data from Network Shared Drive','Data from Removable Media','Input Capture','Screen Capture'],
      'Exfiltration': ['Automated Exfiltration','Data Compressed','Data Encrypted','Data Transfer Size Limits','Exfiltration Over Alternative Protocol','Exfiltration Over Command and Control Channel','Exfiltration Over Other Network Medium','Exfiltration Over Physical Medium','Scheduled Transfer'],
      'Command and Control': ['Commonly Used Port','Communication Through Removable Media','Connection Proxy','Custom Command and Control Protocol','Custom Cryptographic Protocol','Data Encoding','Data Obfuscation','Domain Fronting','Domain Generation Algorithms','Fallback Channels','Multi-Stage Channels','Multi-hop Proxy','Multiband Communication','Multilayer Encryption','Port Knocking','Remote Access Tools','Remote File Copy','Standard Application Layer Protocol','Standard Cryptographic Protocol','Standard Non-Application Layer Protocol','Uncommonly Used Port','Web Service'],
      'Impact': ['Data Destruction','Data Encrypted for Impact','Defacement','Disk Content Wipe','Disk Structure Wipe','Endpoint Denial of Service','Firmware Corruption','Inhibit System Recovery','Network Denial of Service','Resource Hijacking','Runtime Data Manipulation','Stored Data Manipulation','Transmitted Data Manipulation'],
      'Color': 'matrixos-lin'
  },
  'Mac': {
      'Initial Access': ['Drive-by Compromise', 'Exploit Public-Facing Application', 'Hardware Additions', 'Spearphishing Attachment', 'Spearphishing Link', 'Spearphishing via Service', 'Supply Chain Compromise', 'Trusted Relationship', 'Valid Accounts'],
      'Execution': ['AppleScript', 'Command-Line Interface', 'Exploitation for Client Execution', 'Graphical User Interface', 'Launchctl', 'Local Job Scheduling', 'Scripting', 'Source', 'Space after Filename', 'Third-party Software', 'Trap', 'User Execution'],
      'Persistence': ['bash_profile and bashrc', 'Browser Extensions', 'Create Account', 'Dylib Hijacking', 'Hidden Files and Directories', 'Kernel Modules and Extensions', 'LC_LOAD_DYLIB Addition', 'Launch Agent', 'Launch Daemon', 'Launchctl', 'Local Job Scheduling', 'Login Item', 'Logon Scripts', 'Plist Modification', 'Port Knocking', 'Rc.common', 'Re-opened Applications', 'Redundant Access', 'Setuid and Setgid', 'Startup Items', 'Trap', 'Valid Accounts', 'Web Shell'],
      'Privilege Escalation': ['Dylib Hijacking', 'Exploitation for Privilege Escalation', 'Launch Daemon', 'Plist Modification', 'Process Injection', 'Setuid and Setgid', 'Startup Items', 'Sudo Caching', 'Sudo', 'Valid Accounts', 'Web Shell'],
      'Defense Evasion': ['Binary Padding', 'Clear Command History', 'Code Signing', 'Compile After Delivery', 'Disabling Security Tools', 'Execution Guardrails', 'Exploitation for Defense Evasion', 'File Deletion', 'File Permissions Modification', 'Gatekeeper Bypass', 'HISTCONTROL', 'Hidden Files and Directories', 'Hidden Users', 'Hidden Window', 'Indicator Removal from Tools', 'Indicator Removal on Host', 'Install Root Certificate', 'LC_MAIN Hijacking', 'Launchctl', 'Masquerading', 'Obfuscated Files or Information', 'Plist Modification', 'Port Knocking', 'Process Injection', 'Redundant Access', 'Rootkit', 'Scripting', 'Space after Filename', 'Valid Accounts', 'Web Service'],
      'Credential Access': ['Bash History', 'Brute Force', 'Credential Dumping', 'Credentials in Files', 'Exploitation for Credential Access', 'Input Capture', 'Input Prompt', 'Keychain', 'Network Sniffing', 'Private Keys', 'Securityd Memory', 'Two-Factor Authentication Interception'],
      'Discovery': ['Account Discovery', 'Application Window Discovery', 'Browser Bookmark Discovery', 'File and Directory Discovery', 'Network Service Scanning', 'Network Share Discovery', 'Network Sniffing', 'Password Policy Discovery', 'Permission Groups Discovery', 'Process Discovery', 'Remote System Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery','System Owner/User Discovery'],
      'Lateral Movement': ['AppleScript', 'Application Deployment Software', 'Exploitation of Remote Services', 'Logon Scripts', 'Remote File Copy', 'Remote Services', 'SSH Hijacking', 'Third-party Software'],
      'Collection': ['Audio Capture', 'Automated Collection', 'Clipboard Data', 'Data Staged', 'Data from Information Repositories', 'Data from Local System', 'Data from Network Shared Drive', 'Data from Removable Media', 'Input Capture', 'Screen Capture', 'Video Capture'],
      'Exfiltration': ['Automated Exfiltration', 'Data Compressed', 'Data Encrypted', 'Data Transfer Size Limits', 'Exfiltration Over Alternative Protocol', 'Exfiltration Over Command and Control Channel', 'Exfiltration Over Other Network Medium', 'Exfiltration Over Physical Medium', 'Scheduled Transfer'],
      'Command and Control': ['Commonly Used Port', 'Communication Through Removable Media', 'Connection Proxy', 'Custom Command and Control Protocol', 'Custom Cryptographic Protocol', 'Data Encoding', 'Data Obfuscation', 'Domain Fronting', 'Domain Generation Algorithms', 'Fallback Channels', 'Multi-Stage Channels', 'Multi-hop Proxy', 'Multiband Communication', 'Multilayer Encryption', 'Port Knocking', 'Remote Access Tools', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol', 'Standard Non-Application Layer Protocol', 'Uncommonly Used Port', 'Web Service'],
      'Impact': ['Data Destruction', 'Data Encrypted for Impact', 'Defacement', 'Disk Content Wipe', 'Disk Structure Wipe', 'Endpoint Denial of Service', 'Firmware Corruption', 'Inhibit System Recovery', 'Network Denial of Service', 'Resource Hijacking', 'Runtime Data Manipulation', 'Stored Data Manipulation', 'Transmitted Data Manipulation'],
      'Color': 'matrixos-mac'
  },
  'Windows': {
      'Initial Access': ['Drive-by Compromise', 'Exploit Public-Facing Application', 'External Remote Services', 'Hardware Additions', 'Replication Through Removable Media', 'Spearphishing Attachment', 'Spearphishing Link', 'Spearphishing via Service', 'Supply Chain Compromise', 'Trusted Relationship', 'Valid Accounts'],
      'Execution': ['CMSTP', 'Command-Line Interface', 'Compiled HTML File', 'Control Panel Items', 'Dynamic Data Exchange', 'Execution through API', 'Execution through Module Load', 'Exploitation for Client Execution', 'Graphical User Interface', 'InstallUtil', 'LSASS Driver', 'Mshta', 'PowerShell', 'Regsvcs/Regasm', 'Regsvr32', 'Rundll32', 'Scheduled Task', 'Scripting', 'Service Execution', 'Signed Binary Proxy Execution', 'Signed Script Proxy Execution', 'Third-party Software', ' Trusted Developer Utilities', 'User Execution', 'Windows Management Instrumentation', 'Windows Remote Management', 'XSL Script Processing'],
      'Persistence': ['Accessibility Features', 'Account Manipulation', 'AppCert DLLs', 'AppInit DLLs', 'Application Shimming', 'Authentication Package', 'BITS Jobs', 'Bootkit', 'Browser Extensions', 'Change Default File Association', 'Component Firmware', 'Component Object Model Hijacking', 'Create Account', 'DLL Search Order Hijacking', 'External Remote Services', 'File System Permissions Weakness', 'Hidden Files and Directories', 'Hooking', 'Hypervisor', 'Image File Execution Options Injection', 'LSASS Driver', 'Logon Scripts', 'Modify Existing Service', 'Netsh Helper DLL', 'New Service', 'Office Application Startup', 'Path Interception', 'Port Monitors', 'Redundant Access', ' Registry Run Keys/Startup Folder', 'SIP and Trust Provider Hijacking', 'Scheduled Task', 'Screensaver', 'Security Support Provider', 'Service Registry Permissions Weakness', 'Shortcut Modification', 'System Firmware', 'Time Providers', 'Valid Accounts', 'Web Shell', 'Windows Management Instrumentation Event Subscription', 'Winlogon Helper DLL'],
      'Privilege Escalation': ['Access Token Manipulation', 'Accessibility Features', 'AppCert DLLs', 'AppInit DLLs', 'Application Shimming', 'Bypass User Account Control', 'DLL Search Order Hijacking', 'Exploitation for Privilege Escalation', 'Extra Window Memory Injection', 'File System Permissions Weakness', 'Hooking', 'Image File Execution Options Injection', 'New Service', 'Path Interception', 'Port Monitors', 'Process Injection', 'SID-History Injection', 'Scheduled Task', 'Service Registry Permissions Weakness', 'Valid Accounts', 'Web Shell'],
      'Defense Evasion': ['Access Token Manipulation', 'BITS Jobs', 'Binary Padding', 'Bypass User Account Control', 'CMSTP', 'Code Signing', 'Compile After Delivery', 'Compiled HTML File', 'Component Firmware', 'Component Object Model Hijacking', 'Control Panel Items', 'DCShadow', 'DLL Search Order Hijacking', 'DLL Side-Loading', 'Deobfuscate/Decode Files or Information', 'Disabling Security Tools', 'Execution Guardrails', 'Exploitation for Defense Evasion', 'Extra Window Memory Injection', 'File Deletion', 'File Permissions Modification', 'File System Logical Offsets', 'Group Policy Modification', 'Hidden Files and Directories', 'Image File Execution Options Injection', 'Indicator Blocking', 'Indicator Removal from Tools', 'Indicator Removal on Host', 'Indirect Command Execution', 'Install Root Certificate', 'InstallUtil', 'Masquerading', 'Modify Registry', 'Mshta', 'NTFS File Attributes', 'Network Share Connection Removal', 'Obfuscated Files or Information', 'Process Doppelgänging', 'Process Hollowing', 'Process Injection', 'Redundant Access', 'Regsvcs/Regasm', 'Regsvr32', 'Rootkit', 'Rundll32', 'SIP and Trust Provider Hijacking', 'Scripting', 'Signed Binary Proxy Execution', 'Signed Script Proxy Execution', 'Software Packing', 'Template Injection', 'Timestomp', 'Trusted Developer Utilities', 'Valid Accounts', 'Virtualization/Sandbox Evasion', 'Web Service', 'XSL Script Processing'],
      'Credential Access': ['Account Manipulation', 'Brute Force', 'Credential Dumping', 'Credentials in Files', 'Credentials in Registry', 'Exploitation for Credential Access', 'Forced Authentication', 'Hooking', 'Input Capture', 'Input Prompt', 'Kerberoasting', 'LLMNR/NBT-NS Poisoning', 'Network Sniffing', 'Password Filter DLL', 'Private Keys', 'Two-Factor Authentication Interception'],
      'Discovery': ['Account Discovery', 'Application Window Discovery', 'Browser Bookmark Discovery', 'Domain Trust Discovery', 'File and Directory Discovery', 'Network Service Scanning', 'Network Share Discovery', 'Network Sniffing', 'Password Policy Discovery', 'Peripheral Device Discovery', 'Permission Groups Discovery', 'Process Discovery', 'Query Registry', 'Remote System Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery','System Owner/User Discovery', 'System Service Discovery', 'System Time Discovery', 'Virtualization/Sandbox Evasion'],
      'Lateral Movement': ['Application Deployment Software', 'Distributed Component Object Model', 'Exploitation of Remote Services', 'Logon Scripts', 'Pass the Hash', 'Pass the Ticket', 'Remote Desktop Protocol', 'Remote File Copy', 'Remote Services', 'Replication Through Removable Media', 'Shared Webroot', 'Taint Shared Content', 'Third-party Software', 'Windows Admin Shares', 'Windows Remote Management'],
      'Collection': ['Audio Capture', 'Automated Collection', 'Clipboard Data', 'Data Staged', 'Data from Information Repositories', 'Data from Local System', 'Data from Network Shared Drive', 'Data from Removable Media', 'Email Collection', 'Input Capture', 'Man in the Browser', 'Screen Capture', 'Video Capture'],
      'Exfiltration': ['Automated Exfiltration', 'Data Compressed', 'Data Encrypted', 'Data Transfer Size Limits', 'Exfiltration Over Alternative Protocol', 'Exfiltration Over Command and Control Channel', 'Exfiltration Over Other Network Medium', 'Exfiltration Over Physical Medium', 'Scheduled Transfer'],
      'Command and Control': ['Commonly Used Port', 'Communication Through Removable Media', 'Connection Proxy', 'Custom Command and Control Protocol', 'Custom Cryptographic Protocol', 'Data Encoding', 'Data Obfuscation', 'Domain Fronting', 'Domain Generation Algorithms', 'Fallback Channels', 'Multi-Stage Channels', 'Multi-hop Proxy', 'Multiband Communication', 'Multilayer Encryption', 'Remote Access Tools', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol', 'Standard Non-Application Layer Protocol', 'Uncommonly Used Port', 'Web Service'],
      'Impact': ['Data Destruction', 'Data Encrypted for Impact', 'Defacement', 'Disk Content Wipe', 'Disk Structure Wipe', 'Endpoint Denial of Service', 'Firmware Corruption', 'Inhibit System Recovery', 'Network Denial of Service', 'Resource Hijacking', 'Runtime Data Manipulation', 'Service Stop', 'Stored Data Manipulation', 'Transmitted Data Manipulation'],
      'Color': 'matrixos-windows'
  },
  'AWS': {
      'Initial Access': ['Exploit Public-Facing Application', 'Trusted Relationship', 'Valid Accounts'],
      'Persistence': ['Account Manipulation', 'Create Account', 'Implant Container Image', 'Valid Accounts'],
      'Privilege Escalation': ['Valid Accounts'],
      'Defense Evasion': ['Impair Defenses', 'Modify Cloud Compute Infrastructure', 'Unused/Unsupported Cloud Regions', 'Valid Accounts'],
      'Credential Access': ['Brute Force', 'Unsecured Credentials'],
      'Discovery': ['Account Discovery', 'Cloud Service Dashboard', 'Cloud Service Discovery', 'Network Service Scanning', 'Network Share Discovery', 'Permission Groups Discovery', 'Remote System Discovery', 'System Information Discovery', 'System Network Connections Discovery'],
      'Collection': [ 'Data from Cloud Storage Object', 'Data from Information Repositories', 'Data Staged'],
      'Exfiltration': ['Transfer Data to Cloud Account'],
      'Impact': ['Defacement', 'Endpoint Denial of Service', 'Network Denial of Service', 'Resource Hijacking'],
      'Color': 'matrixos-aws'
  },
  'GCP': {
      'Initial Access': ['Exploit Public-Facing Application', 'Trusted Relationship', 'Valid Accounts'],
      'Persistence': ['Account Manipulation', 'Create Account', 'Implant Container Image', 'Valid Accounts'],
      'Privilege Escalation': ['Valid Accounts'],
      'Defense Evasion': ['Impair Defenses', 'Modify Cloud Compute Infrastructure', 'Unused/Unsupported Cloud Regions', 'Valid Accounts'],
      'Credential Access': ['Brute Force', 'Unsecured Credentials'],
      'Discovery': ['Account Discovery', 'Cloud Service Dashboard', 'Cloud Service Discovery', 'Network Service Scanning', 'Network Share Discovery', 'Permission Groups Discovery', 'Remote System Discovery', 'Software Discovery', 'System Information Discovery', 'System Network Connections Discovery'],
      'Collection': [ 'Data from Cloud Storage Object', 'Data from Information Repositories', 'Data Staged'],
      'Exfiltration': ['Transfer Data to Cloud Account'],
      'Impact': ['Defacement', 'Endpoint Denial of Service', 'Network Denial of Service', 'Resource Hijacking'],
      'Color': 'matrixos-gcp'
  },
  'Azure': {
      'Initial Access': ['Exploit Public-Facing Application', 'Trusted Relationship', 'Valid Accounts'],
      'Persistence': ['Account Manipulation', 'Create Account', 'Implant Container Image', 'Valid Accounts'],
      'Privilege Escalation': ['Valid Accounts'],
      'Defense Evasion': ['Impair Defenses', 'Modify Cloud Compute Infrastructure', 'Unused/Unsupported Cloud Regions', 'Valid Accounts'],
      'Credential Access': ['Brute Force', 'Unsecured Credentials'],
      'Discovery': ['Account Discovery', 'Cloud Service Dashboard', 'Cloud Service Discovery', 'Network Service Scanning', 'Network Share Discovery', 'Permission Groups Discovery', 'Remote System Discovery', 'Software Discovery', 'System Information Discovery', 'System Network Connections Discovery'],
      'Collection': [ 'Data from Cloud Storage Object', 'Data from Information Repositories', 'Data Staged'],
      'Exfiltration': ['Transfer Data to Cloud Account'],
      'Impact': ['Defacement', 'Endpoint Denial of Service', 'Network Denial of Service', 'Resource Hijacking'],
      'Color': 'matrixos-azure'
  },
  'Office 365': {
      'Initial Access': ['Phishing', 'Valid Accounts'],
      'Persistence': ['Account Manipulation', 'Create Account', 'Office Application Startup', 'Valid Accounts'],
      'Privilege Escalation': ['Valid Accounts'],
      'Defense Evasion': ['Use Alternate Authentication Material',  'Valid Accounts'],
      'Credential Access': ['Brute Force', 'Steal Application Access Token', 'Steal Web Session Cookie', 'Unsecured Credentials'],
      'Discovery': ['Account Discovery', 'Cloud Service Dashboard', 'Cloud Service Discovery', 'Permission Groups Discovery', 'Software Discovery'],
      'Lateral Movement': ['Internal Spearphishing', 'Use Alternate Authentication Material'],
      'Collection': ['Data from Information Repositories', 'Email Collection'],
      'Impact': ['Endpoint Denial of Service', 'Network Denial of Service'],
      'Color': 'matrixos-office'
  },
  'Azure AD': {
      'Initial Access': ['Valid Accounts'],
      'Persistence': ['Account Manipulation', 'Create Account', 'Valid Accounts'],
      'Privilege Escalation': ['Valid Accounts'],
      'Defense Evasion': ['Valid Accounts'],
      'Credential Access': ['Brute Force', 'Steal Application Access Token', 'Unsecured Credentials'],
      'Discovery': ['Account Discovery', 'Cloud Service Dashboard', 'Cloud Service Discovery', 'Permission Groups Discovery', 'Software Discovery'],
      'Impact': ['Endpoint Denial of Service', 'Network Denial of Service'],
      'Color': 'matrixos-azureAD'
  },
  'SaaS': {
      'Initial Access': ['Drive-by Compromise', 'Phishing', 'Trusted Relationship', 'Valid Accounts'],
      'Persistence': ['Valid Accounts'],
      'Privilege Escalation': ['Valid Accounts'],
      'Defense Evasion': ['Use Alternate Authentication Material',  'Valid Accounts'],
      'Credential Access': ['Brute Force', 'Steal Application Access Token', 'Steal Web Session Cookie', 'Unsecured Credentials'],
      'Discovery': ['Account Discovery', 'Cloud Service Discovery', 'Permission Groups Discovery', 'Software Discovery'],
      'Lateral Movement': ['Internal Spearphishing', 'Use Alternate Authentication Material'],
      'Collection': ['Data from Information Repositories'],
      'Impact': ['Endpoint Denial of Service', 'Network Denial of Service'],
      'Color': 'matrixos-saas'
  }
};

export const matrixCoverage = {
  'Yellow': {
      'Initial Access': ['Drive-by Compromise', 'Hardware Additions', 'Supply Chain Compromise', 'Trusted Relationship', 'Valid Accounts'],
      'Execution': ['CMSTP', 'Compiled HTML File','LSASS Driver','Control Panel Items','Rundll32', 'Launchctl','Trap', 'Local Job Scheduling', 'Mshta', 'Regsvcs/Regasm', 'Regsvr32', 'Scheduled Task', 'Scripting', 'Signed Binary Proxy Execution', 'Signed Script Proxy Execution', 'Third-party Software', 'XSL Script Processing'],
      'Persistence': ['.bash_profile and .bashrc','Rc.common','Trap','LSASS Driver', 'Accessibility Features','Hidden Files and Directories','BITS Jobs','DLL Search Order Hijacking', 'Account Manipulation', 'AppInit DLLs', 'Application Shimming', 'Authentication Package', 'Browser Extensions', 'Change Default File Association', 'Component Object Model Hijacking', 'Create Account', 'Image File Execution Options Injection', 'Kernel Modules and Extensions', 'Launch Agent', 'Launchctl', 'LC_LOAD_DYLIB Addition', 'Local Job Scheduling', 'Logon Scripts', 'Netsh Helper DLL', 'New Service', 'Office Application Startup', 'Path Interception', 'Re-opened Applications', 'Registry Run Keys / Startup Folder', 'Scheduled Task', 'Screensaver', 'Security Support Provider', 'Service Registry Permissions Weakness', 'Setuid and Setgid', 'Shortcut Modification', 'Startup Items', 'System Firmware', 'Time Providers', 'Web Shell', 'Winlogon Helper DLL'],
      'Privilege Escalation': ['Access Token Manipulation', 'Accessibility Features', 'AppInit DLLs', 'Application Shimming', 'Bypass User Account Control', 'DLL Search Order Hijacking', 'File System Permissions Weakness', 'Image File Execution Options Injection', 'Launch Daemon', 'New Service', 'Path Interception', 'Plist Modification', 'Port Monitors', 'Process Injection', 'Scheduled Task', 'Service Registry Permissions Weakness', 'Setuid and Setgid', 'Startup Items', 'Sudo', 'Sudo Caching', 'Web Shell'],
      'Defense Evasion': ['Access Token Manipulation','Disabling Security Tools','Process Hollowing','Mshta','NTFS File Attributes','Deobfuscate/Decode Files or Information','Indirect Command Execution','Bypass User Account Control','Component Object Model Hijacking','Deobfuscate/Decode Files or Information', 'BITS Jobs','Control Panel Items','Hidden Files and Directories', 'Clear Command History','DLL Search Order Hijacking', 'CMSTP', 'Code Signing', 'File Deletion', 'File Permissions Modification', 'File System Logical Offsets', 'Gatekeeper Bypass', 'RHidden Files and Directories', 'Hidden Users', 'Image File Execution Options Injection', 'Indicator Removal on Host', 'Launchctl', 'Plist Modification', 'Port Knocking', 'Process Doppelgänging', 'Process Injection', 'Regsvcs/Regasm', 'Regsvr32', 'Rootkit', 'Rundll32', 'Signed Binary Proxy Execution', 'Signed Script Proxy Execution', 'SIP and Trust Provider Hijacking', 'XSL Script Processing'],
      'Credential Access': ['Credential Dumping', 'Input Prompt', 'Private Keys'],
      'Discovery': ['Account Discovery', 'Password Policy Discovery', 'System Information Discovery'],
      'Lateral Movement': ['Logon Scripts', 'Remote File Copy', 'Shared Webroot', 'SSH Hijacking', 'Third-party Software'],
      'Collection': ['Data from Information Repositories', 'Data from Local System', 'Data from Network Shared Drive', 'Data from Removable Media', 'Data Staged', 'Email Collection', 'Input Capture'],
      'Exfiltration': [],
      'Command And Control': ['Connection Proxy', 'Custom Command and Control Protocol', 'Communication Through Removable Media', 'Remote Access Tools', 'Remote File Copy', 'Uncommonly Used Port'],
      'Impact': ['Data Encrypted for Impact','Data Destruction','Disk Structure Wipe','Inhibit System Recovery','Service Stop','Runtime Data Manipulation'],
      'Color': 'matrixcover1'
  },
  'Blue': {
      'Initial Access': [],
      'Execution': ['Graphical User Interface', 'Service Execution'],
      'Persistence': ['Redundant Access'],
      'Privilege Escalation': [],
      'Defense Evasion': ['Binary Padding', 'Exploitation for Defense Evasion', 'Redundant Access'],
      'Credential Access': ['Bash History', 'Brute Force', 'Exploitation for Credential Access', 'Forced Authentication', 'Forced Authentication', 'LLMNR/NBT-NS Poisoning', 'Network Sniffing', 'Securityd Memory', 'Two-Factor Authentication Interception'],
      'Discovery': ['Network Service Scanning', 'Query Registry', 'Security Software Discovery'],
      'Lateral Movement': ['Application Deployment Software', 'Exploitation of Remote Services', 'Taint Shared Content', 'Windows Admin Shares'],
      'Collection': [],
      'Exfiltration': ['Data Compressed', 'Data Encrypted', 'Data Transfer Size Limits', 'Exfiltration Over Alternative Protocol', 'Exfiltration Over Command and Control Channel', 'Exfiltration Over Other Network Medium', 'Scheduled Transfer'],
      'Command And Control': ['Commonly Used Port', 'Standard Application Layer Protocol', 'Multi-hop Proxy', 'Standard Cryptographic Protocol', 'Standard Non-Application Layer Protocol', 'Web Service'],
      'Color': 'matrixcover2'
  },
  'Green': {
      'Initial Access': ['Replication Through Removable Media'],
      'Execution': ['AppleScript', 'Command-Line Interface', 'InstallUtil', 'PowerShell', 'Source', 'Windows Management Instrumentation', 'Windows Remote Management'],
      'Persistence': ['AppCert DLLs', 'External Remote Services', 'Valid Accounts'],
      'Privilege Escalation': ['AppCert DLLs', 'Exploitation for Privilege Escalation', 'Valid Accounts'],
      'Defense Evasion': ['Valid Accounts','InstallUtil'],
      'Credential Access': ['Account Manipulation', 'Credentials in Files', 'Credentials in Registry', 'Input Capture'],
      'Discovery': ['Application Window Discovery', 'Browser Bookmark Discovery', 'File and Directory Discovery', 'Network Share Discovery', 'Peripheral Device Discovery', 'Permission Groups Discovery', 'Process Discovery', 'Remote System Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery', 'System Service Discovery', 'System Time Discovery'],
      'Lateral Movement': ['AppleScript', 'Pass the Hash', 'Pass the Ticket', 'Remote Desktop Protocol', 'Remote Services', 'Replication Through Removable Media', 'Windows Remote Management'],
      'Collection': ['Man in the Browser'],
      'Exfiltration': ['Automated Exfiltration'],
      'Command And Control': [],
      'Color': 'matrixcover3'
  },
  'Fullcoverage': {
      'Initial Access': ['Hardware Additions'],
      'Execution': ['Local Job Scheduling', 'Scheduled Task','Trap', 'Third-party Software','PowerShell'],
      'Persistence': ['Browser Extensions','Logon Scripts','BITS Jobs','Trap', 'Rc.common', 'Local Job Scheduling', 'Scheduled Task', 'Setuid and Setgid'],
      'Privilege Escalation': ['Access Token Manipulation', 'Process Injection', 'Scheduled Task', 'Setuid and Setgid'],
      'Defense Evasion': ['Access Token Manipulation','File Deletion','File Deletion','Indicator Removal on Host','BITS Jobs', 'Process Injection', 'Rootkit', 'XSL Script Processing'],
      'Credential Access': ['Credential Dumping'],
      'Discovery': ['Account Discovery','System Information Discovery', 'File and Directory Discovery', 'Network Share Discovery', 'Permission Groups Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Service Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Data from Removable Media', 'Third-party Software'],
      'Collection': ['Data from Removable Media','Audio Capture'],
      'Exfiltration': ['Data Compressed'],
      'Command And Control': [],
      'Impact': ['Data Encrypted for Impact'],
      'Color': 'matrixcover4'
  },
  'White': {
      'Initial Access': ['Exploit Public-Facing Application', 'Replication Through Removable Media', 'Spearphishing Attachment', 'Spearphishing Link', 'Spearphishing via Service'],
      'Execution': ['Control Panel Items', 'Dynamic Data Exchange', 'Execution through API', 'Execution through Module Load', 'Exploitation for Client Execution', 'InstallUtil', 'LSASS Driver', 'Space after Filename', 'Trap', 'Trusted Developer Utilities', 'User Execution'],
      'Persistence': ['BITS Jobs', 'Bootkit', 'Component Firmware', 'DLL Search Order Hijacking', 'Dylib Hijacking', 'File System Permissions Weakness', 'Hidden Files and Directories', 'Hooking', 'Hypervisor', 'Launch Daemon', 'Login Item', 'LSASS Driver', 'Modify Existing Service', 'Plist Modification', 'Port Knocking', 'Port Monitors', 'Rc.common', 'SIP and Trust Provider Hijacking', 'Trap', 'Windows Management Instrumentation Event Subscription'],
      'Privilege Escalation': ['Dylib Hijacking', 'Extra Window Memory Injection', 'Hooking', 'SID-History Injection'],
      'Defense Evasion': ['BITS Jobs', 'Bypass User Account Control', 'Compiled HTML File', 'Component Firmware', 'Component Object Model Hijacking', 'Control Panel Items', 'DCShadow', 'Deobfuscate/Decode Files or Information', 'Disabling Security Tools', 'DLL Search Order Hijacking', 'DLL Side-Loading', 'Extra Window Memory Injection', 'Hidden Window', 'HISTCONTROL', 'Indicator Blocking', 'Indicator Removal from Tools', 'Indirect Command Execution', 'Install Root Certificate', 'InstallUtil', 'LC_MAIN Hijacking', 'Masquerading', 'Modify Registry', 'Mshta', 'Network Share Connection Removal', 'NTFS File Attributes', 'Obfuscated Files or Information', 'Process Hollowing', 'Scripting', 'Software Packing', 'Space after Filename', 'Template Injection', 'Timestomp', 'Trusted Developer Utilities', 'Web Service'],
      'Credential Access': ['Hooking', 'Kerberoasting', 'Password Filter DLL'],
      'Discovery': ['Network Sniffing'],
      'Lateral Movement': ['Distributed Component Object Model'],
      'Collection': ['Audio Capture', 'Automated Collection', 'Clipboard Data', 'Screen Capture', 'Video Capture'],
      'Exfiltration': ['Exfiltration Over Physical Medium'],
      'Command And Control': ['Communication Through Removable Media', 'Custom Cryptographic Protocol', 'Data Encoding', 'Data Obfuscation', 'Domain Fronting', 'Fallback Channels', 'Multi-hop Proxy', 'Multi-Stage Channels', 'Multiband Communication', 'Multilayer Encryption', 'Port Knocking'],
      'Color': 'matrixcover4'
  }
};


export const Software = {
  '3PARA_RAT': {
      'Persistence': ['Redundant Access'],
      'Defense Evasion': ['Redundant Access', 'Timestomp'],
      'Discovery': ['File and Directory Discovery'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': '3PARA RAT is a remote access tool (RAT) programmed in C++ that has been used by Putter Panda.',
      'Color': 'matrix1'
  },
  '4H_RAT': {
      'Execution': ['Command-Line Interface'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Information Discovery'],
      'Exfiltration': ['Data Compressed'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Standard Application Layer Protocol'],
      'details': '4H RAT is malware that has been used by Putter Panda since at least 2007.',
      'Color': 'matrix2'
  },
  'ADVSTORESHELL': {
      'Execution': ['Command-Line Interface', 'Execution through API', 'Rundll32'],
      'Persistence': ['Component Object Model Hijacking', 'Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Component Object Model Hijacking', 'File Deletion', 'Modify Registry', 'Obfuscated Files or Information', 'Rundll32'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Peripheral Device Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery'],
      'Collection': ['Data Staged', 'Input Capture'],
      'Command And Control': ['Commonly Used Port', 'Data Encoding', 'Custom Cryptographic Protocol', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Compressed', 'Data Encrypted', 'Exfiltration Over Command and Control Channel', 'Scheduled Transfer'],
      'details': 'ADVSTORESHELL is a spying backdoor that has been used by APT28 from at least 2012 to 2016. It is generally used for long-term espionage and is deployed on targets deemed interesting after a reconnaissance phase. ',
      'Color': 'matrix3'
  },
  'adbupd': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Windows Management Instrumentation Event Subscription'],
      'Command And Control': ['Standard Cryptographic Protocol'],
      'details': 'adbupd is a backdoor used by PLATINUM that is similar to Dipsind.',
      'Color': 'matrix14'
  },
  'ASPXSpy': {
      'Persistence': ['Web Shell'],
      'Privilege Escalation': ['Web Shell'],
      'details': 'ASPXSpy is a Web shell. It has been modified by Threat Group-3390 actors to create the ASPXTool version.',
      'Color': 'matrix4'
  },
  'Agent_Tesla': {
      'Execution': ['Exploitation for Client Execution'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Disabling Security Tools', 'Obfuscated Files or Information'],
      'Credential Access': ['Input Capture'],
      'Discovery': [' Account Discovery', 'Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File'],
      'Collection': ['Clipboard Data', 'Input Capture', 'Screen Capture', 'Video Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol', 'Uncommonly Used Port'],
      'Exfiltration': ['Exfiltration Over Alternative Protocol', 'Data Encrypted'],
      'details': 'Agent Tesla is a spyware Trojan written in visual basic.',
      'Color': 'matrix5'
  },
  'Agent_btz': {
      'Initial Access': ['Replication Through Removable Media'],
      'Discovery': ['System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy', 'Replication Through Removable Media'],
      'Command And Control': ['Remote File Copy'],
      'Exfiltration': ['Data Encrypted', 'Exfiltration Over Physical Medium'],
      'details': 'Agent.btz is a worm that primarily spreads itself via removable devices such as USB drives. It reportedly infected U.S. military networks in 2008. ',
      'Color': 'matrix6'
  },

  'Arp': {
      'Discovery': ['System Network Configuration Discovery'],
      'details': 'Arp displays information about a system\'s Address Resolution Protocol (ARP) cache.',
      'Color': 'matrix7'
  },
  'Astaroth': {

      'Execution': ['Command-Line Interface', 'Compiled HTML File', 'Execution through Module Load', 'Regsvr32', 'Scripting', 'Windows Management Instrumentation', 'XSL Script Processing'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Defense Evasion': ['Compiled HTML File', 'Deobfuscate/Decode Files or Information', 'Obfuscated Files or Information', 'Process Hollowing', 'Regsvr32', 'Scripting', 'Software Packing', 'XSL Script Processing'],
      'Credential Access': ['Credential Dumping', 'Input Capture'],
      'Discovery': ['Process Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Clipboard Data', 'Data Staged', 'Input Capture'],
      'Command And Control': ['Data Encoding'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'details': 'Astaroth is a Trojan and information stealer known to affect companies in Europe and Brazil. It has been known publicly since at least late 2017.',
      'Color': 'matrix8'
  },
  'at': {
      'Execution': ['Scheduled Task'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'details': 'at is used to schedule tasks on a system to run at a specified date or time.',
      'Color': 'matrix18'
  },
  'AuditCred': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service', 'Process Injection'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'File Deletion', 'Obfuscated Files or Information', 'Process Injection'],
      'Discovery': ['File and Directory Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Connection Proxy', 'Remote File Copy'],
      'details': 'AuditCred is a malicious DLL that has been used by Lazarus Group during their 2018 attacks.',
      'Color': 'matrix9'
  },
  'AutoIt_backdoor': {
      'Execution': ['PowerShell'],
      'Privilege Escalation': ['Bypass User Account Control'],
      'Defense Evasion': ['Bypass User Account Control'],
      'Discovery': ['File and Directory Discovery'],
      'Command And Control': ['Data Encoding'],
      'details': 'AutoIt backdoor is malware that has been used by the actors responsible for the MONSOON campaign. The actors frequently used it in weaponized .pps files exploiting CVE-2014-6352. [1] This malware makes use of the legitimate scripting language for Windows GUI automation with the same name.',
      'Color': 'matrix10'
  },
  'Azorult': {
      'Privilege Escalation': ['Access Token Manipulation'],
      'Defense Evasion': ['Access Token Manipulation', 'Deobfuscate/Decode Files or Information', 'File Deletion', 'Process Hollowing'],
      'Credential Access': ['Credential Dumping', 'Credentials in Files'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Cryptographic Protocol'],
      'details': 'Azorult is a commercial Trojan that is used to steal information from compromised hosts. Azorult has been observed in the wild as early as 2016. In July 2018, Azorult was seen used in a spearphishing campaign against targets in North America. Azorult has been seen used for cryptocurrency theft.',
      'Color': 'matrix11'
  },
  'BabyShark': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['File Deletion'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Data Encoding', 'Remote File Copy'],
      'details': 'BabyShark is a Microsoft Visual Basic (VB) script-based malware family that is believed to be associated with several North Korean campaigns.',
      'Color': 'matrix29'
  },
  'BACKSPACE': {

      'Execution': ['Command-Line Interface'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Defense Evasion': ['Disabling Security Tools', 'Modify Registry'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery'],
      'Command And Control': ['Connection Proxy', 'Data Obfuscation', 'Multi-Stage Channels', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'details': 'BACKSPACE is a backdoor used by APT30 that dates back to at least 2005.',
      'Color': 'matrix12'
  },
  'BADCALL': {
      'Defense Evasion': ['Disabling Security Tools', 'Modify Registry'],
      'Discovery': ['System Information Discovery', 'System Network Configuration Discovery'],
      'Command And Control': ['Commonly Used Port', 'Connection Proxy', 'Custom Cryptographic Protocol'],
      'details': 'BADCALL is a Trojan malware variant used by the group Lazarus Group. ',
      'Color': 'matrix13'
  },
  'BADNEWS': {
      'Execution': ['Command-Line Interface', 'Execution through API', 'Scheduled Task'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Defense Evasion': ['Code Signing', 'DLL Side-Loading', 'Masquerading', 'Process Hollowing', 'Web Service'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Peripheral Device Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Automated Collection', 'Data from Local System', 'Data from Network Shared Drive', 'Data from Removable Media', 'Data Staged', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Data Encoding', 'Data Obfuscation', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'BADNEWS is malware that has been used by the actors responsible for the Patchwork campaign. Its name was given due to its use of RSS feeds, forums, and blogs for command and control.',
      'Color': 'matrix14'
  },
  'BBSRAT': {
      'Execution': ['Service Execution'],
      'Persistence': ['Component Object Model Hijacking', 'Modify Existing Service', 'Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Component Object Model Hijacking', 'Deobfuscate/Decode Files or Information', 'DLL Side-Loading', 'File Deletion', 'Process Hollowing'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Service Discovery'],
      'Command And Control': ['Commonly Used Port', 'Custom Cryptographic Protocol', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Compressed'],
      'details': 'BBSRAT is malware with remote access tool functionality that has been used in targeted compromises.',
      'Color': 'matrix15'
  },
  'BISCUIT': {
      'Execution': ['Command-Line Interface'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['Process Discovery', 'System Information Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'Command And Control': ['Custom Command and Control Protocol', 'Fallback Channels', 'Remote File Copy', 'Standard Cryptographic Protocol'],
      'details': 'BISCUIT is a backdoor that has been used by APT1 since as early as 2007.',
      'Color': 'matrix16'

  },

  'BITSAdmin': {
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'Exfiltration': ['Exfiltration Over Alternative Protocol'],
      'details': 'BITSAdmin is a command line tool used to create and manage BITS Jobs.',
      'Color': 'matrix17'
  },
  'BLACKCOFFEE': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['File Delegation', 'Web Service'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery'],
      'Command And Control': ['Multi-Stage Channels', 'Web Service'],
      'details': 'BLACKCOFFEE is malware that has been used by several Chinese groups since at least 2013.',
      'Color': 'matrix18'
  },
  'BONDUPDATER': {
      'Execution': ['Command-Line Interface', 'PowerShell', 'Scheduled Task'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Domain Generation Algorithms', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'BONDUPDATER is a PowerShell backdoor used by OilRig. It was first observed in November 2017 during targeting of a Middle Eastern government organization, and an updated version was observed in August 2018 being used to target a government organization with spearphishing emails.',
      'Color': 'matrix19'
  },
  'BOOSTWRITE': {
      'Execution': ['Execution through Module Load'],
      'Persistence': ['DLL Search Order Hijacking'],
      'Privilege Escalation': ['DLL Search Order Hijacking'],
      'Defense Evasion': ['DLL Search Order Hijacking', 'Code Signing', 'Deobfuscate/Decode Files or Information', 'Obfuscated Files or Information'],
      'details': 'BOOSTWRITE is a loader crafted to be launched via abuse of the DLL search order of applications used by FIN7.',
      'Color': 'matrix4'
  },
  'BOOTRASH': {
      'Persistence': ['Bootkit'],
      'details': 'BOOTRASH is a Bootkit that targets Windows operating systems. It has been used by threat actors that target the financial sector.',
      'Color': 'matrix20'
  },
  'BS2005': {
      'Command And Control': ['Data Encoding'],
      'details': 'BS2005 is malware that was used by Ke3chang in spearphishing campaigns since at least 2011.',
      'Color': 'matrix21'
  },
  'BUBBLEWRAP': {
      'Discovery': ['System Information Discovery'],
      'Command And Control': ['Standard Application Layer Protocol', 'Standard Non-Application Layer Protocol'],
      'details': 'BUBBLEWRAP is a full-featured, second-stage backdoor used by the admin@338 group. It is set to run when the system boots and includes functionality to check, upload, and register plug-ins that can further enhance its capabilities.',
      'Color': 'matrix22'
  },
  'Backdoor_Oldrea': {
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['File Deletion'],
      'Credential Access': ['Credential Dumping'],
      'Collection': ['Email Collection'],
      'Command And Control': ['Data Obfuscation'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'Backdoor.Oldrea is a backdoor used by Dragonfly. It appears to be custom malware authored by the group or specifically for it. ',
      'Color': 'matrix23'
  },
  'BadPatch': {
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Virtualization/Sandbox Evasion'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Security Software Discovery', 'System Information Discovery', 'Virtualization/Sandbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data from Local System', 'Data Staged', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'BadPatch is a Windows Trojan that was used in a Gaza Hackers-linked campaign.',
      'Color': 'matrix24'
  },
  'Bandook': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['Process Hollowing'],
      'Credential Access': ['Input Capture'],
      'Collection': ['Audio Capture', 'Input Capture', 'Screen Capture', 'Video Capture'],
      'details': 'Bandook is a commercially available RAT, written in Delphi, which has been available since roughly 2007',
      'Color': 'matrix25'
  },
  'Bankshot': {
      'Execution': ['Command-Line Interface', 'Execution through API', 'Exploitation for Client Execution'],
      'Persistence': ['Modify Existing Service'],
      'Privilege Escalation': ['Access Token Manipulation'],
      'Defense Evasion': ['Access Token Manipulation', 'Deobfuscate/Decode Files or Information', 'File Deletion', 'Indicator Removal on Host', 'Modify Registry', 'Timestomp'],
      'Discovery': ['Account Discovery', 'File and Directory Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Automated Collection', 'Data from Local System'],
      'Command And Control': ['Data Encoding', 'Data Obfuscation', 'Remote File Copy', 'Standard Application Layer Protocol', 'Uncommonly Used Port'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'details': 'Bankshot is a remote access tool (RAT) that was first reported by the Department of Homeland Security in December of 2017. In 2018, Lazarus Group used the Bankshot implant in attacks against the Turkish financial sector. ',
      'Color': 'matrix26'
  },
  'Bisonal': {
      'Execution': ['Command-Line Interface', 'Rundll32', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'File Deletion', 'Deobfuscate or Information', 'Rundll32', 'Scripting'],
      'Discovery': ['Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Custom Cryptographic Protocol', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'Bisonal is malware that has been used in attacks against targets in Russia, South Korea, and Japan. It has been observed in the wild since 2014.',
      'Color': 'matrix27'
  },
  'BlackEnergy': {
      'Execution': ['Windows Management Instrumentation'],
      'Persistence': ['File System Permissions Weakness', 'New Service', 'Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Privilege Escalation': ['Bypass User Account Control', 'File System Permissions Weakness', 'New Service', 'Process Injection'],
      'Defense Evasion': ['Bypass User Account Control', 'Indicator Removal on Host', 'Process Injection'],
      'Credential Access': ['Credentials in Files', 'Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Network Service Scanning', 'Peripheral Device Discovery', 'System Network Connections Discovery', 'Process Discovery', 'System Information Discovery', 'System Network Configuration'],
      'Lateral Movement': ['Windows Admin Shares'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'Command And Control': ['Fallback Channels', 'Standard Application Layer Protocol'],
      'Impact': ['Data Destruction'],
      'details': 'BlackEnergy is a malware toolkit that has been used by both criminal and APT actors. It dates back to at least 2007 and was originally designed to create botnets for use in conducting Distributed Denial of Service (DDoS) attacks, but its use has evolved to support various plug-ins. It is well known for being used during the confrontation between Georgia and Russia in 2008, as well as in targeting Ukrainian institutions. Variants include BlackEnergy 2 and BlackEnergy 3.',
      'Color': 'matrix28'
  },
  'Brave_Prince': {
      'Defense Evasion': ['Disabling Security Tools'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery', 'System Network Configuration Discovery'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'Brave Prince is a Korean-language implant that was first observed in the wild in December 2017. It contains similar code and behavior to Gold Dragon, and was seen along with Gold Dragon and RunningRAT in operations surrounding the 2018 Pyeongchang Winter Olympics.',
      'Color': 'matrix29'
  },
  'Briba': {
      'Execution': ['Rundll32'],
      'Persistence': ['New Service', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Rundll32'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy'],
      'details': 'Briba is a trojan used by Elderwood to open a backdoor and download files on to compromised hosts. ',
      'Color': 'matrix30'
  },
  'CALENDAR': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['Web Service'],
      'Command And Control': ['Web Service'],
      'details': 'CALENDAR is malware used by APT1 that mimics legitimate Gmail Calendar traffic.',
      'Color': 'matrix1'
  },
  'CCBkdr': {
      'Initial Access': ['Supply Chain Compromise'],
      'Command And Control': ['Domain Generation Algorithms'],
      'details': 'CCBkdr is malware that was injected into a signed version of CCleaner and distributed from CCleaners distribution website. ',
      'Color': 'matrix2'
  },
  'certutil': {
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Install Root Certificate'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'details': 'certutil is a command-line utility that can be used to obtain certificate authority information and configure Certificate Services.',
      'Color': 'matrix22'
  },
  'CHOPSTICK': {
      'Initial Access': 'Replication Through Removable Media',
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['Modify Registry', 'Virtualization/Sandbox Evasion', 'Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Query Registry', 'Security Software Discovery', 'Virtualization/Sandbox Evasion'],
      'Lateral Movement': ['Remote File Copy', 'Replication Through Removable Media'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'Command And Control': ['Communication Through Removable Media', 'Connection Proxy', 'Domain Generation Algorithms', 'Fallback Channels', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'CHOPSTICK is a malware family of modular backdoors used by APT28. It has been used since at least 2012 and is usually dropped on victims as second-stage malware, though it has been used as first-stage malware in several cases. It has both Windows and Linux variants. [1] [2] [3] [4] It is tracked separately from the X-Agent for Android.',
      'Color': 'matrix3'
  },
  'CORALDECK': {
      'Discovery': ['File and Directory Discovery'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'Exfiltration': ['Data Compressed', 'Data Encrypted'],
      'details': 'CORALDECK is an exfiltration tool used by APT37.',
      'Color': 'matrix4'
  },

  'CORESHELL': {
      'Execution': ['Rundll32'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Binary Padding', 'Obfuscated Files or Information', 'Rundll32'],
      'Discovery': 'System Information Discovery',
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'CORESHELL is a downloader used by APT28. The older versions of this malware are known as SOURFACE and newer versions as CORESHELL.',
      'Color': 'matrix5'
  },
  'Cachedump': {
      'Credential Access': ['Credential Dumping'],
      'details': 'Cachedump is a publicly-available tool that program extracts cached password hashes from a system’s registry. ',
      'Color': 'matrix6'
  },
  'Calisto': {
      'Execution': ['Launchctl'],
      'Persistence': ['Account Manipulation', 'Create Account', 'Hidden Files and Directories', 'Launch Agent', 'Launchctl'],
      'Defense Evasion': ['File Deletion', 'Hidden Files and Directories', 'Launchctl', 'Masquerading'],
      'Credential Access': ['Account Manipulation', 'Input Prompt', 'Keychain'],
      'Discovery': ['Browser Bookmark Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data From Local System', 'Data Staged'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy'],
      'Exfiltration': ['Data Compressed'],
      'details': 'Calisto is a macOS Trojan that opens a backdoor on the compromised machine. Calisto is believed to have first been developed in 2016.',
      'Color': 'matrix7'
  },
  'CallMe': {
      'Execution': ['Command-Line Interface'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'details': 'CallMe is a Trojan designed to run on Apple OSX. It is based on a publicly available tool called Tiny SHell.',
      'Color': 'matrix8'
  },
  'Cannon': {
      'Persistence': ['Winlogon Helper DLL'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Information Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol', 'Uncommonly Used Port', 'Web Service'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'details': 'Cannon is a Trojan with variants written in C# and Delphi. It was first observed in April 2018.',
      'Color': 'matrix9'
  },

  'Carbanak': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Create Account', 'Registry Run Keys/Startup Folder'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['File Deletion', 'Obfuscated Files or Information', 'Process Injection'],
      'Credential Access': ['Credential Dumping', 'Input Capture'],
      'Discovery': ['Process Discovery', 'Query Registry'],
      'Lateral Movement': ['Remote Desktop Protocol'],
      'Collection': ['Email Collection', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol', 'Custom Cryptographic Protocol', 'Remote Access Tools', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Data Transfer Size Limits'],
      'details': 'Carbanak is a full-featured, remote backdoor used by a group of the same name (Carbanak). It is intended for espionage, data exfiltration, and providing remote access to infected machines.',
      'Color': 'matrix10'
  },
  'Carbon': {
      'Execution': ['Scheduled Task'],
      'Persistence': ['New Service', 'Scheduled Task'],
      'Privilege Escalation': ['New Service', 'Process Injection', 'Scheduled Task'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Deobfuscate Files or Information', 'Process Injection'],
      'Discovery': ['Account Discovery', 'Process Discovery', 'Query Registry', 'Remote System Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Time Discovery'],
      'Collection': ['Data Staged'],
      'Command And Control': ['Commonly Used Port', 'Standard Non-Application Layer Protocol'],
      'Exfiltration': ['Exfiltration Over Alternative Protocol'],
      'details': 'Carbon is a sophisticated, second-stage backdoor and framework that can be used to steal sensitive information from victims. Carbon has been selectively used by Turla to target government and foreign affairs-related organizations in Central Asia.',
      'Color': 'matrix11'
  },
  'Cardinal_RAT': {
      'Execution': ['Command-Line Interface', 'User Execution'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Compile After Delivery', 'Obfuscated Files or Information', 'File Deletion', 'Modify Registry', 'Deobfuscate/Decode Files or Information', 'Process Injection'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'Command And Control': ['Commonly Used Port', 'Connection Proxy', 'Custom Cryptographic Protocol', 'Fallback Channels', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Compressed'],
      'details': 'Cardinal RAT is a potentially low volume remote access trojan (RAT) observed since December 2015. Cardinal RAT is notable for its unique utilization of uncompiled C# source code and the Microsoft Windows built-in csc.exe compiler.',
      'Color': 'matrix12'
  },
  'Catchamas': {
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Masquerading', 'Modify Registry'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['Application Window Discovery', 'System Network Configuration Discovery'],
      'Collection': ['Clipboard Data', 'Data Staged', 'Input Capture', 'Screen Capture'],
      'details': 'Catchamas is a Windows Trojan that steals information from compromised systems.',
      'Color': 'matrix13'
  },
  'ChChes': {
      'Persistence': ['Registry Run Keys /Startup Folder'],
      'Defense Evasion': ['Code Signing', 'Disabling Security Tools', 'Masquerading'],
      'Credential Access': ['Credential Dumping'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'ChChes is a Trojan that appears to be used exclusively by menuPass. It was used to target Japanese organizations in 2016. Its lack of persistence methods suggests it may be intended as a first-stage tool. ',
      'Color': 'matrix14'
  },
  'Chaos': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Port Knocking'],
      'Defense Evasion': ['Port Knocking'],
      'Credential Access': ['Brute Force'],
      'Command And Control': ['Custom Command and Control Protocol', 'Multi-Stage Channels', 'Port Knocking', 'Standard Cryptographic Protocol'],
      'details': 'Chaos is Linux malware that compromises systems by brute force attacks against SSH services. Once installed, it provides a reverse shell to its controllers, triggered by unsolicited packets.',
      'Color': 'matrix15'
  },
  'Cherry_Picker': {
      'Persistence': ['AppInit DLLs'],
      'Privilege Escalation': ['AppInit DLLs'],
      'Defense Evasion': ['File Deletion'],
      'Exfiltration': ['Exfiltration Over Alternative Protocol'],
      'details': 'Cherry Picker is a point of sale (PoS) memory scraper.',
      'Color': 'matrix16'
  },
  'China_Chopper': {
      'Execution': ['Command-Line Interface', 'Scripting'],
      'Persistence': ['Web Shell'],
      'Privilege Escalation': ['Web Shell'],
      'Defense Evasion': ['Scripting', 'Software Packing', 'Timestomp'],
      'Credential Access': ['Brute Force'],
      'Discovery': ['File and Directory Discovery', 'Network Service Scanning'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data from Local System'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'China Chopper is a Web Shell hosted on Web servers to provide access back into an enterprise network that does not rely on an infected system calling back to a remote command and control server. [1] It has been used by several threat groups. ',
      'Color': 'matrix17'
  },
  'CloudDuke': {
      'Defense Evasion': ['Web Service'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol', 'Web Service'],
      'details': 'CloudDuke is malware that was used by APT29 in 2015.',
      'Color': 'matrix18'
  },
  'cmd': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['File Deletion'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'details': 'cmd is the Windows command-line interpreter that can be used to interact with systems and execute other processes and utilities. [1]\n' +'Cmd.exe contains native functionality to perform many operations to interact with the system, including listing files in a directory (e.g., dir [2]), deleting files (e.g., del [3]), and copying files (e.g., copy [4]).',
      'Color': 'matrix8'
  },
  'Cobalt_Strike': {
      'Initial Access': ['Valid Accounts'],
      'Execution': ['Command-Line Interface', 'Execution through API', 'PowerShell', 'Scripting', 'Service Execution', 'Windows Management Instrumentation', 'Windows Remote Management'],
      'Persistence': ['BITS Jobs', 'New Service', 'Valid Accounts'],
      'Privilege Escalation': ['Access Token Manipulation', 'Bypass User Account Control', 'Exploitation for Privilege Escalation', 'New Service', 'Process Injection', 'Valid Accounts'],
      'Defense Evasion': ['Access Token Manipulation', 'BITS Jobs', 'Bypass User Account Control', 'Indicator Removal on Host', 'Process Hollowing', 'Process Injection', 'Scripting', 'Timestomp', 'Valid Accounts'],
      'Credential Access': ['Credential Dumping', 'Input Capture'],
      'Discovery': ['Network Service Scanning', 'Network Share Discover', 'Process Discovery', 'Remote System Discovery'],
      'Lateral Movement': ['Distributed Component Object Model', 'Pass the Hash', 'Remote Desktop Protocol', 'Remote Services', 'Windows Admin Shares', 'Windows Remote Management'],
      'Collection': ['Data from Local System', 'Input Capture', 'Man in the Browser', 'Screen Capture'],
      'Command And Control': ['Commonly Used Port', 'Connection Proxy', 'Custom Command and Control Protocol'],
      'Multiband Communication': ['Standard Application Layer Protocol'],
      'Exfiltration': ['Scheduled Transfer'],
      'details': 'Cobalt Strike is a commercial, full-featured, penetration testing tool which bills itself as “adversary simulation software designed to execute targeted attacks and emulate the post-exploitation actions of advanced threat actors”. Cobalt Strike’s interactive post-exploit capabilities cover the full range of ATT&CK tactics, all executed within a single, integrated system.In addition to its own capabilities, Cobalt Strike leverages the capabilities of other well-known tools such as Metasploit and Mimikatz. ',
      'Color': 'matrix19'
  },
  'Cobian_RAT': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Credential Access': ['Input Capture'],
      'Collection': ['Audio Capture', 'Input Capture', 'Screen Capture', 'Video Capture'],
      'Command And Control': ['Data Obfuscation', 'Standard Application Layer Protocol'],
      'details': 'Cobian RAT is a backdoor, remote access tool that has been observed since 2016',
      'Color': 'matrix20'
  },
  'CoinTicker': {
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Masquerading', 'Modify Registry'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['Application Window Discovery', 'System Network Configuration Discovery'],
      'Collection': ['Clipboard Data', 'Data Staged', 'Input Capture', 'Screen Capture'],
      'details': 'CoinTicker is a malicious application that poses as a cryptocurrency price ticker and installs components of the open source backdoors EvilOSX and EggShell.',
      'Color': 'matrix21'
  },
  'ComRAT': {
      'Persistence': ['Component Object Model Hijacking'],
      'Defense Evasion': ['Component Object Model Hijacking'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'ComRAT is a remote access tool suspected of being a decedent of Agent.btz and used by Turla.',
      'Color': 'matrix22'
  },
  'Comnie': {
      'Execution': ['Rundll32', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Defense Evasion': ['Binary Padding', 'Obfuscated Files or Information', 'Rundll32', 'Scripting', 'Web Service'],
      'Discovery': ['Account Discovery', 'Process Discovery', 'Remote System Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Service Discovery'],
      'Collection': ['Automated Collection'],
      'Command And Control': ['Commonly Used Port', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol', 'Web Service'],
      'details': 'Comnie is a remote backdoor which has been used in attacks in East Asia.',
      'Color': 'matrix23'
  },
  'CosmicDuke': {
      'Execution': ['Scheduled Task'],
      'Persistence': ['vNew Service', 'Scheduled Task'],
      'Privilege Escalation': ['Exploitation for Privilege Escalation', 'New Service', 'Scheduled Task'],
      'Credential Access': ['Credential Dumping', 'Input Capture'],
      'Discovery': ['File and Directory Discovery'],
      'Collection': ['Clipboard Data', 'Data from Local System', 'Data from Network Shared Drive', 'Data from Removable Media', 'Email Collection', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Automated Exfiltration', 'Exfiltration Over Alternative Protocol'],
      'details': 'CosmicDuke is malware that was used by APT29 from 2010 to 2015.',
      'Color': 'matrix24'
  },
  'CozyCar': {
      'Execution': ['Command-Line Interface', 'Rundll32', 'Scheduled Task'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Privilege Escalation': ['New Service', 'Scheduled Task'],
      'Defense Evasion': ['Masquerading', 'Obfuscated Files or Information', 'Rundll32', 'Virtualization/Sanbox Evasion', ''],
      'Credential Access': ['Credential Dumping'],
      'Discovery': ['Security Software Discovery', 'System Information Discovery', 'Virtualization/Sanbox Evasion'],
      'Command And Control': ['Standard Application Layer Protocol', 'Web Service'],
      'details': 'CozyCar is malware that was used by APT29 from 2010 to 2015. It is a modular malware platform, and its backdoor component can be instructed to download and execute a variety of modules with different functionality.',
      'Color': 'matrix25'
  },
  'Crimson': {
      'Credential Access': ['Credential Dumping'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data from Removable Media', 'Email Collection', 'Screen Capture'],
      'Command And Control': ['Custom Command and Control Protocol', 'Remote File Copy', 'Standard Non-Application Layer Protocol'],
      'details': 'Crimson is malware used as part of a campaign known as Operation Transparent Tribe that targeted Indian diplomatic and military victims',
      'Color': 'matrix26'
  },
  'CrossRAT': {
      'Persistence': ['Launch Agent', 'Registry Run Keys / Startup Folder'],
      'Discovery': ['File and Directory Discovery'],
      'Collection': ['Screen Capture'],
      'details': 'CrossRAT is a cross platform RAT.',
      'Color': 'matrix27'
  },
  'DDKONG': {
      'Execution': ['Rundll32'],
      'Defense Evasion': ['Obfuscated Files or Information', 'Rundll32'],
      'Discovery': ['File and Directory Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Custom Command and Control Protocol', 'Remote File Copy'],
      'details': 'DDKONG is a malware sample that was part of a campaign by Rancor. DDKONG was first seen used in February 2017.',
      'Color': 'matrix28'
  },
  'DOGCALL': {
      'Defense Evasion': ['Obfuscated Files or Information', 'Web Service'],
      'Credential Access': ['Input Capture'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Audio Capture', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Web Service'],
      'details': 'DOGCALL is a backdoor used by APT37 that has been used to target South Korean government and military organizations in 2017. It is typically dropped using a Hangul Word Processor (HWP) exploit.',
      'Color': 'matrix29'
  },
  'DarkComet': {
      'Execution': ['Command-Line Interface', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Disabling Security Tools', 'Masquerading', 'Modify Registry', 'Scripting', 'Software Packing'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['Process Discovery', 'System Information Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote Desktop Protocol', 'Remote File Copy'],
      'collection': ['Audio Capture', 'Clipboard Data', 'Input Capture', 'Video Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'DarkComet is a Windows remote administration tool and backdoor.',
      'Color': 'matrix30'
  },
  'Daserf': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['Coding Signing', ',Credential Dumping', 'Input Capture'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'Command And Control': ['Data Encoding', 'Data Obfuscation', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Data Compressed', 'Data Encrypted'],
      'details': 'Daserf is a backdoor that has been used to spy on and steal from Japanese, South Korean, Russian, Singaporean, and Chinese victims. Researchers have identified versions written in both Visual C and Delphi.',
      'Color': 'matrix1'
  },
  'DealersChoice': {
      'Execution': ['Exploitation for Client Execution', 'Scripting'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'DealersChoice is a Flash exploitation framework used by APT28.',
      'Color': 'matrix2'
  },
  'Denis': {
      'Execution': ['Command-Line Interface', 'Scripting'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'DLL Side-Loading', 'File Deletion', 'Obfuscated Files or Information', 'Process Injection', 'Scripting'],
      'Discovery': ['File and Directory Discovery', 'Query Registry', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Compressed'],
      'details': 'Denis is a Windows backdoor and Trojan.',
      'Color': 'matrix3'
  },
  'Derusbi': {
      'Execution': ['Command-Line Interface', 'Regsvr32'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['File Deletion', 'Process Injection', 'Regsvr32', 'Timestomp'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery', 'System Owner/User Discovery'],
      'Collection': ['Audio Capture', 'Input Capture', 'Screen Capture', 'Video Capture'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol', 'Custom Cryptographic Protocol', 'Fallback Channels', 'Standard Non-Application Layer Protocol'],
      'details': 'Derusbi is malware used by multiple Chinese APT groups. [1] [2] Both Windows and Linux variants have been observed.',
      'Color': 'matrix4'
  },
  'Dipsind': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Winlogon Helper DLL'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Custom Command and Control Protocol', 'Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Scheduled Transfer'],
      'details': 'Dipsind is a malware family of backdoors that appear to be used exclusively by PLATINUM.',
      'Color': 'matrix5'
  },
  'Dok': {
      'Execution': ['AppleScript'],
      'Persistence': ['Launch Agent', 'Login Item'],
      'Defense Evasion': ['Install Root Certificate'],
      'Lateral Movement': ['AppleScript'],
      'Command And Control': ['Multi-hop Proxy'],
      'details': 'Dok steals banking information through man-in-the-middle ',
      'Color': 'matrix6'
  },
  'DownPaper': {
      'Execution': ['Command-Line Interface', 'PowerShell'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Discovery': ['Query Registry', 'System Information Discovery', 'System Owner/User Discovery'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'DownPaper is a backdoor Trojan; its main functionality is to download and run second stage malware.',
      'Color': 'matrix7'
  },
  'Downdelph': {
      'Persistence': ['DLL Search Order Hijacking'],
      'Privilege Escalation': ['Bypass User Account Control', 'DLL Search Order Hijacking'],
      'Defense Evasion': ['Bypass User Account Control', 'DLL Search Order Hijacking'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Data Obfuscation', 'Remote File Copy', 'Standard Cryptographic Protocol'],
      'details': 'Downdelph is a first-stage downloader written in Delphi that has been used by APT28 in rare instances between 2013 and 2015.',
      'Color': 'matrix8'
  },
  'Dridex': {
      'Defense Evasion': ['Connection Proxy'],
      'Collection': ['Man in the Browser'],
      'Command And Control': ['Connection Proxy', 'Remote Access Tools', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'Dridex is a banking Trojan that has been used for financial gain. Dridex was created from the source code of the Bugat banking trojan (also known as Cridex).',
      'Color': 'matrix19'
  },
  'dsquery': {
      'Discovery': ['Account Discovery', 'Domain Trust Discovery', 'Permission Groups Discovery'],
      'details': 'dsquery is a command-line utility that can be used to query Active Directory for information from a system within a domain. [1] It is typically installed only on Windows Server versions but can be installed on non-server variants through the Microsoft-provided Remote Server Administration Tools bundle.',
      'Color': 'matrix22'
  },
  'Duqu': {
      'Initial Access': ['Valid Accounts'],
      'Execution': ['Scheduled Task', 'Signed Binary Proxy Execution'],
      'Persistence': ['New Service', 'Scheduled Task', 'Valid Accounts'],
      'Privilege Escalation': ['Access Token Manipulation', 'New Service', 'Process Injection', 'Scheduled Task', 'Valid Accounts'],
      'Defense Evasion': ['Access Token Manipulation'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['Account Discovery', 'Application Window Discovery', 'Process Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery'],
      'Lateral Movement': ['Windows Admin Shares'],
      'Collection': ['Data Staged', 'Input Capture'],
      'Command And Control': ['Commonly Used Port', 'Connection Proxy', 'Custom Command and Control Protocol', 'Data Obfuscation', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Data Compressed', 'Data Encrypted'],
      'details': 'Duqu is a malware platform that uses a modular approach to extend functionality after deployment within a target network.',
      'Color': 'matrix9'
  },
  'DustySky': {
      'Initial Access': ['Replication Through Removable Media'],
      'Execution': ['Windows Management Instrumentation'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Obfuscated Files or Information'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Security Software Discovery', 'System Information Discovery'],
      'Lateral Movement': ['Remote File Copy', 'Replication Through Removable Media'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Fallback Channels', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'DustySky is multi-stage malware written in .NET that has been used by Molerats since May 2015. ',
      'Color': 'matrix10'
  },
  'Dyre': {
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service', 'Process Injection'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Process Injection', 'Virtualization/Sandbox Evasion'],
      'Discovery': ['Virtualization/Sandbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Dyre is a Trojan that has been used for financial gain. ',
      'Color': 'matrix11'
  },
  'ELMER': {
      'Discovery': ['File and Directory Discovery', 'Process Discovery'],
      'Command And Control': ['Commonly Used Port', 'Standard Application Layer Protocol'],
      'details': 'ELMER is a non-persistent, proxy-aware HTTP backdoor written in Delphi that has been used by APT16.',
      'Color': 'matrix12'
  },
  'Ebury': {
      'Defense Evasion': ['Code Signing', 'Disabling Security Tools', 'Obfuscated Files or Information'],
      'Credential Access': ['Private Keys'],
      'Lateral Movement': ['SSH Hijacking'],
      'Command And Control': ['Commonly Used Port', 'Custom Cryptographic Protocol', 'Data Encoding', 'Domain Generation Algorithms', 'Standard Application Layer Protocol'],
      'details': 'Ebury is an SSH backdoor targeting Linux operating systems. Attackers require root-level access, which allows them to replace SSH binaries (ssh, sshd, ssh-add, etc) or modify a shared library used by OpenSSH (libkeyutils)',
      'Color': 'matrix13'
  },
  'Elise': {
      'Execution': ['Rundll32'],
      'Persistence': ['New Service', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['New Service', 'Process Injection'],
      'Defense Evasion': ['File Deletion', 'Masquerading', 'Obfuscated Files or Information', 'Process Injection', 'Rundll32', 'Timestomp'],
      'Discovery': ['Account Discovery', 'File and Directory Discovery', 'Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Service Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data Staged'],
      'Command And Control': ['Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'Elise is a custom backdoor Trojan that appears to be used exclusively by Lotus Blossom. It is part of a larger group of tools referred to as LStudio, ST Group, and APT0LSTU.',
      'Color': 'matrix14'
  },
  'Emissary': {
      'Execution': ['Command-Line Interface', 'Rundll32'],
      'Persistence': ['New Service', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['New Service', 'Process Injection'],
      'Defense Evasion': ['Binary Padding', 'Obfuscated Files or Information', 'Process Injection', 'Rundll32'],
      'Discovery': ['Permission Groups Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Service Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Emissary is a Trojan that has been used by Lotus Blossom. It shares code with Elise, with both Trojans being part of a malware group referred to as LStudio.',
      'Color': 'matrix15'
  },
  'Emotet': {
      'Initial Access': ['Spearphishing Attachment', 'Spearphishing Link', 'Valid Accounts'],
      'Execution': ['Command-Line Interface', 'PowerShell', 'Scheduled Task', 'Scripting', 'User Execution'],
      'Persistence': ['New Service', 'Registry Run Keys / Startup Folder', 'Scheduled Task', 'Valid Accounts'],
      'Privilege Escalation': ['New Service', 'Process Injection', 'Scheduled Task', 'Valid Accounts'],
      'Defense Evasion': ['Obfuscated Files or Information', 'Process Injection', 'Scripting', 'Software Packing', 'Valid Accounts'],
      'Credential Access': ['Brute Force', 'Credential Dumping', 'Credentials in Files', 'Network Sniffing'],
      'Discovery': ['Network Sniffing', 'Process Discovery'],
      'Lateral Movement': ['Exploitation of Remote Services', 'Windows Admin Shares'],
      'Collection': ['Email Collection'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol', 'Standard Cryptographic Protocol', 'Uncommonly Used Port'],
      'Exfiltration': ['Data Encrypted', 'Exfiltration Over Command and Control Channel'],
      'details': 'Emotet is a modular malware variant which is primarily used as a downloader for other malware variants such as TrickBot and IcedID. Emotet first emerged in June 2014 and has been primarily used to target the banking sector.',
      'Color': 'matrix16'
  },
  'Empire': {
      'Execution': ['Command-Line Interface', 'Execution through API', 'PowerShell', 'Scheduled Task', 'Scripting', 'Service Execution', 'Trusted Developer Utilities', 'Windows Management Instrumentation'],
      'Persistence': ['Accessibility Features', 'Create Account', 'DLL Search Order Hijacking', 'Hooking', 'Modify Existing Service', 'Path Interception', 'Registry Run Keys / Startup Folder', 'Scheduled Task', 'Security Support Provider', 'Shortcut Modification'],
      'Privilege Escalation': ['Access Token Manipulation', 'Accessibility Features', 'Bypass User Account Control', 'DLL Search Order Hijacking', 'Exploitation for Privilege Escalation', 'Hooking', 'Path Interception', 'Process Injection', 'Scheduled Task', 'SID-History Injection'],
      'Defense Evasion': ['Access Token Manipulation', 'Bypass User Account Control', 'DLL Search Order Hijacking', 'Group Policy Modification', 'Obfuscated Files or Information', 'Process Injection', 'Scripting', 'Timestomp', 'Trusted Developer Utilities', 'Web Service'],
      'Credential Access': ['Credential Dumping', 'Credentials in Files', 'Hooking', 'Input Capture', 'Kerberoasting', 'LLMNR/NBT-NS Poisoning', 'Network Sniffing', 'Private Keys'],
      'Discovery': ['Account Discovery', 'Browser Bookmark Discovery', 'File and Directory Discovery', 'Network Service Scanning', 'Network Share Discovery', 'Network Sniffing', 'Process Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery'],
      'Lateral Movement': ['Distributed Component Object Model', 'Exploitation of Remote Services', 'Pass the Hash', 'Pass the Ticket', 'Remote File Copy', 'Remote Services'],
      'Collection': ['Clipboard Data', 'Email Collection', 'Input Capture', 'Screen Capture', 'Video Capture'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol', 'Web Service'],
      'Exfiltration': ['Data Compressed', 'Exfiltration Over Alternative Protocol', 'Exfiltration Over Command and Control Channel'],
      'details': 'Empire is an open source, cross-platform remote administration and post-exploitation framework that is publicly available on GitHub. While the tool itself is primarily written in Python, the post-exploitation agents are written in pure PowerShell for Windows and Python for Linux/macOS. Empire was one of five tools singled out by a joint report on public hacking tools being widely used by adversaries.',
      'Color': 'matrix17'
  },
  'Epic': {
      'Defense Evasion': ['Code Signing', 'File Deletion', 'Obfuscated Files or Information'],
      'Discovery': ['Account Discovery', 'File and Directory Discovery', 'Permission Groups Discovery', 'Process Discovery', 'Query Registry', 'Remote System Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery', 'System Service Discovery', 'System Time Discovery'],
      'Command And Control': ['Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Data Compressed', 'Data Encrypted'],
      'details': 'Epic is a backdoor that has been used by Turla.',
      'Color': 'matrix18'
  },
  'esentutl': {
      'Defense Evasion': ['NTFS File Attributes'],
      'Credential Access': ['Credential Dumping'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'details': 'esentutl is a command-line tool that provides database utilities for the Windows Extensible Storage Engine.',
      'Color': 'matrix7'
  },
  'EvilBunny': {
      'Execution': ['Exploitation for Client Execution', 'Scheduled Task', 'Scripting', 'Windows Management Instrumentation'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['File Deletion', 'Scripting', 'Virtualization/Sandbox Evasion'],
      'Discovery': ['Process Discovery', 'Security Software Discovery', 'System Time Discovery', 'Virtualization/Sandbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'EvilBunny is a C++ malware sample observed since 2011 that was designed to be a execution platform for Lua scripts',
      'Color': 'matrix8'
  },
  'EvilGrab': {
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Credential Access': ['Input Capture'],
      'Collection': ['Audio Capture', 'Input Capture', 'Screen Capture', 'Video Capture'],
      'Command And Control': ['Commonly Used Port'],
      'details': 'EvilGrab is a malware family with common reconnaissance capabilities. It has been deployed by menuPass via malicious Microsoft Office documents as part of spearphishing campaigns.',
      'Color': 'matrix19'
  },
  'Exaramel for Linux': {
      'Execution': ['Command-Line Interface', 'Local Job Scheduling'],
      'Persistence': ['Local Job Scheduling', 'Systemd Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Obfuscated Files or Information'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Exaramel for Linux is a backdoor written in the Go Programming Language and compiled as a 64-bit ELF binary. The Windows version is tracked separately under Exaramel for Windows.',
      'Color': 'matrix20'
  },
  'Exaramel for Windows': {
      'Execution': ['Command-Line Interface', 'Scripting'],
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Masquerading', 'Modify Registry', 'Scripting'],
      'Collection': ['Data Staged'],
      'Exfiltration': ['Data Encrypted', 'Data Compressed'],
      'details': 'Exaramel for Windows is a backdoor used for targeting Windows systems. The Linux version is tracked separately under Exaramel for Linux.',
      'Color': 'matrix2'
  },
  'Expand': {
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'NTFS File Attributes'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'details': 'Expand is a Windows utility used to expand one or more compressed CAB files.[1] It has been used by BBSRAT to decompress a CAB file into executable content.',
      'Color': 'matrix21'
  },
  'FALLCHILL': {
      'Defense Evasion': ['File Deletion', 'Timestomp'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery', 'System Network Configuration Discovery'],
      'Command And Control': ['Custom Cryptographic Protocol'],
      'details': 'FALLCHILL is a RAT that has been used by Lazarus Group since at least 2016 to target the aerospace, telecommunications, and finance industries. It is usually dropped by other Lazarus Group malware or delivered when a victim unknowingly visits a compromised website.',
      'Color': 'matrix22'
  },
  'FELIXROOT': {
      'Execution': ['Command-Line Interface', 'Rundll32', 'Scripting', 'Windows Management Instrumentation'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Defense Evasion': ['File Deletion', 'Modify Registry', 'Obfuscated Files or Information', 'Rundll32', 'Scripting'],
      'Discovery': ['Process Discovery', 'Query Registry', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'FELIXROOT is a backdoor that has been used to target Ukrainian victims.',
      'Color': 'matrix23'
  },
  'FLASHFLOOD': {
      'Persistence': ['Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Discovery': ['File and Directory Discovery'],
      'Collection': ['Data from Local System', 'Data from Removable Media', 'Data Staged'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'FLASHFLOOD is malware developed by APT30 that allows propagation and exfiltration of data over removable devices. APT30 may use this capability to exfiltrate data across air-gaps.',
      'Color': 'matrix24'
  },
  'FlawedAmmyy': {
      'Execution': ['Windows Management Instrumentation'],
      'Discovery': ['Peripheral Device Discovery', 'Permission Groups Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Owner/User Discovery'],
      'Command And Control': ['Commonly Used Port', 'Data Obfuscation', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'FlawedAmmyy is a remote access tool (RAT) that was first seen in early 2016. The code for FlawedAmmyy was based on leaked source code for a version of Ammyy Admin, a remote access software.',
      'Color': 'matrix3'
  },
  'FlawedGrace': {
      'Defense Evasion': ['Obfuscated Files or Information'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol'],
      'details': 'FELIXROOT is a backdoor that has been used to target Ukrainian victims.',
      'Color': 'matrix4'
  },
  'FLIPSIDE': {
      'Command And Control': ['Connection Proxy', 'Standard Application Layer Protocol'],
      'details': 'FLIPSIDE is a simple tool similar to Plink that is used by FIN5 to maintain access to victims.',
      'Color': 'matrix25'
  },
  'FTP': {
      'Command And Control': ['Commonly Used Port'],
      'Exfiltration': ['Exfiltration Over Alternative Protocol'],
      'details': 'FTP is a utility commonly available with operating systems to transfer information over the File Transfer Protocol FTP. Adversaries can use it to transfer other tools onto a system or to exfiltrate data.',
      'Color': 'matrix26'
  },
  'FakeM': {
      'Credential Access': ['Input Capture'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Data Obfuscation', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'FakeM is a shellcode-based Windows backdoor that has been used by Scarlet Mimic.',
      'Color': 'matrix27'
  },
  'Felismus': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['Masquerading'],
      'Discovery': ['Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'Felismus is a modular backdoor that has been used by Sowbug.',
      'Color': 'matrix28'
  },
  'Fgdump': {
      'Credential Access': ['Credential Dumping'],
      'details': 'Fgdump is a Windows password hash dumper.',
      'Color': 'matrix29'
  },
  'FinFisher': {
      'Persistence': ['Bootkit', 'DLL Search Order Hijacking', 'Hooking', 'New Service', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Access Token Manipulation', 'Bypass User Account Control', 'DLL Search Order Hijacking', 'Hooking', 'New Service', 'Process Injection'],
      'Defense Evasion': ['Access Token Manipulation', 'Binary Padding', 'Bypass User Account Control', 'Deobfuscate/Decode Files or Information', 'DLL Search Order Hijacking', 'DLL Side-Loading', 'Indicator Removal on Host', 'Masquerading', 'Obfuscated Files or Information', 'Process Injection', 'Software Packing', 'Virtualization/Sanbox Evasion'],
      'Credential Access': ['Hooking'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'Security Software Discovery', 'System Information Discovery', 'Security Software Discovery', 'System Information Discovery', 'Virtualization/Sandbox Evasion'],
      'Collection': ['Screen Capture'],
      'details': 'FinFisher is a government-grade commercial surveillance spyware reportedly sold exclusively to government agencies for use in targeted and lawful criminal investigations. It is heavily obfuscated and uses multiple anti-analysis techniques. It has other variants including Wingbird.',
      'Color': 'matrix30'
  },
  'Final1stspy': {
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Obfuscated Files or Information'],
      'Discovery': ['Process Discovery', 'System Information Discovery'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'Final1stspy is a dropper family that has been used to deliver DOGCALL.',
      'Color': 'matrix1'
  },
  'Flame': {
      'Initial Access': ['Replication Through Removable Media'],
      'Execution': ['Rundll32'],
      'Persistence': ['Authentication Package', 'Create Account'],
      'Defense Evasion': ['Rundll32'],
      'Discovery': ['Security Software Discovery'],
      'Lateral Movement': ['Exploitation of Remote Services', 'Replication Through Removable Media'],
      'Collection': ['Audio Capture', 'Screen Capture'],
      'Exfiltration': ['Exfiltration Over Other Network Medium'],
      'details': 'Flame is a sophisticated toolkit that has been used to collect information since at least 2010, largely targeting Middle East countries.',
      'Color': 'matrix2'
  },
  'Forfiles': {
      'Defense Evasion': ['Indirect Command Execution'],
      'Discovery': ['File and Directory Discovery'],
      'Collection': ['Data from Local System'],
      'details': 'Forfiles is a Windows utility commonly used in batch jobs to execute commands on one or more selected files or directories (ex: list all directories in a drive, read the first line of all files created yesterday, etc.). Forfiles can be executed from either the command line, Run window, or batch files/scripts.',
      'Color': 'matrix3'
  },
  'FruitFly': {
      'Persistence': ['Hidden Files and Directories', 'Launch Agent'],
      'Defense Evasion': ['File Deletion', 'Hidden Files and Directories', 'Obfuscated Files or Information'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery'],
      'Collection': ['Screen Capture'],
      'details': 'FruitFly is designed to spy on mac users',
      'Color': 'matrix4'
  },
  'Fysbis': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Systemd Service'],
      'Defense Evasion': ['File Deletion', 'Masquerading', 'Obfuscated Files or Information'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Information Discovery'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Commonly Used Port', 'Data Encoding'],
      'details': 'Fysbis is a Linux-based backdoor used by APT28 that dates back to at least 2014.',
      'Color': 'matrix12'
  },
  'GLOOXMAIL': {
      'Persistence': ['Hidden Files and Directories', 'Launch Agent'],
      'Defense Evasion': ['File Deletion', 'Hidden Files and Directories', 'Obfuscated Files or Information', 'Web Service'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Web Service'],
      'details': 'GLOOXMAIL is malware used by APT1 that mimics legitimate Jabber/XMPP traffic.',
      'Color': 'matrix5'
  },
  'Gazer': {
      'Execution': ['Scheduled Task'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task', 'Screensaver', 'Shortcut Modification', 'Winlogon Helper DLL'],
      'Privilege Escalation': ['Process Injection', 'Scheduled Task'],
      'Defense Evasion': ['Code Signing', 'File Deletion', 'NTFS File Attributes', 'Obfuscated Files or Information', 'Process Injection', 'Timestomp'],
      'Discovery': ['System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Connection Proxy', 'Custom Cryptographic Protocol', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Gazer is a backdoor used by Turla since at least 2016.',
      'Color': 'matrix6'
  },
  'GeminiDuke': {
      'Discovery': ['Account Discovery', 'File and Directory Discovery', 'Process Discovery', 'System Network Configuration Discovery', 'System Service Discovery'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'GeminiDuke is malware that was used by APT29 from 2009 to 2012.',
      'Color': 'matrix7'
  },
  'gh0st RAT': {
      'Execution': ['Command-Line Interface', 'Rundl32'],
      'Persistence': ['New Service', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['DLL Side-Loading', 'File Deletion', 'Indicator Removal on Host', 'Rundl32'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['Process Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy', 'Standard Cryptographic Protocol'],
      'details': 'gh0st RAT is a remote access tool (RAT). The source code is public and it has been used by multiple groups.',
      'Color': 'matrix17'
  },
  'Gold_Dragon': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Disabling Security Tools', 'File Deletion'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'Security Software Discovery', 'System Information Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data Staged'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'Gold Dragon is a Korean-language, data gathering implant that was first observed in the wild in South Korea in July 2017. Gold Dragon was used along with Brave Prince and RunningRAT in operations targeting organizations associated with the 2018 Pyeongchang Winter Olympics.',
      'Color': 'matrix8'
  },
  'GravityRAT': {
      'Execution': ['Command-Line Interface', 'Dynamic Data Exchange', 'Scheduled Task', 'Windows Management Instrumentation'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['Indicator Removal from Tools', 'Obfuscated Files or Information', 'Virtualization/Sandbox Evasion'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery', 'System Service Discovery', 'System Time Discovery', 'Virtualization/Sandbox Evasion'],
      'Collection': ['Data from Local System', 'Data from Removable Media'],
      'Command And Control': ['Standard Application Layer Protocol', 'Uncommonly Used Port'],
      'details': 'GravityRAT is a remote access tool (RAT) and has been in ongoing development since 2016. The actor behind the tool remains unknown, but two usernames have been recovered that link to the author, which are "TheMartian" and "The Invincible." According to the National Computer Emergency Response Team (CERT) of India, the malware has been identified in attacks against organization and entities in India.',
      'Color': 'matrix9'
  },
  'GreyEnergy': {
      'Execution': ['Command-Line Interface', 'Rundll32'],
      'Persistence': ['Modify Existing Service'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Code Signing', 'File Deletion', 'Modify Registry', 'Obfuscated Files or Information', 'Process Injection', 'Rundll32', 'Software Packing'],
      'Credential Access': ['Credential Dumping', 'Input Capture'],
      'Discovery': ['System Service Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Multi-hop Proxy', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'GreyEnergy is a backdoor written in C and compiled in Visual Studio. GreyEnergy shares similarities with the BlackEnergy malware and is thought to be the successor of it.',
      'Color': 'matrix10'
  },
  'GRIFFON': {
      'Execution': ['PowerShell', 'Scheduled Task'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Discovery': ['Permission Groups Discovery', 'System Information Discovery', 'System Time Discovery'],
      'Collection': ['Screen Capture'],
      'details': 'GRIFFON is a JavaScript backdoor used by FIN7.',
      'Color': 'matrix1'
  },
  'gsecdump': {
      'Credential Access': ['Credential Dumping'],
      'details': 'gsecdump is a publicly-available credential dumper used to obtain password hashes and LSA secrets from Windows operating systems.',
      'Color': 'matrix21'
  },
  'H1N1': {
      'Initial Access': ['Replication Through Removable Media'],
      'Execution': ['Command-Line Interface'],
      'Privilege Escalation': ['Bypass User Account Control'],
      'Defense Evasion': ['Bypass User Account Control', 'Disabling Security Tools', 'Obfuscated Files or Information', 'Software Packing'],
      'Credential Access': ['Credential Dumping'],
      'Lateral Movement': ['Remote File Copy', 'Replication Through Removable Media', 'Taint Shared Content'],
      'Command And Control': ['Data Obfuscation', 'Remote File Copy', 'Standard Cryptographic Protocol'],
      'Impact': ['Inhibit System Recovery'],
      'details': 'H1N1 is a malware variant that has been distributed via a campaign using VBA macros to infect victims. Although it initially had only loader capabilities, it has evolved to include information-stealing functionality.',
      'Color': 'matrix12'
  },
  'HALFBAKED': {
      'Execution': ['PowerShell', 'Windows Management Instrumentation'],
      'Defense Evasion': ['File Deletion'],
      'Discovery': ['Process Discovery', 'System Information Discovery'],
      'Collection': ['Screen Capture'],
      'details': 'HALFBAKED is a malware family consisting of multiple components intended to establish persistence in victim networks.',
      'Color': 'matrix13'
  },
  'HAMMERTOSS': {
      'Execution': ['PowerShell'],
      'Defense Evasion': ['Web Service'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Data Obfuscation', 'Standard Application Layer Protocol', 'Web Service'],
      'Exfiltration': ['Exfiltration Over Alternative Protocol'],
      'details': 'HAMMERTOSS is a backdoor that was used by APT29 in 2015.',
      'Color': 'matrix14'
  },
  'HAPPYWORK': {
      'Discovery': ['System Information Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'details': 'HAPPYWORK is a downloader used by APT37 to target South Korean government and financial victims in November 2016.',
      'Color': 'matrix15'
  },

  'HARDRAIN': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['Disabling Security Tools'],
      'Command And Control': ['Commonly Used Port', 'Connection Proxy', 'Custom Cryptographic Protocol'],
      'details': 'HARDRAIN is a Trojan malware variant reportedly used by the North Korean government.',
      'Color': 'matrix16'
  },
  'HAWKBALL': {
      'Execution': ['Command-Line Interface', 'Dynamic Data Exchange', 'Execution through API', 'Exploitation for Client Execution'],
      'Defense Evasion': ['File Deletion', 'Obfuscated Files or Information', 'Virtualization/Sandbox Evasion'],
      'Discovery': ['System Information Discovery', 'System Owner/User Discovery', 'Virtualization/Sandbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Encrypted', 'Exfiltration Over Command and Control Channel'],
      'details': 'HAWKBALL is a backdoor that was observed in targeting of the government sector in Central Asia.',
      'Color': 'matrix12'
  },
  'hcdLoader': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'details': 'hcdLoader is a remote access tool (RAT) that has been used by APT18.',
      'Color': 'matrix6'
  },
  'HDoor': {
      'Defense Evasion': ['Disabling Security Tools'],
      'Discovery': ['Network Service Scanning'],
      'details': 'HDoor is malware that has been customized and used by the Naikon group.',
      'Color': 'matrix17'
  },
  'HIDEDRV': {
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Process Injection', 'Rootkit'],
      'details': 'HIDEDRV is a rootkit used by APT28. It has been deployed along with Downdelph to execute and hide that malware.',
      'Color': 'matrix18'
  },
  'HOMEFRY': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['Obfuscated Files or Information'],
      'Credential Access': ['Credential Dumping'],
      'details': 'HOMEFRY is a 64-bit Windows password dumper/cracker that has previously been used in conjunction with other Leviathan backdoors.',
      'Color': 'matrix19'
  },
  'HOPLIGHT': {
      'Execution': ['Command-Line Interface', 'Service Execution', 'Windows Management Instrumentation'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Disabling Security Tools', 'Modify Registry', 'Process Injection'],
      'Credential Access': ['Credential Dumping'],
      'Discovery': ['File and Directory Discovery', 'Query Registry', 'System Information Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Pass the Hash', 'Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Connection Proxy', 'Data Obfuscation', 'Fallback Channels', 'Remote File Copy', 'Uncommonly Used Port'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'details': 'HOPLIGHT is a backdoor Trojan that has reportedly been used by the North Korean government.',
      'Color': 'matrix20'
  },
  'HTRAN': {
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Process Injection', 'Rootkit'],
      'Command And Control': ['Connection Proxy'],
      'details': 'HTRAN is a tool that proxies connections through intermediate hops and aids users in disguising their true geographical location. It can be used by adversaries to hide their location when interacting with the victim networks.',
      'Color': 'matrix21'
  },
  'HTTPBrowser': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['DLL Search Order Hijacking', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['DLL Search Order Hijacking'],
      'Defense Evasion': ['DLL Search Order Hijacking', 'DLL Side-Loading', 'File Deletion', 'Masquerading', 'Obfuscated Files or Information'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'HTTPBrowser is malware that has been used by several threat groups. It is believed to be of Chinese origin.',
      'Color': 'matrix22'
  },
  'Hacking_Team': {
      'Persistence': ['System Firmware'],
      'Defense Evasion': ['Rootkit'],
      'details': 'Hacking Team UEFI Rootkit is a rootkit developed by the company Hacking Team as a method of persistence for remote access software.',
      'Color': 'matrix23'
  },
  'Havij': {
      'Initial Access': ['Exploit Public-Facing Application'],
      'details': 'Havij is an automatic SQL Injection tool distributed by the Iranian ITSecTeam security company. Havij has been used by penetration testers and adversaries.',
      'Color': 'matrix24'
  },
  'Helminth': {
      'Execution': ['Command-Line Interface', 'PowerShell', 'Scheduled Task', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task', 'Shortcut Modification'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['Code Signing', 'Obfuscated Files or Information', 'Scripting'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['Permission Groups Discovery', 'Process Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Automated Collection', 'Clipboard Data', 'Data Staged', 'Input Capture'],
      'Command And Control': ['Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Data Transfer Size Limits'],
      'details': 'Helminth is a backdoor that has at least two variants - one written in VBScript and PowerShell that is delivered via a macros in Excel spreadsheets, and one that is a standalone Windows executable.',
      'Color': 'matrix25'
  },
  'Hi_Zor': {
      'Execution': ['Command-Line Interface', 'Regsvr32'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['File Deletion', 'Obfuscated Files or Information', 'Regsvr32'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Multilayer Encryption', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Hi-Zor is a remote access tool (RAT) that has characteristics similar to Sakula. It was used in a campaign named INOCNATION.',
      'Color': 'matrix26'
  },
  'Hikit': {
      'Command And Control': ['Connection Proxy', 'Custom Cryptographic Protocol'],
      'details': 'Hikit is malware that has been used by Axiom for late-stage persistence and exfiltration after the initial compromise.',
      'Color': 'matrix27'
  },
  'httpclient': {
      'Execution': ['Command-Line Interface'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Standard Application Layer Protocol'],
      'details': 'httpclient is malware used by Putter Panda. It is a simple tool that provides a limited range of functionality, suggesting it is likely used as a second-stage or supplementary/backup tool.',
      'Color': 'matrix6'
  },
  'Hydraq': {
      'Execution': ['Execution through Module Load', 'Service Execution'],
      'Persistence': ['New Service'],
      'Privilege Escalation': ['Access Token Manipulation', 'New Service'],
      'Defense Evasion': ['Access Token Manipulation', 'File Deletion', 'Indicator Removal on Host', 'Modify Registry', 'Obfuscated Files or Information'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery', 'System Network Configuration Discovery', 'System Service Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data from Local System', 'Screen Capture'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Remote File Copy'],
      'Exfiltration': ['Exfiltration Over Alternative Protocol'],
      'details': 'Hydraq is a data-theft trojan first used by Elderwood in the 2009 Google intrusion known as Operation Aurora, though variations of this trojan have been used in more recent campaigns by other Chinese actors, possibly including APT17.',
      'Color': 'matrix28'
  },
  'HyperBro': {
      'Execution': ['Execution through API', 'Service Execution'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['DLL Side-Loading', 'File Deletion', 'Process Injection'],
      'Discovery': ['System Service Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'HyperBro is a custom in-memory backdoor used by Threat Group-3390.',
      'Color': 'matrix8'
  },
  'iKitten': {
      'Persistence': ['Hidden Files and Directories', 'Rc.common'],
      'Defense Evasion': ['Hidden Files and Directories'],
      'Credential Access': ['Input Prompt', 'Keychain'],
      'Discovery': ['Process Discovery', 'System Network Configuration Discovery'],
      'Exfiltration': ['Data Compressed'],
      'details': 'iKitten is a macOS exfiltration agent.',
      'Color': 'matrix28'
  },
  'ifconfig': {
      'Discovery': ['System Network Configuration Discovery'],
      'details': 'ifconfig is a Unix-based utility used to gather information about and interact with the TCP/IP settings on a system.',
      'Color': 'matrix8'
  },
  'ipconfig': {
      'Discovery': ['System Network Configuration Discovery'],
      'details': 'ipconfig is a Windows utility that can be used to find information about a system\'s TCP/IP, DNS, DHCP, and adapter configuration. ',
      'Color': 'matrix18'
  },
  'ISMInjector': {
      'Execution': ['Scheduled Task'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Obfuscated Files or Information', 'Process Hollowing'],
      'details': 'ISMInjector is a Trojan used to install another OilRig backdoor, ISMAgent.',
      'Color': 'matrix29'
  },
  'Impacket': {
      'Execution': ['Service Execution', 'Windows Management Instrumentation'],
      'Credential Access': ['Credential Dumping', 'Kerberoasting', 'LLMNR/NBT-NS Poisoning and Relay', 'Network Sniffing'],
      'Discovery': ['Network Sniffing'],
      'details': 'Impacket is an open source collection of modules written in Python for programmatically constructing and manipulating network protocols. Impacket contains several tools for remote service execution, Kerberos manipulation, Windows credential dumping, packet sniffing, and relay attacks.',
      'Color': 'matrix30'
  },
  'InnaputRAT': {
      'Execution': ['Command-Line Interface', 'Execution through API'],
      'Persistence': ['New Service', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['File Deletion', 'Masquerading', 'Obfuscated Files or Information'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery'],
      'details': 'InnaputRAT is a remote access tool that can exfiltrate files from a victim’s machine. InnaputRAT has been seen out in the wild since 2016.',
      'Color': 'matrix1'
  },
  'InvisiMole': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['DLL Search Order Hijacking'],
      'Privilege Escalation': ['Bypass User Account Control', 'DLL Search Order Hijacking'],
      'Defense Evasion': ['Bypass User Account Control', 'Deobfuscate/Decode Files or Information', 'Disabling Security Tools', 'DLL Search Order Hijacking', 'File Deletion', 'Masquerading', 'Modify Registry', 'Obfuscated Files or Information', 'Timestomp'],
      'Discovery': ['Account Discovery', 'File and Directory Discovery', 'Network Share Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery', 'System Service Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Audio Capture', 'Automated Collection', 'Data Staged', 'Screen Capture', 'Video Capture'],
      'Command And Control': ['Commonly Used Port', 'Connection Proxy', 'Custom Command and Control Protocol', 'Custom Cryptographic Protocol', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Compressed', 'Data Encrypted'],
      'details': 'InvisiMole is a modular spyware program that has been used by threat actors since at least 2013. InvisiMole has two backdoor modules called RC2FM and RC2CL that are used to perform post-exploitation activities. It has been discovered on compromised victims in the Ukraine and Russia.',
      'Color': 'matrix2'
  },
  'Invoke_PSImage': {
      'Defense Evasion': ['Obfuscated Files or Information'],
      'details': 'Invoke-PSImage takes a PowerShell script and embeds the bytes of the script into the pixels of a PNG image. It generates a one liner for executing either from a file of from the web. Example of usage is embedding the PowerShell code from the Invoke-Mimikatz module and embed it into an image file. By calling the image file from a macro for example, the macro will download the picture and execute the PowerShell code, which in this case will dump the passwords.',
      'Color': 'matrix3'
  },
  'Ixeshe': {
      'Command And Control': ['Data Obfuscation'],
      'details': 'Ixeshe is a malware family that has been used since 2009 to attack targets in East Asia.',
      'Color': 'matrix4'
  },
  'JHUHUGIT': {
      'Execution': ['Rundll32', 'Scheduled Task', 'Scripting'],
      'Persistence': ['Component Object Model Hijacking', 'Logon Scripts', 'New Service', 'Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Privilege Escalation': ['Exploitation for Privilege Escalation', 'New Service', 'Process Injection', 'Scheduled Task'],
      'Defense Evasion': ['Component Object Model Hijacking', 'File Deletion', 'Obfuscated Files or Information', 'Process Injection', 'Rundll32', 'Scripting'],
      'Discovery': ['Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Logon Scripts', 'Remote File Copy'],
      'Collection': ['Clipboard Data', 'Screen Capture'],
      'Command And Control': ['Data Encoding', 'Fallback Channels', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'JHUHUGIT is malware used by APT28. It is based on Carberp source code and serves as reconnaissance malware.',
      'Color': 'matrix5'
  },
  'JPIN': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['BITS Jobs'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['BITS Jobs', 'Disabling Security Tools', 'File Deletion', 'File Permissions Modification', 'Obfuscated Files or Information', 'Process Injection'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Permission Groups Discovery', 'Process Discovery', 'Query Registry', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery', 'System Service Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'JPIN is a custom-built backdoor family used by PLATINUM. Evidence suggests developers of JPIN and Dipsind code bases were related in some way.',
      'Color': 'matrix6'
  },
  'Janicab': {
      'Execution': ['Local Job Scheduling'],
      'Persistence': ['Local Job Scheduling'],
      'Defense Evasion': ['Code Signing'],
      'Collection': ['Audio Capture', 'Screen Capture'],
      'details': 'Janicab is an OS X trojan that relied on a valid developer ID and oblivious users to install it.',
      'Color': 'matrix7'
  },
  'KARAE': {
      'Initial Access': ['Drive-by Compromise'],
      'Defense Evasion': ['Web Service'],
      'Discovery': ['System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Web Service'],
      'details': 'KARAE is a backdoor typically used by APT37 as first-stage malware.',
      'Color': 'matrix8'
  },
  'KEYMARBLE': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['File Deletion', 'Modify Registry'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Commonly Used Port', 'Custom Cryptographic Protocol', 'Remote File Copy'],
      'details': 'KEYMARBLE is a Trojan that has reportedly been used by the North Korean government.',
      'Color': 'matrix9'
  },
  'KOMPROGO': {
      'Execution': ['Command-Line Interface', 'Windows Management Instrumentation'],
      'Discovery': ['System Information Discovery'],
      'details': 'KOMPROGO is a signature backdoor used by APT32 that is capable of process, file, and registry management.',
      'Color': 'matrix10'
  },
  'KONNI': {
      'Execution': ['Command-Line Interface', 'PowerShell'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Defense Evasion': ['File Deletion', 'Masquerading'],
      'Credential Access': ['Credential Dumping', 'Credentials in Files', 'Input Capture'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Clipboard Data', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'KONNI is a Windows remote administration too that has been seen in use since 2014 and evolved in its capabilities through at least 2017. KONNI has been linked to several campaigns involving North Korean themes.[1] KONNI has significant code overlap with the NOKKI malware family. There is some evidence potentially linking KONNI to APT37.',
      'Color': 'matrix11'
  },
  'Kasidet': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Disabling Security Tools'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'Command And Control': ['Remote File Copy'],
      'details': 'Kasidet is a backdoor that has been dropped by using malicious VBA macros.',
      'Color': 'matrix12'
  },
  'Kazuar': {
      'Execution': ['Command-Line Interface', 'Windows Management Instrumentation'],
      'Persistence': ['New Service', 'Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Privilege Escalation': ['New Service', 'Process Injection'],
      'Defense Evasion': ['File Deletion', 'Obfuscated Files or Information', 'Process Injection', 'Web Service'],
      'Discovery': ['Account Discovery', 'Application Window Discovery', 'File and Directory Discovery', 'Permission Groups Discovery', 'Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data from Local System', 'Data Staged', 'Screen Capture', 'Video Capture'],
      'Command And Control': ['Data Encoding', 'Fallback Channels', 'Remote File Copy', 'Standard Application Layer Protocol', 'Web Service'],
      'Exfiltration': ['Scheduled Transfer'],
      'Impact': ['Data Destruction'],
      'details': 'Kazuar is a fully featured, multi-platform backdoor Trojan written using the Microsoft .NET framework.',
      'Color': 'matrix13'
  },
  'Keydnap': {
      'Execution': ['Scripting', 'Space after Filename'],
      'Persistence': ['Launch Agent', 'Setuid and Setgid'],
      'Privilege Escalation': ['Setuid and Setgid'],
      'Defense Evasion': ['Scripting', 'Space after Filename'],
      'Credential Access': ['Input Prompt', 'Securityd Memory'],
      'Command And Control': ['Multi-hop Proxy', 'Standard Application Layer Protocol'],
      'details': 'This piece of malware steals the content of the users keychain while maintaining a permanent backdoor',
      'Color': 'matrix14'
  },
  'Koadic': {
      'Execution': ['Command-Line Interface', 'Mshta', 'Regsvr32', 'Rundll32', 'Scripting', 'Service Execution', 'Windows Management Instrumentation'],
      'Privilege Escalation': ['Bypass User Account Control', 'Process Injection'],
      'Defense Evasion': ['Bypass User Account Control', 'Mshta', 'Process Injection', 'Regsvr32', 'Rundll32', 'Scripting'],
      'Credential Access': ['Credential Dumping'],
      'Discovery': ['Network Service Scanning', 'Network Share Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote Desktop Protocol', 'Remote File Copy'],
      'Collection': ['Clipboard Data', 'Data from Local System'],
      'Command And Control': ['Remote File Copy', 'Standard Cryptographic Protocol'],
      'details': 'Koadic is a Windows post-exploitation framework and penetration testing tool. Koadic is publicly available on GitHub and the tool is executed via the command-line. Koadic has several options for staging payloads and creating implants. Koadic performs most of its operations using Windows Script Host.',
      'Color': 'matrix15'
  },
  'Komplex': {
      'Persistence': ['Hidden Files and Directories', 'Launch Agent'],
      'Defense Evasion': ['File Deletion', 'Hidden Files and Directories'],
      'Discovery': ['Process Discovery', 'System Owner/User Discovery'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Standard Cryptographic Protocol'],
      'details': 'Komplex is a backdoor that has been used by APT28 on OS X and appears to be developed in a similar manner to XAgentOSX',
      'Color': 'matrix16'
  },
  'Kwampirs': {
      'Execution': ['Rundll32'],
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Binary Padding', 'Deobfuscate/Decode Files or Information', 'Masquerading', 'Obfuscated Files or Information', 'Rundll32'],
      'Discovery': ['Account Discovery', 'File and Directory Discovery', 'Network Share Discovery', 'Password Policy Discovery', 'Permission Groups Discovery', 'Process Discovery', 'Remote System Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy', 'Windows Admin Shares'],
      'Command And Control': ['Fallback Channels', 'Remote File Copy'],
      'details': 'Kwampirs is a backdoor Trojan used by Orangeworm. It has been found on machines which had software installed for the use and control of high-tech imaging devices such as X-Ray and MRI machines.',
      'Color': 'matrix17'
  },
  'LightNeuron': {
      'Execution': ['Command-Line Interface', 'Execution through API'],
      'Persistence': ['Server Software Component'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'File Deletion', 'Masquerading', 'Obfuscated Files or Information'],
      'Discovery': ['System Information Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Automated Collection', 'Data from Local System', 'Data Staged', 'Email Collection'],
      'Command And Control': ['Data Obfuscation','Remote File Copy','Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Automated Exfiltration', 'Data Encrypted', 'Exfiltration Over Command and Control Channel', 'Scheduled Transfer'],
      'Impact': ['Transmitted Data Manipulation'],
      'details': 'LightNeuron is a sophisticated backdoor that has targeted Microsoft Exchange servers since at least 2014. LightNeuron has been used by Turla to target diplomatic and foreign affairs-related organizations. The presence of certain strings in the malware suggests a Linux variant of LightNeuron exists.',
      'Color': 'matrix5'
  },
  'LOWBALL': {
      'Defense Evasion': ['Web Service'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy', 'Standard Application Layer Protocol', 'Web Service'],
      'details': 'LOWBALL is malware used by admin@338. It was used in August 2015 in email messages targeting Hong Kong-based media organizations.',
      'Color': 'matrix18'
  },
  'LaZagne': {
      'Credential Access': ['Credential Dumping', 'Credentials in Files'],
      'details': 'LaZagne is a post-exploitation, open-source tool used to recover stored passwords on a system. It has modules for Windows, Linux, and OSX, but is mainly focused on Windows systems. LaZagne is publicly available on GitHub.',
      'Color': 'matrix19'
  },
  'Linfo': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['File Deletion'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data from Local System'],
      'Command And Control': ['Fallback Channels', 'Remote File Copy'],
      'Exfiltration': ['Scheduled Transfer'],
      'details': 'Linfo is a rootkit trojan used by Elderwood to open a backdoor on compromised hosts.',
      'Color': 'matrix20'
  },
  'Linux_Rabbit': {
      'Persistence': ['.bash_profile and .bashrc'],
      'Credential Access': ['Brute Force'],
      'Discovery': ['System Owner/User Discovery'],
      'Lateral Movement': ['Remote Services'],
      'Command And Control': ['Commonly Used Port', 'Data Encoding'],
      'details': 'Linux Rabbit is malware that targeted Linux servers and IoT devices in a campaign lasting from August to October 2018. It shares code with another strain of malware known as Rabbot. The goal of the campaign was to install cryptocurrency miners onto the targeted servers and devices.',
      'Color': 'matrix21'
  },
  'LockerGoga': {
      'Defense Evasion': ['File Deletion'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'Impact': ['Data Encrypted for Impact'],
      'details': 'LockerGoga is ransomware that has been tied to various attacks on European companies. It was first reported upon in January 2019.  ',
      'Color': 'matrix22'
  },
  'LoJax': {
      'Persistence': ['Registry Run Keys / Startup Folder', 'System Firmware'],
      'Defense Evasion': ['Modify Registry','NTFS File Attributes', 'Rootkit'],
      'details': 'LoJax is a UEFI rootkit used by APT28 to persist remote access software on targeted systems.',
      'Color': 'matrix2'
  },
  'Lslsass': {
      'Credential Access': ['Credential Dumping'],
      'details': 'Lslsass is a publicly-available tool that can dump active logon session password hashes from the lsass process.',
      'Color': 'matrix23'
  },
  'Lurid': {
      'Command And Control': ['Custom Cryptographic Protocol'],
      'Exfiltration': ['Data Compressed'],
      'details': 'Lurid is a malware family that has been used by several groups, including PittyTiger, in targeted attacks as far back as 2006.',
      'Color': 'matrix24'
  },
  'MailSniper':{
      'Credential Access': ['Brute Force'],
      'Discovery': ['Account Discovery'],
      'Collection': ['Email Collection'],
      'details': 'MailSniper is a penetration testing tool for searching through email in a Microsoft Exchange environment for specific terms (passwords, insider intel, network architecture information, etc.). It can be used by a non-administrative user to search their own email, or by an Exchange administrator to search the mailboxes of every user in a domain.',
      'Color': 'matrix3'
  },
  'MURKYTOP': {
      'Execution': ['Command-Line Interface', 'Scheduled Task'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['File Deletion'],
      'Discovery': ['File and Directory Discovery', 'Network Service Scanning', 'Network Share Discovery', 'Permission Groups Discovery', 'Remote System Discovery', 'System Information Discovery'],
      'details': 'MURKYTOP is a reconnaissance tool used by Leviathan.',
      'Color': 'matrix25'
  },
  'MacSpy': {
      'Persistence': ['Hidden Files and Directories', 'Launch Agent'],
      'Defense Evasion': ['File Deletion', 'Hidden Files and Directories'],
      'Credential Access': ['Input Capture'],
      'Collection': ['Audio Capture', 'Clipboard Data', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Multi-hop Proxy', 'Standard Application Layer Protocol'],
      'details': 'MacSpy is a malware-as-a-service offered on the darkweb',
      'Color': 'matrix26'
  },
  'Matroyshka': {
      'Execution': ['Command-Line Interface', 'Rundll32', 'Scheduled Task'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Privilege Escalation': ['Process Injection', 'Scheduled Task'],
      'Defense Evasion': ['Obfuscated Files or Information', 'Process Injection', 'Rundll32'],
      'Credential Access': ['Credential Dumping', 'Input Capture'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'Matroyshka is a malware framework used by CopyKittens that consists of a dropper, loader, and RAT. It has multiple versions; v1 was seen in the wild from July 2016 until January 2017. v2 has fewer commands and other minor differences.',
      'Color': 'matrix27'
  },
  'meek': {
      'Command And Control': ['Domain Fronting'],
      'details': 'meek is an open-source Tor plugin that tunnels Tor traffic through HTTPS connections.',
      'Color': 'matrix14'
  },
  'Micropsia': {
      'Execution': ['Command-Line Interface', 'Windows Management Instrumentation'],
      'Persistence': ['Hidden Files and Directories', 'Shortcut Modification'],
      'Defense Evasion': ['Hidden Files and Directories', 'Obfuscated Files or Information'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Audio Capture', 'Automated Collection', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Compressed'],
      'details': 'Micropsia is a remote access tool written in Delphi.',
      'Color': 'matrix28'
  },
  'MimiPenguin': {
      'Credential Access': ['Credential Dumping'],
      'details': 'MimiPenguin is a credential dumper, similar to Mimikatz, designed specifically for Linux platforms.',
      'Color': 'matrix29'
  },
  'Mimikatz': {
      'Persistence': ['Account Manipulation', 'Security Support Provider'],
      'Privilege Escalation': ['SID-History Injection'],
      'Defense Evasion': ['DCShadow'],
      'Credential Access': ['Account Manipulation', 'Credential Dumping', 'Credentials in Files', 'Private Keys'],
      'Lateral Movement': ['Pass the Hash', 'Pass the Ticket'],
      'details': 'Mimikatz is a credential dumper capable of obtaining plaintext Windows account logins and passwords, along with many other features that make it useful for testing the security of networks.',
      'Color': 'matrix30'
  },
  'Miner_C': {
      'Lateral Movement': ['Taint Shared Content'],
      'details': 'Miner-C is malware that mines victims for the Monero cryptocurrency. It has targeted FTP servers and Network Attached Storage (NAS) devices to spread.',
      'Color': 'matrix1'
  },
  'MiniDuke': {
      'Defense Evasion': ['Web Service'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Fallback Channels', 'Remote File Copy', 'Standard Application Layer Protocol', 'Web Service'],
      'details': 'MiniDuke is malware that was used by APT29 from 2010 to 2015. The MiniDuke toolset consists of multiple downloader and backdoor components. The loader has been used with other MiniDuke components as well as in conjunction with CosmicDuke and PinchDuke.',
      'Color': 'matrix2'
  },
  'MirageFox': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['DLL Search Order Hijacking'],
      'Privilege Escalation': ['DLL Search Order Hijacking'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'DLL Search Order Hijacking'],
      'Discovery': ['System Information Discovery', 'System Owner/User Discovery'],
      'Command And Control': ['Commonly Used Port'],
      'details': 'MirageFox is a remote access tool used against Windows systems. It appears to be an upgraded version of a tool known as Mirage, which is a RAT believed to originate in 2012.',
      'Color': 'matrix3'
  },
  'Mis-Type': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Create Account'],
      'Defense Evasion': ['Masquerading'],
      'Discovery': ['Account Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol', 'Data Encoding', 'Fallback Channels', 'Standard Application Layer Protocol', 'Standard Non-Application Layer Protocol'],
      'details': 'Mis-Type is a backdoor hybrid that was used by Dust Storm in 2012.',
      'Color': 'matrix4'
  },
  'Misdat': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['File Deletion', 'Indicator Removal on Host', 'Masquerading', 'Timestomp'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol', 'Data Encoding', 'Remote File Copy', 'Standard Non-Application Layer Protocol'],
      'details': 'Misdat is a backdoor that was used by Dust Storm from 2010 to 2011.',
      'Color': 'matrix5'
  },
  'Mivast': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Credential Access': ['Credential Dumping'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy'],
      'details': 'Mivast is a backdoor that has been used by Deep Panda. It was reportedly used in the Anthem breach.',
      'Color': 'matrix6'
  },
  'MobileOrder': {
      'Discovery': ['Browser Bookmark Discovery', 'File and Directory Discovery', 'Process Discovery', 'System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data from Local System'],
      'Command And Control': ['Remote File Copy', 'Standard Cryptographic Protocol', 'Uncommonly Used Port'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'details': 'MobileOrder is a Trojan intended to compromise Android mobile devices. It has been used by Scarlet Mimic.',
      'Color': 'matrix7'
  },

  'MoonWind': {
      'Execution': ['Command-Line Interface', 'Scripting'],
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['File Deletion', 'Scripting'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Network Share Discovery', 'Peripheral Device Discovery', 'Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Collection': ['Data Staged', 'Input Capture'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol', 'Standard Cryptographic Protocol', 'Standard Non-Application Layer Protocol'],
      'details': 'MoonWind is a remote access tool (RAT) that was used in 2016 to target organizations in Thailand.',
      'Color': 'matrix8'
  },
  'More_eggs': {
      'Execution': ['Command-Line Interface', 'Regsvr32'],
      'Defense Evasion': ['Code Signing','Deobfuscate/Decode Files or Information','File Deletion', 'Regsvr32'],
      'Discovery': ['Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Data Encoding','Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'More_eggs is a JScript backdoor used by Cobalt Group and FIN6. Its name was given based on the variable "More_eggs" being present in its code. There are at least two different versions of the backdoor being used, version 2.0 and version 4.4.',
      'Color': 'matrix9'
  },
  'Mosquito': {
      'Execution': ['Command-Line Interface', 'Execution through API', 'PowerShell', 'Rundll32', 'Windows Management Instrumentation'],
      'Persistence': ['Component Object Model Hijacking', 'Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Component Object Model Hijacking', 'File Deletion', 'Modify Registry', 'Obfuscated Files or Information', 'Rundll32'],
      'Discovery': ['Process Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Remote File Copy'],
      'details': 'Mosquito is a Win32 backdoor that has been used by Turla. Mosquito is made up of three parts: the installer, the launcher, and the backdoor. The main backdoor is called CommanderDLL and is launched by the loader program.',
      'Color': 'matrix10'
  },
  'NDiskMonitor': {
      'Discovery': ['File and Directory Discovery', 'System Information Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Cryptographic Protocol'],
      'details': 'NDiskMonitor is a custom backdoor written in .NET that appears to be unique to Patchwork.',
      'Color': 'matrix11'
  },
  'NETEAGLE': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery'],
      'Command And Control': ['Custom Command and Control Protocol', 'Fallback Channels', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol', 'Standard Non-Application Layer Protocol'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'details': 'NETEAGLE is a backdoor developed by APT30 with compile dates as early as 2008. It has two main variants known as “Scout” and “Norton.”',
      'Color': 'matrix12'
  },
  'NETWIRE': {
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Code Signing'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['System Information Discovery'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'details': 'NETWIRE is a publicly available, multiplatform remote administration tool (RAT) that has been used by criminal and APT groups since at least 2012.',
      'Color': 'matrix13'
  },
  'NOKKI': {
      'Execution': ['Rundll32'],
      'Persistence': ['Hooking', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Hooking'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'File Deletion', 'Masquerading', 'Obfuscated Files or Information', 'Rundll32'],
      'Credential Access': ['Hooking'],
      'Discovery': ['System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data Staged'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'NOKKI is a modular remote access tool. The earliest observed attack using NOKKI was in January 2018. NOKKI has significant code overlap with the KONNI malware family. There is some evidence potentially linking NOKKI to APT37.',
      'Color': 'matrix14'
  },
  'Naid': {
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Modify Registry'],
      'Discovery': ['System Information Discovery', 'System Network Configuration Discovery'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol'],
      'details': 'Naid is a trojan used by Elderwood to open a backdoor on compromised hosts.',
      'Color': 'matrix15'
  },
  'NanHaiShu': {
      'Execution': ['Mshta', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Disabling Security Tools', 'File Deletion', 'Mshta', 'Obfuscated Files or Information', 'Scripting'],
      'Discovery': ['System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'NanHaiShu is a remote access tool and JScript backdoor used by Leviathan. NanHaiShu has been used to target government and private-sector organizations that have relations to the South China Sea dispute.',
      'Color': 'matrix16'
  },
  'NanoCore': {
      'Execution': ['Command-Line Interface', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Disabling Security Tools', 'Modify Registry', 'Obfuscated Files or Information', 'Scripting'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Audio Capture', 'Input Capture', 'Video Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Cryptographic Protocol', 'Uncommonly Used Port'],
      'details': 'NanoCore is a modular remote access tool developed in .NET that can be used to spy on victims and steal information. It has been used by threat actors since 2013.',
      'Color': 'matrix17'
  },
  'NavRAT': {
      'Execution': ['Command-Line Interface', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Process Injection', 'Scripting'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['Process Discovery', 'System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data Staged', 'Input Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'NavRAT is a remote access tool designed to upload, download, and execute files. It has been observed in attacks targeting South Korea.',
      'Color': 'matrix18'
  },
  'Nerex': {
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Code Signing', 'Modify Registry'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'details': 'Nerex is a Trojan used by Elderwood to open a backdoor on compromised hosts.',
      'Color': 'matrix19'
  },
  'Net': {
      'Execution': ['Service Execution'],
      'Persistence': ['Create Account'],
      'Defense Evasion': ['Network Share Connection Removal'],
      'Discovery': ['Account Discovery', 'Network Share Discovery', 'Password Policy Discovery', 'Permission Groups Discovery', 'Remote System Discovery', 'System Network Configuration Discovery', 'System Service Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Windows Admin Shares'],
      'details': 'The Net utility is a component of the Windows operating system. It is used in command-line operations for control of users, groups, services, and network connections.Net has a great deal of functionality, much of which is useful for an adversary, such as gathering system and network information for Discovery, moving laterally through Windows Admin Shares using net use commands, and interacting with services. The net1.exe utility is executed for certain functionality when net.exe is run and can be used directly in commands such as net1 user.',
      'Color': 'matrix20'
  },
  'Net Crawler': {
      'Execution': ['Service Execution'],
      'Credential Access': ['Brute Force', 'Credential Dumping'],
      'Lateral Movement': ['Windows Admin Shares'],
      'details': 'Net Crawler is an intranet worm capable of extracting credentials using credential dumpers and spreading to systems on a network over SMB by brute forcing accounts with recovered passwords and using PsExec to execute a copy of Net Crawler.',
      'Color': 'matrix21'
  },
  'netstat': {
      'Discovery': ['System Network Connections Discovery'],
      'details': 'netstat is an operating system utility that displays active TCP connections, listening ports, and network statistics.',
      'Color': 'matrix7'
  },
  'NetTraveler': {
      'Credential Access': ['Input Capture'],
      'Discovery': ['Application Window Discovery'],
      'Collection': ['Input Capture'],
      'details': 'NetTraveler is malware that has been used in multiple cyber espionage campaigns for basic surveillance of victims. The earliest known samples have timestamps back to 2005, and the largest number of observed samples were created between 2010 and 2013.',
      'Color': 'matrix22'
  },
  'Nidiran': {
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Masquerading'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy', 'Standard Cryptographic Protocol'],
      'details': 'Nidiran is a custom backdoor developed and used by Suckfly. It has been delivered via strategic web compromise.',
      'Color': 'matrix23'
  },
  'Nltest': {
      'Discovery': ['Domain Trust Discovery', 'Remote System Discovery', 'System Network Configuration Discovery'],
      'details': 'Nltest is a Windows command-line utility used to list domain controllers and enumerate domain trusts.',
      'Color': 'matrix24'
  },
  'NotPetya': {
      'Initial Access': ['Supply Chain Compromise', 'Valid Accounts'],
      'Execution': ['Rundll32', 'Scheduled Task', 'Service Execution', 'Windows Management Instrumentation'],
      'Persistence': ['Scheduled Task', 'Valid Accounts'],
      'Privilege Escalation': ['Scheduled Task', 'Valid Accounts'],
      'Defense Evasion': ['Indicator Removal on Host', 'Masquerading', 'Rundll32', 'Valid Accounts'],
      'Credential Access': ['Credential Dumping'],
      'Lateral Movement': ['Exploitation of Remote Services', 'Windows Admin Shares'],
      'Impact': ['Data Encrypted for Impact'],
      'details': 'NotPetya is malware that was first seen in a worldwide attack starting on June 27, 2017. The main purpose of the malware appeared to be to effectively destroy data and disk structures on compromised systems. Though NotPetya presents itself as a form of ransomware, it appears likely that the attackers never intended to make the encrypted data recoverable. As such, NotPetya may be more appropriately thought of as a form of wiper malware. NotPetya contains worm-like features to spread itself across a computer network using the SMBv1 exploits EternalBlue and EternalRomance.',
      'Color': 'matrix25'
  },
  'OLDBAIT': {
      'Defense Evasion': ['Masquerading', 'Obfuscated Files or Information'],
      'Credential Access': ['Credential Dumping'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'OLDBAIT is a credential harvester used by APT28.',
      'Color': 'matrix26'
  },
  'OSInfo': {
      'Discovery': ['Account Discovery', 'Network Share Discovery', 'Permission Groups Discovery', 'Query Registry', 'Remote System Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery'],
      'details': 'OSInfo is a custom tool used by APT3 to do internal discovery on a victim\'s computer and network.',
      'Color': 'matrix27'
  },
  'OSX/Shlayer ': {
      'Execution': ['Scripting', 'User Execution'],
      'Persistence': ['Browser Extensions', 'Hidden Files and Directories'],
      'Privilege Escalation': ['Elevated Execution with Prompt'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Disabling Security Tools', 'File and Directory Permissions Modification', 'Hidden Files and Directories', 'Masquerading', 'Scripting'],
      'Discovery': [ 'System Information Discovery'],
      'details': 'OSX/Shlayer is a Trojan designed to install adware on macOS. It was first discovered in 2018.',
      'Color': 'matrix2'
  },
  'OSX_OCEANLOTUS.D': {
      'Execution': ['Command-Line Interface', 'Scripting'],
      'Persistence': ['Hidden Files and Directories', 'Launch Agent', 'Launch Daemon'],
      'Privilege Escalation': ['Launch Daemon'],
      'Defense Evasion': ['File Deletion', 'Hidden Files and Directories', 'Obfuscated Files or Information', 'Scripting'],
      'Discovery': ['System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'OSX_OCEANLOTUS.D is a MacOS backdoor that has been used by APT32.',
      'Color': 'matrix28'
  },
  'OceanSalt': {
      'Initial Access': ['Spearphishing Attachment'],
      'Execution': ['Command-Line Interface', 'Scripting'],
      'Defense Evasion': ['File Deletion', 'Scripting'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery'],
      'Command And Control': ['Commonly Used Port', 'Data Encoding'],
      'details': 'OceanSalt is a Trojan that was used in a campaign targeting victims in South Korea, United States, and Canada. OceanSalt shares code similarity with SpyNote RAT, which has been linked to APT1.',
      'Color': 'matrix29'
  },
  'Octopus': {
      'Execution': ['Windows Management Instrumentation'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Octopus is a Windows Trojan.',
      'Color': 'matrix30'
  },
  'Olympic Destroyer': {
      'Execution': ['Service Execution', 'Windows Management Instrumentation'],
      'Defense Evasion': ['Indicator Removal on Host'],
      'Credential Access': ['Credential Dumping', 'Credentials in Files'],
      'Discovery': ['Network Share Discovery', 'Remote System Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy', 'Windows Admin Shares'],
      'Command And Control': ['Remote File Copy'],
      'Impact': ['Data Destruction', 'Inhibit System Recovery', 'Service Stop'],
      'details': 'Olympic Destroyer is malware that was first seen infecting computer systems at the 2018 Winter Olympics, held in Pyeongchang, South Korea. The main purpose of the malware appears to be to cause destructive impact to the affected systems. The malware leverages various native Windows utilities and API calls to carry out its destructive tasks. The malware has worm-like features to spread itself across a computer network in order to maximize its destructive impact.',
      'Color': 'matrix1'
  },
  'OnionDuke': {
      'Defense Evasion': ['Web Service'],
      'Credential Access': ['Credential Dumping'],
      'Command And Control': ['Standard Application Layer Protocol', 'Web Service'],
      'details': 'OnionDuke is malware that was used by APT29 from 2013 to 2015.',
      'Color': 'matrix2'
  },
  'Orz': {
      'Execution': ['Command-Line Interface', 'Scheduled Task', 'Scripting', 'Windows Management Instrumentation'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'File Deletion', 'Obfuscated Files or Information', 'Scripting', 'Software Packing', 'Virtualization/Sanbox Evasion'],
      'Discovery': ['System Information Discovery', 'System Time Discovery', 'Virtualization/Sanbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data Staged'],
      'Command And Control': ['Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Compressed', 'Data Transfer Size Limits', 'Exfiltration Over Command and Control Channel'],
      'details': 'Orz is a custom JavaScript backdoor used by Leviathan. It was observed being used in 2014 as well as in August 2017 when it was dropped by Microsoft Publisher files.',
      'Color': 'matrix3'
  },
  'OwaAuth': {
      'Persistence': ['Web Shell'],
      'Privilege Escalation': ['Web Shell'],
      'Defense Evasion': ['DLL Side-Loading', 'Masquerading', 'Timestomp'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'OwaAuth is a Web shell and credential stealer deployed to Microsoft Exchange servers that appears to be exclusively used by Threat Group-3390.',
      'Color': 'matrix4'
  },
  'P2P ZeuS': {
      'Command And Control': ['Data Obfuscation'],
      'details': 'P2P ZeuS is a closed-source fork of the leaked version of the ZeuS botnet. It presents improvements over the leaked version, including a peer-to-peer architecture.',
      'Color': 'matrix5'
  },
  'PHOREAL': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['Modify Registry'],
      'Command And Control': ['Custom Command and Control Protocol', 'Standard Non-Application Layer Protocol'],
      'details': 'PHOREAL is a signature backdoor used by APT32.',
      'Color': 'matrix6'
  },
  'PLAINTEE': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Bypass User Account Control'],
      'Defense Evasion': ['Bypass User Account Control', 'Modify Registry'],
      'Discovery': ['Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Custom Command and Control Protocol', 'Custom Cryptographic Protocol', 'Remote File Copy'],
      'details': 'PLAINTEE is a malware sample that has been used by Rancor in targeted attacks in Singapore and Cambodia.',
      'Color': 'matrix7'
  },
  'pngdowner': {
      'Defense Evasion': ['File Deletion'],
      'Credential Access': ['Credentials in Files'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'pngdowner is malware used by Putter Panda. It is a simple tool with limited functionality and no persistence mechanism, suggesting it is used only as a simple "download-and- execute" utility.',
      'Color': 'matrix14'
  },
  'POORAIM': {
      'Initial Access': ['Drive-by Compromise'],
      'Defense Evasion': ['Web Service'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Information Discovery'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Web Service'],
      'details': 'POORAIM is a backdoor used by APT37 in campaigns since at least 2014.',
      'Color': 'matrix8'
  },
  'POSHSPY': {
      'Execution': ['PowerShell'],
      'Persistence': ['Windows Management Instrumentation Event Subscription'],
      'Defense Evasion': ['Obfuscated Files or Information', 'Timestomp'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Domain Generation Algorithms', 'Remote File Copy', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Data Transfer Size Limits'],
      'details': 'POSHSPY is a backdoor that has been used by APT29 since at least 2015. It appears to be used as a secondary backdoor used if the actors lost access to their primary backdoors.',
      'Color': 'matrix9'
  },
  'POWERSOURCE': {
      'Execution': ['PowerShell'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['NTFS File Attributes'],
      'Discovery': ['Query Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'POWERSOURCE is a PowerShell backdoor that is a heavily obfuscated and modified version of the publicly available tool DNS_TXT_Pwnage. It was observed in February 2017 in spearphishing campaigns against personnel involved with United States Securities and Exchange Commission (SEC) filings at various organizations. The malware was delivered when macros were enabled by the victim and a VBS script was dropped.',
      'Color': 'matrix10'
  },
  'POWERSTATS': {
      'Execution': ['Dynamic Data Exchange', 'Mshta', 'PowerShell', 'Scheduled Task', 'Scripting', 'Windows Management Instrumentation'],
      'Persistence': ['Scheduled Task'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Disabling Security Tools', 'File Deletion', 'Masquerading', 'Mshta', 'Obfuscated Files or Information', 'Scripting'],
      'Discovery': ['Account Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Distributed Component Object Model', 'Remote File Copy'],
      'Collection': ['Distributed Component Object Model', 'Screen Capture'],
      'Command And Control': ['Commonly Used Port', 'Connection Proxy', 'Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol', 'Uncommonly Used Port'],
      'Exfiltration': ['Scheduled Transfer'],
      'details': 'POWERSTATS is a PowerShell-based first stage backdoor used by MuddyWater.',
      'Color': 'matrix11'
  },
  'POWERTON': {
      'Execution': ['PowerShell'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Windows Management Instrumentation Event Subscription'],
      'Credential Access': ['Credential Dumping'],
      'Command And Control': ['Commonly Used Port', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'POWERTON is a custom PowerShell backdoor first observed in 2018. It has typically been deployed as a late-stage backdoor by APT33. At least two variants of the backdoor have been identified, with the later version containing improved functionality.',
      'Color': 'matrix12'
  },
  'POWRUNER': {
      'Execution': ['Command-Line Interface', 'PowerShell', 'Scheduled Task', 'Windows Management Instrumentation'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Discovery': ['Account Discovery', 'File and Directory Discovery', 'Permission Groups Discovery', 'Process Discovery', 'Query Registry', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'POWRUNER is a PowerShell script that sends and receives commands to and from the C2 server.',
      'Color': 'matrix13'
  },
  'PUNCHBUGGY': {
      'Execution': ['Execution through Module Load', 'Rundll32'],
      'Persistence': ['AppCert DLLs', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['AppCert DLLs'],
      'Defense Evasion': ['File Deletion', 'Masquerading', 'Rundll32'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'PUNCHBUGGY is a backdoor malware used by FIN8 that has been observed targeting POS networks in the hospitality industry.',
      'Color': 'matrix14'
  },
  'PUNCHTRACK': {
      'Defense Evasion': ['Obfuscated Files or Information'],
      'Collection': ['Data from Local System', 'Data Staged'],
      'details': 'PUNCHTRACK is non-persistent point of sale (POS) system malware utilized by FIN8 to scrape payment card data.',
      'Color': 'matrix15'
  },
  'Pasam': {
      'Execution': ['LSASS Driver'],
      'Persistence': ['LSASS Driver'],
      'Defense Evasion': ['File Deletion'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data from Local System'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy'],
      'details': 'Pasam is a trojan used by Elderwood to open a backdoor on compromised hosts.',
      'Color': 'matrix16'
  },
  'Pass-The-Hash Toolkit': {
      'Lateral Movement': ['Pass the Hash'],
      'details': 'Pass-The-Hash Toolkit is a toolkit that allows an adversary to "pass" a password hash (without knowing the original password) to log in to systems.',
      'Color': 'matrix17'
  },
  'PinchDuke': {
      'Credential Access': ['Credential Dumping'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery'],
      'Collection': ['Data from Local System'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'PinchDuke is malware that was used by APT29 from 2008 to 2010.',
      'Color': 'matrix18'
  },
  'Ping': {
      'Discovery': ['Remote System Discovery'],
      'details': 'Ping is an operating system utility commonly used to troubleshoot and verify network connections.',
      'Color': 'matrix19'
  },
  'Pisloader': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Obfuscated Files or Information'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Pisloader is a malware family that is notable due to its use of DNS as a C2 protocol as well as its use of anti-analysis tactics. It has been used by APT18 and is similar to another malware family, HTTPBrowser, that has been used by the group.',
      'Color': 'matrix20'
  },
  'PlugX': {
      'Execution': ['Command-Line Interface', 'Execution through API', 'Trusted Developer Utilities'],
      'Persistence': ['Modify Existing Service', 'New Service', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'DLL Side-Loading', 'Masquerading', 'Modify Registry', 'Trusted Developer Utilities', 'Virtualization/Sanbox Evasion', 'Web Service'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Network Share Discovery', 'Process Discovery', 'Query Registry', 'System Network Configuration Discovery', 'Virtualization/Sanbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol', 'Multiband Communication', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Non-Application Layer Protocol', 'Web Service'],
      'details': 'PlugX is a remote access tool (RAT) that uses modular plugins. It has been used by multiple threat groups.',
      'Color': 'matrix21'
  },
  'PoisonIvy': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Modify Existing Service', 'New Service', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['New Service', 'Process Injection'],
      'Defense Evasion': ['Modify Registry', 'Obfuscated Files or Information', 'Process Injection', 'Rootkit'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['Application Window Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data from Local System', 'Data Staged', 'Input Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Cryptographic Protocol', 'Standard Cryptographic Protocol', 'Uncommonly Used Port'],
      'details': 'PoisonIvy is a popular remote access tool (RAT) that has been used by many groups.',
      'Color': 'matrix22'
  },
  'PoshC2': {
      'Execution': ['Service Execution', 'Windows Management Instrumentation'],
      'Persistence': ['Windows Management Instrumentation Event Subscription'],
      'Privilege Escalation': ['Access Token Manipulation', 'Bypass User Account Control', 'Exploitation for Privilege Escalation', 'Process Injection'],
      'Defense Evasion': ['Access Token Manipulation', 'Bypass User Account Control', 'Process Injection'],
      'Credential Access': ['Brute Force', 'Credential Dumping', 'Credentials in Files', 'Input Capture', 'LLMNR/NBT-NS Poisoning', 'Network Sniffing'],
      'Discovery': ['Account Discovery', 'Domain Trust Discovery', 'File and Directory Discovery', 'Network Service Scanning', 'Network Sniffing', 'Password Policy Discovery', 'Permission Groups Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Service Discovery'],
      'Lateral Movement': ['Exploitation of Remote Services', 'Pass the Hash'],
      'Collection': ['Automated Collection', 'Input Capture'],
      'Command And Control': ['Connection Proxy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Compressed'],
      'details': 'PoshC2 is an open source remote administration and post-exploitation framework that is publicly available on GitHub. The server-side components of the tool are primarily written in Python, while the implants are written in PowerShell. Although PoshC2 is primarily focused on Windows implantation, it does contain a basic Python dropper for Linux/macOS.',
      'Color': 'matrix23'
  },
  'Power Loader': {
      'Privilege Escalation': ['Extra Window Memory Injection'],
      'Defense Evasion': ['Extra Window Memory Injection'],
      'details': 'Power Loader is modular code sold in the cybercrime market used as a downloader in malware families such as Carberp, Redyms and Gapz.',
      'Color': 'matrix24'
  },
  'PowerDuke': {
      'Execution': ['Command-Line Interface', 'Rundll32'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['File Deletion', 'NTFS File Attributes', 'Obfuscated Files or Information', 'Rundll32'],
      'Discovery': ['Application Window Discovery', 'File and Directory Discovery', 'Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy'],
      'Impact': ['Data Destruction'],
      'details': 'PowerDuke is a backdoor that was used by APT29 in 2016. It has primarily been delivered through Microsoft Word or Excel attachments containing malicious macros.',
      'Color': 'matrix25'
  },
  'PowerSploit': {
      'Execution': ['PowerShell', 'Scheduled Task', 'Windows Management Instrumentation'],
      'Persistence': ['DLL Search Order Hijacking', 'Modify Existing Service', 'Path Interception', 'Registry Run Keys / Startup Folder', 'Scheduled Task', 'Security Support Provider'],
      'Privilege Escalation': ['Access Token Manipulation', 'DLL Search Order Hijacking', 'Path Interception', 'Process Injection', 'Scheduled Task'],
      'Defense Evasion': ['Access Token Manipulation', 'DLL Search Order Hijacking', 'Indicator Removal from Tools', 'Obfuscated Files or Information', 'Process Injection'],
      'Credential Access': ['Credential Dumping', 'Credentials in Register', 'Input Capture', 'Kerberoasting'],
      'Discovery': ['Account Discovery', 'Domain Trust Discovery', 'Process Discovery', 'Query Registry'],
      'Collection': ['Audio Capture', 'Data from Local System', 'Input Capture', 'Screen Capture'],
      'details': 'PowerSploit is an open source, offensive security framework comprised of PowerShell modules and scripts that perform a wide range of tasks related to penetration testing such as code execution, persistence, bypassing anti-virus, recon, and exfiltration.',
      'Color': 'matrix26'
  },
  'Prikormka': {
      'Execution': ['Rundll32'],
      'Persistence': ['DLL Search Order Hijacking', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['DLL Search Order Hijacking'],
      'Defense Evasion': ['DLL Search Order Hijacking', 'Indicator Removal from Host', 'Obfuscated Files or Information', 'Rundll32'],
      'Credential Access': ['Credential Dumping', 'Credentials in Files', 'Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Peripheral Device Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Collection': ['Data from Removable Media', 'Data Staged', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Data Encoding', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Data Compressed', 'Data Encrypted'],
      'details': 'Prikormka is a malware family used in a campaign known as Operation Groundbait. It has predominantly been observed in Ukraine and was used as early as 2008.',
      'Color': 'matrix27'
  },
  'Proton': {
      'Execution': ['Scripting'],
      'Persistence': ['Launch Agent'],
      'Privilege Escalation': ['Sudo Caching'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Disabling Security Tools', 'File Deletion', 'Indicator Removal from Host', 'Scripting'],
      'Credential Access': ['Credentials in Files', 'Input Capture', 'Input Prompt'],
      'Lateral Movement': ['Remote Services'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'Exfiltration': ['Data Compressed'],
      'details': 'Proton is a macOS backdoor focusing on data theft and credential access .',
      'Color': 'matrix28'
  },
  'Proxysvc': {
      'Execution': ['Command-Line Interface', 'Scripting', 'Service Execution'],
      'Defense Evasion': ['File Deletion', 'Scripting'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery', 'System Network Configuration Discovery', 'System Time Discovery'],
      'Collection': ['Automated Collection', 'Data from Local System'],
      'Command And Control': ['Commonly Used Port', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'Impact': ['Data Destruction'],
      'details': 'Proxysvc is a malicious DLL used by Lazarus Group in a campaign known as Operation GhostSecret. It has appeared to be operating undetected since 2017 and was mostly observed in higher education organizations. The goal of Proxysvc is to deliver additional payloads to the target and to maintain control for the attacker. It is in the form of a DLL that can also be executed as a standalone process.',
      'Color': 'matrix29'
  },
  'PsExec': {
      'Execution': ['Service Execution'],
      'Lateral Movement': ['Windows Admin Shares'],
      'details': 'PsExec is a free Microsoft tool that can be used to execute a program on another computer. It is used by IT administrators and attackers.',
      'Color': 'matrix30'
  },
  'Psylo': {
      'Defense Evasion': ['Timestomp'],
      'Discovery': ['File and Directory Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'details': 'Psylo is a shellcode-based Trojan that has been used by Scarlet Mimic. It has similar characteristics as FakeM.',
      'Color': 'matrix1'
  },
  'Pteranodon': {
      'Execution': ['Command-Line Interface', 'Rundll32', 'Scheduled Task'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['File Deletion', 'Rundll32'],
      'Discovery': ['File and Directory Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data Staged', 'Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'details': 'Pteranodon is a custom backdoor used by Gamaredon Group.',
      'Color': 'matrix2'
  },
  'Pupy': {
      'Execution': ['PowerShell', 'Scripting', 'Service Execution'],
      'Persistence': ['Create Account', 'Registry Run Keys / Startup Folder', 'Systemd Service'],
      'Privilege Escalation': ['Access Token Manipulation', 'Bypass User Account Control', 'Process Injection'],
      'Defense Evasion': ['Access Token Manipulation', 'Bypass User Account Control', 'Indicator Removal on Host', 'Process Injection', 'Scripting', 'Virtualization/Sanbox Evasion'],
      'Credential Access': ['Credentials Dumping', 'Input Capture', 'LLMNR/NBT-NS Poisoning'],
      'Discovery': ['Account Discovery', 'File and Directory Discovery', 'Network Service Scanning', 'Network Share Discovery', 'Process Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery', 'Virtualization/Sanbox Evasion'],
      'Lateral Movement': ['Remote Desktop Protocol', 'Remote File Copy'],
      'Collection': ['Audio Capture', 'Email Collection', 'Input Capture', 'Screen Capture', 'Video Capture'],
      'Command And Control': ['Multilayer Encryption', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Data Compressed', 'Exfiltration Over Command and Control Channel'],
      'details': 'Pupy is an open source, cross-platform (Windows, Linux, OSX, Android) remote administration and post-exploitation tool. It is written in Python and can be generated as a payload in several different ways (Windows exe, Python file, PowerShell oneliner/file, Linux elf, APK, Rubber Ducky, etc.). Pupy is publicly available on GitHub.',
      'Color': 'matrix3'
  },
  'QUADAGENT': {
      'Execution': ['Command-Line Interface', 'PowerShell', 'Scheduled Task', 'Scripting'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'File Deletion', 'Masquerading', 'Modify Registry', 'Obfuscated Files or Information', 'Scripting'],
      'Discovery': ['Query Registry', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Command And Control': ['Data Obfuscation', 'Fallback Channels', 'Standard Application Layer Protocol'],
      'details': 'QUADAGENT is a PowerShell backdoor used by OilRig.',
      'Color': 'matrix4'
  },
  'QuasarRAT': {
      'Execution': ['Command-Line Interface', 'Scheduled Task', 'Windows Management Instrumentation'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['Code Signing', 'Masquerading', 'Modify Registry'],
      'Credential Access': ['Credentials Dumping', 'Credentials in Files', 'Input Capture'],
      'Discovery': ['System Information Discovery'],
      'Lateral Movement': ['Remote Desktop Protocol', 'Remote File Copy'],
      'Collection': ['Input Capture', 'Video Capture'],
      'Command And Control': ['Connection Proxy', 'Remote File Copy', 'Standard Cryptographic Protocol'],
      'details': 'QuasarRAT is an open-source, remote access tool that is publicly available on GitHub. QuasarRAT is developed in the C# language.',
      'Color': 'matrix5'
  },
  'RARSTONE': {
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Process Injection'],
      'Discovery': ['File and Directory Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'RARSTONE is malware used by the Naikon group that has some characteristics similar to PlugX.',
      'Color': 'matrix6'
  },
  'RATANKBA': {
      'Execution': ['Command-Line Interface', 'PowerShell', 'Scheduled Task', 'Windows Management Instrumentation'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Process Injection'],
      'Discovery': ['Account Discovery', 'Process Discovery', 'Query Registry', 'Remote System Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery', 'System Service Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'RATANKBA is a remote controller tool used by Lazarus Group. RATANKBA has been used in attacks targeting financial institutions in Poland, Mexico, Uruguay, the United Kingdom, and Chile. It was also seen used against organizations related to telecommunications, management consulting, information technology, insurance, aviation, and education. RATANKBA has a graphical user interface to allow the attacker to issue jobs to perform on the infected machines.',
      'Color': 'matrix7'
  },
  'RGDoor': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information'],
      'Discovery': ['System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'RGDoor is a malicious Internet Information Services (IIS) backdoor developed in the C++ language. RGDoor has been seen deployed on webservers belonging to the Middle East government organizations. RGDoor provides backdoor access to compromised IIS servers.',
      'Color': 'matrix8'
  },
  'RIPTIDE': {
      'Command And Control': ['Commonly Used Port', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'RIPTIDE is a proxy-aware backdoor used by APT12.',
      'Color': 'matrix9'
  },
  'ROCKBOOT': {
      'Persistence': ['Bootkit'],
      'details': 'ROCKBOOT is a Bootkit that has been used by an unidentified, suspected China-based group.',
      'Color': 'matrix10'
  },
  'RTM': {
      'Execution': ['Command-Line Interface', 'Rundll32', 'Scheduled Task'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Privilege Escalation': ['Bypass User Account Control', 'Scheduled Task'],
      'Defense Evasion': ['Bypass User Account Control', 'Code Signing', 'File Deletion', 'Indicator Removal on Host', 'Install Root Certificate', 'Modify Registry', 'Obfuscated Files or Information', 'Rundll32'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Peripheral Device Discovery', 'Process Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Automated Collection', 'Clipboard Data', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Custom Command and Control Protocol', 'Custom Cryptographic Protocol', 'Remote File Copy'],
      'details': 'RTM is custom malware written in Delphi. It is used by the group of the same name (RTM).',
      'Color': 'matrix12'
  },
  'RawDisk': {
      'Impact': ['Data Destruction', 'Disk Content Wipe', 'Disk Structure Wipe'],
      'details': 'RawDisk is a legitimate commercial driver from the EldoS Corporation that is used for interacting with files, disks, and partitions. The driver allows for direct modification of data on a local computer\'s hard drive. In some cases, the tool can enact these raw disk modifications from user-mode processes, circumventing Windows operating system security features.',
      'Color': 'matrix13'
  },
  'RawPOS': {
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Masquerading'],
      'Collection': ['Data from Local System', 'Data Staged'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'RawPOS is a point-of-sale (POS) malware family that searches for cardholder data on victims. It has been in use since at least 2008. FireEye divides RawPOS into three components: FIENDCRY, DUEBREW, and DRIFTWOOD.',
      'Color': 'matrix14'
  },
  'Reaver': {
      'Execution': ['Control Panel Items'],
      'Persistence': ['New Service', 'Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Control Panel Items', 'File Deletion', 'Obfuscated Files or Information'],
      'Discovery': ['Query Registry', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Command And Control': ['Custom Command and Control Protocol', 'Standard Application Layer Protocol', 'Standard Non-Application Layer Protocol'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'Reaver is a malware family that has been in the wild since at least late 2016. Reporting indicates victims have primarily been associated with the "Five Poisons," which are movements the Chinese government considers dangerous. The type of malware is rare due to its final payload being in the form of Control Panel Items.',
      'Color': 'matrix15'
  },
  'RedLeaves': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['DLL Search Order Hijacking', 'Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Privilege Escalation': ['DLL Search Order Hijacking'],
      'Defense Evasion': ['DLL Search Order Hijacking', 'File Deletion', 'Obfuscated Files or Information'],
      'Credential Access': ['Credentials Dumping'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol', 'Uncommonly Used Port'],
      'details': 'RedLeaves is a malware family used by menuPass. The code overlaps with PlugX and may be based upon the open source tool Trochilus.',
      'Color': 'matrix16'
  },
  'Reg': {
      'Defense Evasion': ['Modify Registry'],
      'Credential Access': ['Credentials in Registry'],
      'Discovery': ['Query Registry'],
      'details': 'Reg is a Windows utility used to interact with the Windows Registry. It can be used at the command-line interface to query, add, modify, and remove information.Utilities such as Reg are known to be used by persistent threats.',
      'Color': 'matrix17'
  },
  'Regin': {
      'Defense Evasion': ['Code Signing', 'Modify Registry', 'NTFS File Attributes'],
      'Credential Access': ['Input Capture', 'Network Sniffing'],
      'Discovery': ['Network Sniffing'],
      'Lateral Movement': ['Windows Admin Shares'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Connection Proxy', 'Custom Command and Control Protocol', 'Standard Application Layer Protocol', 'Standard Non-Application Layer Protocol'],
      'details': 'Regin is a malware platform that has targeted victims in a range of industries, including telecom, government, and financial institutions. Some Regin timestamps date back to 2003.',
      'Color': 'matrix18'
  },
  'Remcos': {
      'Execution': ['Command-Line Interface', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Bypass User Account Control', 'Process Injection'],
      'Defense Evasion': ['Bypass User Account Control', 'Modify Registry', 'Obfuscated Files or Information', 'Process Injection', 'Scripting', 'Virtualization/Sanbox Evasion'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Virtualization/Sanbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Audio Capture', 'Clipboard Data', 'Input Capture', 'Screen Capture', 'Video Capture'],
      'Command And Control': ['Connection Proxy', 'Remote File Copy'],
      'details': 'Remcos is a closed-source tool that is marketed as a remote control and surveillance software by a company called Breaking Security. Remcos has been observed being used in malware campaigns.',
      'Color': 'matrix19'
  },
  'Remexi': {
      'Execution': ['Command-Line Interface', 'Scheduled Task', 'Scripting', 'Windows Management Instrumentation'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task', 'Winlogon Helper DLL'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Obfuscated Files or Information', 'Scripting'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['Application Window Discovery', 'File and Directory Discovery'],
      'Collection': ['Clipboard Data', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'Exfiltration': ['Data Encrypted', 'Exfiltration Over Command and Control Channel'],
      'details': 'Remexi is a Windows-based Trojan that was developed in the C programming language.',
      'Color': 'matrix20'
  },
  'RemoteCMD': {
      'Execution': ['Scheduled Task'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'details': 'RemoteCMD is a custom tool used by APT3 to execute commands on a remote system similar to SysInternal\'s PSEXEC functionality.',
      'Color': 'matrix21'
  },
  'Remsec': {
      'Execution': ['Scheduled Task'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Exploitation for Privilege Escalation', 'Process Injection', 'Scheduled Task'],
      'Defense Evasion': ['Disabling Security Tools', 'File Deletion', 'Masquerading', 'Obfuscated Files or Information', 'Process Injection'],
      'Credential Access': ['Credential Dumping', 'Input Capture', 'Password Filter DLL'],
      'Discovery': [' Account Discovery', 'File and Directory Discovery', 'Network Service Scanning', 'Process Discovery', 'Remote System Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data from Removable Media', 'Input Capture'],
      'Command And Control': ['Custom Command and Control Protocol', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol', 'Standard Non-Application Layer Protocol', 'Uncommonly Used Port'],
      'Exfiltration': ['Exfiltration Over Alternative Protocol', 'Exfiltration Over Physical Medium'],
      'details': 'Remsec is a modular backdoor that has been used by Strider and appears to have been designed primarily for espionage purposes. Many of its modules are written in Lua.',
      'Color': 'matrix22'
  },
  'Responder': {
      'Credential Access': ['LLMNR/NBT-NS Poisoning and Relay', 'Network Sniffing'],
      'Discovery': ['Network Sniffing'],
      'details': 'Responder is an open source tool used for LLMNR, NBT-NS and MDNS poisoning, with built-in HTTP/SMB/MSSQL/FTP/LDAP rogue authentication server supporting NTLMv1/NTLMv2/LMv2, Extended Security NTLMSSP and Basic HTTP authentication.',
      'Color': 'matrix23'
  },
  'Revenge RAT': {
      'Execution': ['Command-Line Interface', 'Mshta', 'PowerShell', 'Scheduled Task', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['Indirect Command Exection', 'Mshta', 'Scripting', 'Web Service'],
      'Credential Access': ['Credential Dumping', 'Input Capture'],
      'Discovery': ['System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote Desktop Protocol', 'Remote File Copy'],
      'Collection': ['Audio Capture', 'Input Capture', 'Screen Capture', 'Video Capture'],
      'Command And Control': ['Data Encoding', 'Remote File Copy', 'Uncommonly Used Port', 'Web Service'],
      'details': 'Revenge RAT is a freely available remote access tool written in .NET (C#).',
      'Color': 'matrix24'

  },
  'RobbinHood': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['Disabling Security Tools', 'Network Share Connection Removal'],
      'Impact': ['Data Encrypted for Impact', 'Inhibit System Recovery', 'Service Stop'],
      'details': 'RobbinHood is ransomware that was first observed being used in an attack against the Baltimore city government\'s computer network.',
      'Color': 'matrix27'
  },
  'RogueRobin': {
      'Execution': ['Command-Line Interface', 'PowerShell', 'Regsvr32', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Obfuscated Files or Information', 'Regsvr32', 'Scripting', 'Virtualization/Sandbox Evasion', 'Web Service'],
      'Discovery': ['Process Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery', 'Virtualization/Sandbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Custom Command and Control Protocol', 'Data Obfuscation', 'Remote File Copy', 'Web Service'],
      'details': 'RogueRobin is a payload used by DarkHydrus that has been developed in PowerShell and C#.',
      'Color': 'matrix29'
  },
  'ROKRAT': {
      'Defense Evasion': ['Virtualization/Sandbox Evasion', 'Web Service'],
      'Credential Access': ['Credential Dumping', 'Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'Security Software Discovery', 'System Information Discovery', 'Virtualization/Sandbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Audio Capture', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol', 'Web Service'],
      'Exfiltration': ['Exfiltration Over Command and Control Channel'],
      'details': 'ROKRAT is a cloud-based remote access tool (RAT) used by APT37. This software has been used to target victims in South Korea. APT37 used ROKRAT during several campaigns in 2016 through 2018.',
      'Color': 'matrix30'
  },
  'route': {
      'Discovery': ['System Network Configuration Discovery'],
      'details': 'route can be used to find or change information within the local system IP routing table.',
      'Color': 'matrix1'
  },
  'Rover': {
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Modify Registry'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['File and Directory Discovery'],
      'Collection': ['Automated Collection', 'Data from Local System', 'Data from Removable Media', 'Data Staged', 'Input Capture', 'Screen Capture'],
      'Exfiltration': ['Automated Exfiltration'],
      'details': 'Rover is malware suspected of being used for espionage purposes. It was used in 2015 in a targeted email sent to an Indian Ambassador to Afghanistan.',
      'Color': 'matrix2'
  },
  'Ruler': {
      'Persistence': ['Office Application Startup'],
      'Collection': ['Email Collection'],
      'details': 'Ruler is a tool to abuse Microsoft Exchange services. It is publicly available on GitHub and the tool is executed via the command line. The creators of Ruler have also released a defensive tool, NotRuler, to detect its usage.',
      'Color': 'matrix4'
  },
  'RunningRAT': {
      'Execution': ['Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Disabling Security Tools', 'File Deletion', 'Indicator Removal on Host', 'Scripting'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['System Information Discovery'],
      'Collection': ['Clipboard Data', 'Input Capture'],
      'Exfiltration': ['Data Compressed'],
      'details': 'RunningRAT is a remote access tool that appeared in operations surrounding the 2018 Pyeongchang Winter Olympics along with Gold Dragon and Brave Prince.',
      'Color': 'matrix5'
  },
  'S-Type': {
      'Persistence': ['Create Account', 'Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Defense Evasion': ['Masquerading'],
      'Credential Access': ['Credential Dumping', 'Input Capture', 'Password Filter DLL'],
      'Discovery': ['Account Discovery', 'System Information Discovery', 'System Service Discovery'],
      'Command And Control': ['Commonly Used Port', 'Data Encoding', 'Fallback Channels', 'Standard Application Layer Protocol'],
      'details': 'S-Type is a backdoor that was used by Dust Storm from 2013 to 2014.',
      'Color': 'matrix6'
  },
  'Sakula': {
      'Execution': ['Command-Line Interface', 'Rundll32'],
      'Persistence': ['New Service', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Bypass User Account Control', 'New Service'],
      'Defense Evasion': ['Bypass User Account Control', 'DLL Side-Loading', 'File Deletion', 'Obfuscated Files or Information', 'Rundll32'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Sakula is a remote access tool (RAT) that first surfaced in 2012 and was used in intrusions throughout 2015.',
      'Color': 'matrix7'
  },
  'SamSam': {
      'Execution': ['Scripting'],
      'Defense Evasion': ['Binary Padding', 'File Deletion', 'Obfuscated Files or Information', 'Scripting'],
      'Lateral Movement': ['Remote File Copy'],
      'Impact': ['Data Encrypted for Impact'],
      'details': 'SamSam is ransomware that appeared in early 2016. Unlike some ransomware, its variants have required operators to manually interact with the malware to execute some of its core components.',
      'Color': 'matrix8'
  },
  'schtasks': {
      'Execution': ['Scheduled Task'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'details': 'schtasks is used to schedule execution of programs or scripts on a Windows system to run at a specific date and time.',
      'Color': 'matrix9'
  },
  'SDelete': {
      'Defense Evasion': ['Code Signing', 'File Deletion'],
      'Impact': ['Data Destruction'],
      'details': 'SDelete is an application that securely deletes data in a way that makes it unrecoverable. It is part of the Microsoft Sysinternals suite of tools.',
      'Color': 'matrix10'
  },
  'SeaDuke': {
      'Initial Access': ['Valid Accounts'],
      'Execution': ['Command-Line Interface', 'PowerShell', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Shortcut Modification', 'Valid Accounts', 'Windows Management Instrumentation Event Subscription'],
      'Privilege Escalation': ['Valid Accounts'],
      'Defense Evasion': ['File Deletion', 'Scripting', 'Software Packing', 'Valid Accounts'],
      'Credential Access': ['Credential Dumping', 'Input Capture', 'Password Filter DLL'],
      'Discovery': [' Account Discovery', 'File and Directory Discovery', 'Network Service Scanning', 'Process Discovery', 'Remote System Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Pass the Ticket', 'Remote File Copy'],
      'Collection': ['Email Collection'],
      'Command And Control': ['Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'Exfiltration': ['Data Compressed'],
      'details': 'SeaDuke is malware that was used by APT29 from 2014 to 2015. It was used primarily as a secondary backdoor for victims that were already compromised with CozyCar.',
      'Color': 'matrix11'
  },
  'Seasalt': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['New Service', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['File Deletion', 'Obfuscated Files or Information', 'Masquerading'],
      'Credential Access': ['Credential Dumping', 'Input Capture', 'Password Filter DLL'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Custom Command and Control Protocol', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Seasalt is malware that has been linked to APT1\'s 2010 operations. It shares some code similarities with OceanSalt.',
      'Color': 'matrix12'
  },
  'SEASHARPEE': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Web Shell'],
      'Privilege Escalation': ['Web Shell'],
      'Defense Evasion': ['Timestomp'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'details': 'SEASHARPEE is a Web shell that has been used by APT34.',
      'Color': 'matrix13'
  },
  'ServHelper': {
      'Execution': ['Command-Line Interface', 'Rundll32', 'Scheduled Task'],
      'Persistence': ['Create Account', 'Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['File Deletion', 'Rundll32'],
      'Discovery': ['System Information Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote Desktop Protocol', 'Remote File Copy'],
      'Collection': ['Email Collection'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'ServHelper is a backdoor first observed in late 2018. The backdoor is written in Delphi and is typically delivered as a DLL file.',
      'Color': 'matrix14'
  },
  'Shamoon': {
      'Initial Access': ['Valid Accounts'],
      'Execution': ['Scheduled Task', 'Service Execution', 'Valid Accounts'],
      'Persistence': ['New Service', 'Scheduled Task'],
      'Privilege Escalation': ['Bypass User Account Control', 'New Service', 'Scheduled Task'],
      'Defense Evasion': ['Bypass User Account Control', 'Masquerading', 'Modify Registry', 'Obfuscated Files or Information', 'Valid Accounts'],
      'Discovery': ['Query Registry', 'Remote System Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy', 'Windows Admin Shares'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'Impact': ['Data Destruction', 'Data Encrypted for Impact', 'Disk Structure Wipe'],
      'details': 'Shamoon is wiper malware that was first used by an Iranian group known as the "Cutting Sword of Justice" in 2012. Other versions known as Shamoon 2 and Shamoon 3 were observed in 2016 and 2018. Shamoon has also been seen leveraging RawDisk to carry out data wiping tasks. The term Shamoon is sometimes used to refer to the group using the malware as well as the malware itself.',
      'Color': 'matrix15'
  },
  'SHIPSHAPE': {
      'Initial Access': ['Replication Through Removable Media'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Lateral Movement': ['Replication Through Removable Media'],
      'details': 'SHIPSHAPE is malware developed by APT30 that allows propagation and exfiltration of data over removable devices. APT30 may use this capability to exfiltrate data across air-gaps.',
      'Color': 'matrix16'
  },
  'SHOTPUT': {
      'Defense Evasion': ['Obfuscated Files or Information'],
      'Discovery': ['Account Discovery', 'File and Directory Discovery', 'Process Discovery', 'Remote System Discovery', 'System Network Connections Discovery'],
      'details': 'SHOTPUT is a custom backdoor used by APT3.',
      'Color': 'matrix17'
  },
  'SHUTTERSPEED': {
      'Discovery': ['System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Remote File Copy'],
      'details': 'SHUTTERSPEED is a backdoor used by APT37.',
      'Color': 'matrix18'
  },
  'Skeleton Key': {
      'Persistence': ['Account Manipulation'],
      'Credential Access': ['Account Manipulation'],
      'details': 'Skeleton Key is malware used to inject false credentials into domain controllers with the intent of creating a backdoor password. Functionality similar to Skeleton Key is included as a module in Mimikatz.',
      'Color': 'matrix19'
  },
  'SLOWDRIFT': {
      'Defense Evasion': ['Web Service'],
      'Discovery': ['System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Web Service'],
      'details': 'SLOWDRIFT is a backdoor used by APT37 against academic and strategic victims in South Korea.',
      'Color': 'matrix20'
  },
  'Smoke Loader': {
      'Initial Access': ['Supply Chain Compromise'],
      'Execution': ['Scheduled Task', 'Scripting'],
      'Persistence': ['Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Privilege Escalation': ['Process Injection', 'Scheduled Task'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Obfuscated Files or Information', 'Process Hollowing', 'Process Injection', 'Scripting', 'Virtualization/Sandbox Evasion'],
      'Credential Access': ['Credentials from Web Browsers', 'Credentials in Files'],
      'Discovery': ['File and Directory Discovery', 'Virtualization/Sandbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Email Collection'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Smoke Loader is a malicious bot application that can be used to load other malware. Smoke Loader has been seen in the wild since at least 2011 and has included a number of different payloads. It is notorious for its use of deception and self-protection. It also comes with several plug-ins.',
      'Color': 'matrix21'
  },
  'SNUGRIDE': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Command And Control': ['Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'SNUGRIDE is a backdoor that has been used by menuPass as first stage malware.',
      'Color': 'matrix22'
  },
  'Socksbot': {
      'Execution': ['PowerShell'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Connection Proxy'],
      'Discovery': ['Process Discovery'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Connection Proxy'],
      'details': 'Socksbot is a backdoor that abuses Socket Secure (SOCKS) proxies.',
      'Color': 'matrix23'
  },
  'SOUNDBITE': {
      'Defense Evasion': ['Modify Registry'],
      'Discovery': ['Application Window Discovery', 'File and Directory Discovery', 'System Information Discovery'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'SOUNDBITE is a signature backdoor used by APT32.',
      'Color': 'matrix24'
  },
  'SPACESHIP': {
      'Persistence': ['Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Discovery': ['File and Directory Discovery'],
      'Collection': ['Data Staged'],
      'Impact': ['Data Destruction', 'Data Encrypted for Impact', 'Disk Structure Wipe'],
      'Exfiltration': ['Data Encrypted', 'Exfiltration Over Physical Medium'],
      'details': 'SPACESHIP is malware developed by APT30 that allows propagation and exfiltration of data over removable devices. APT30 may use this capability to exfiltrate data across air-gaps.',
      'Color': 'matrix25'
  },
  'SpeakUp': {
      'Execution': ['Exploitation for Client Execution', 'Local Job Scheduling', 'Scripting'],
      'Persistence': ['Local Job Scheduling'],
      'Defense Evasion': ['File Deletion', 'Obfuscated Files or Information', 'Scripting'],
      'Credential Access': ['Brute Force'],
      'Discovery': ['Network Service Scanning', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Data Encoding', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'SpeakUp is a Trojan backdoor that targets both Linux and OSX devices. It was first observed in January 2019.',
      'Color': 'matrix26'
  },
  'spwebmember': {
      'Collection': ['Data from Information Repositories'],
      'details': 'spwebmember is a Microsoft SharePoint enumeration and data dumping tool written in .NET.',
      'Color': 'matrix27'
  },
  'sqlmap': {
      'Initial Access': ['Exploit Public-Facing Application'],
      'details': 'sqlmap is an open source penetration testing tool that can be used to automate the process of detecting and exploiting SQL injection flaws.',
      'Color': 'matrix28'
  },
  'SQLRat': {
      'Execution': ['PowerShell', 'Scheduled Task', 'Scripting', 'User Execution'],
      'Persistence': ['Scheduled Task'],
      'Privilege Escalation': ['Scheduled Task'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'File Deletion', 'Obfuscated Files or Information', 'Scripting'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'details': 'SQLRat is malware that executes SQL scripts to avoid leaving traditional host artifacts. FIN7 has been observed using it.',
      'Color': 'matrix29'
  },
  'SslMM': {
      'Persistence': ['Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Privilege Escalation': ['Access Token Manipulation'],
      'Defense Evasion': ['Access Token Manipulation', 'Disabling Security Tools', 'Masquerading'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['System Information Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Fallback Channels'],
      'details': 'SslMM is a full-featured backdoor used by Naikon that has multiple variants.',
      'Color': 'matrix30'
  },
  'Starloader': {
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Masquerading'],
      'details': 'Starloader is a loader component that has been observed loading Felismus and associated tools.',
      'Color': 'matrix1'
  },
  'StoneDrill': {
      'Execution': ['Scripting', 'Windows Management Instrumentation'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['File Deletion', 'Obfuscated Files or Information', 'Process Injection', 'Scripting', 'Virtualization/Sandbox Evasion'],
      'Discovery': ['Query Registry', 'Security Software Discovery', 'System Information Discovery', 'System Time Discovery', 'Virtualization/Sandbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Remote File Copy'],
      'Impact': ['Data Destruction', 'Disk Content Wipe', 'Disk Structure Wipe'],
      'details': 'StoneDrill is wiper malware discovered in destructive campaigns against both Middle Eastern and European targets in association with APT33.',
      'Color': 'matrix2'
  },
  'StreamEx': {
      'Execution': ['Command-Line Interface', 'Rundll32'],
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Modify Registry', 'Obfuscated Files or Information', 'Rundll32'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Security Software Discovery', 'System Information Discovery'],
      'details': 'StreamEx is a malware family that has been used by Deep Panda since at least 2015. In 2016, it was distributed via legitimate compromised Korean websites.',
      'Color': 'matrix3'
  },
  'Sykipot': {
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Process Injection'],
      'Credential Access': ['Input Capture', 'Two-Factor Authentication Interception'],
      'Discovery': ['Account Discovery', 'Process Discovery', 'Remote System Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Service Discovery'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Multilayer Encryption'],
      'details': 'Sykipot is malware that has been used in spearphishing campaigns since approximately 2007 against victims primarily in the US. One variant of Sykipot hijacks smart cards on victims. The group using this malware has also been referred to as Sykipot.',
      'Color': 'matrix4'
  },
  'SynAck': {
      'Execution': ['Execution through API'],
      'Defense Evasion': ['Indicator Removal on Host', 'Modify Registry', 'Obfuscated Files or Information', 'Process Doppelgänging', 'Virtualization/Sandbox Evasion'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery', 'System Owner/User Discovery', 'System Service Discovery', 'Virtualization/Sandbox Evasion'],
      'Impact': ['Data Encrypted for Impact'],
      'details': 'SynAck is variant of Trojan ransomware targeting mainly English-speaking users since at least fall 2017.',
      'Color': 'matrix5'
  },
  'Sys10': {
      'Discovery': ['Permission Groups Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Standard Application Layer Protocol'],
      'details': 'Sys10 is a backdoor that was used throughout 2013 by Naikon.',
      'Color': 'matrix6'
  },
  'Systeminfo': {
      'Discovery': ['System Information Discovery'],
      'details': 'Systeminfo is a Windows utility that can be used to gather detailed information about a computer.',
      'Color': 'matrix7'
  },
  'T9000': {
      'Persistence': ['AppInit DLLs'],
      'Privilege Escalation': ['AppInit DLLs'],
      'Defense Evasion': ['DLL Side-Loading'],
      'Discovery': ['Peripheral Device Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Collection': ['Audio Capture', 'Automated Collection', 'Screen Capture', 'Video Capture'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'T9000 is a backdoor that is a newer variant of the T5000 malware family, also known as Plat1. Its primary function is to gather information about the victim. It has been used in multiple targeted attacks against U.S.-based organizations.',
      'Color': 'matrix8'
  },
  'TDTESS': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['File Deletion', 'Timestomp'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'details': 'TDTESS is a 64-bit .NET binary backdoor used by CopyKittens.',
      'Color': 'matrix9'
  },
  'TEXTMATE': {
      'Execution': ['Command-Line Interface'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'TEXTMATE is a second-stage PowerShell backdoor that is memory-resident. It was observed being used along with POWERSOURCE in February 2017.',
      'Color': 'matrix10'
  },
  'TINYTYPHON': {
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Obfuscated Files or Information'],
      'Discovery': ['File and Directory Discovery'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'TINYTYPHON is a backdoor that has been used by the actors responsible for the MONSOON campaign. The majority of its code was reportedly taken from the MyDoom worm.',
      'Color': 'matrix11'
  },
  'TURNEDUP': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Process Injection'],
      'Discovery': ['System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Remote File Copy'],
      'details': 'TURNEDUP is a non-public backdoor. It has been dropped by APT33\'s StoneDrill malware.',
      'Color': 'matrix12'
  },
  'TYPEFRAME': {
      'Execution': ['Command-Line Interface', 'Scripting', 'User Execution'],
      'Persistence': ['Modify Existing Service', 'New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Disabling Security Tools', 'File Deletion', 'Modify Registry', 'Obfuscated Files or Information', 'Scripting'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Connection Proxy', 'Custom Command and Control Protocol', 'Uncommonly Used Port', 'Remote File Copy'],
      'details': 'TYPEFRAME is a remote access tool that has been used by Lazarus Group.',
      'Color': 'matrix13'
  },
  'Taidoor': {
      'Privilege Escalation': ['Process Injection'],
      'Defense Evasion': ['Process Injection'],
      'Command And Control': ['Custom Cryptographic Protocol'],
      'details': 'Taidoor is malware that has been used since at least 2010, primarily to target Taiwanese government organizations.',
      'Color': 'matrix14'
  },
  'Tasklist': {
      'Discovery': ['Process Discovery', 'Security Software Discovery', 'System Service Discovery'],
      'details': 'The Tasklist utility displays a list of applications and services with their Process IDs (PID) for all tasks running on either a local or a remote computer. It is packaged with Windows operating systems and can be executed from the command-line interface.',
      'Color': 'matrix15'
  },
  'TinyZBot': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['New Service', 'Registry Run Keys / Startup Folder', 'Shortcut Modification'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Disabling Security Tools'],
      'Credential Access': ['Input Capture'],
      'Collection': ['Clipboard Data', 'Input Capture', 'Screen Capture'],
      'details': 'TinyZBot is a bot written in C# that was developed by Cleaver.',
      'Color': 'matrix16'
  },
  'Tor': {
      'Command And Control': ['Multi-hop Proxy', 'Multilayer Encryption'],
      'details': 'Tor is a software suite and network that provides increased anonymity on the Internet. It creates a multi-hop proxy network and utilizes multilayer encryption to protect both the message and routing information. Tor utilizes "Onion Routing," in which messages are encrypted with multiple layers of encryption; at each step in the proxy network, the topmost layer is decrypted and the contents forwarded on to the next node until it reaches its destination.',
      'Color': 'matrix17'
  },
  'TrickBot': {
      'Initial Access': ['Spearphishing Attachment'],
      'Execution': ['Execution through API', 'Scheduled Task', 'Scripting', 'User Execution'],
      'Persistence': ['Hooking', 'Registry Run Keys / Startup Folder', 'Scheduled Task'],
      'Privilege Escalation': ['Hooking', 'Process Injection', 'Scheduled Task'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'Disabling Security Tools', 'Modify Registry', 'Obfuscated Files or Information', 'Process Injection', 'Scripting', 'Software Packing'],
      'Credential Access': ['Credentials in Files', 'Credentials in Registry', 'Hooking'],
      'Discovery': ['Account Discovery', 'Domain Trust Discovery', 'File and Directory Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Service Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data from Local System', 'Email Collection', 'Man in the Browser'],
      'Command And Control': ['Commonly Used Port', 'Custom Cryptographic Protocol', 'Remote File Copy', 'Standard Application Layer Protocol', 'Uncommonly Used Port'],
      'details': 'TrickBot is a Trojan spyware program that has mainly been used for targeting banking sites in United States, Canada, UK, Germany, Australia, Austria, Ireland, London, Switzerland, and Scotland. TrickBot first emerged in the wild in September 2016 and appears to be a successor to Dyre. TrickBot is developed in the C++ programming language.',
      'Color': 'matrix18'
  },
  'Trojan.Karagany': {
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Software Packing'],
      'Credential Access': ['Credential Dumping'],
      'Discovery': ['Process Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Data Staged', 'Screen Capture'],
      'Command And Control': ['Remote File Copy'],
      'details': 'Trojan.Karagany is a backdoor primarily used for recon. The source code for it was leaked in 2010 and it is sold on underground forums.',
      'Color': 'matrix19'
  },
  'Trojan.Mebromi': {
      'Persistence': ['System Firmware'],
      'details': 'Trojan.Mebromi is BIOS-level malware that takes control of the victim before MBR.',
      'Color': 'matrix20'
  },
  'Truvasys': {
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Masquerading'],
      'details': 'Truvasys is first-stage malware that has been used by PROMETHIUM. It is a collection of modules written in the Delphi programming language.',
      'Color': 'matrix21'
  },
  'Twitoor': {
      'Defense Evasion': ['Web Service'],
      'Command And Control': ['Web Service'],
      'details': 'Twitoor is an Android malware family that likely spreads by SMS or via malicious URLs.',
      'Color': 'matrix22'
  },
  'UACMe': {
      'Privilege Escalation': ['Bypass User Account Control'],
      'Defense Evasion': ['Bypass User Account Control'],
      'details': 'UACMe is an open source assessment tool that contains many methods for bypassing Windows User Account Control on multiple versions of the operating system.',
      'Color': 'matrix23'
  },
  'UBoatRAT': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['BITS Jobs'],
      'Defense Evasion': ['BITS Jobs', 'Obfuscated Files or Information', 'Virtualization/Sandbox Evasion', 'Web Service'],
      'Discovery': ['Process Discovery', 'Virtualization/Sandbox Evasion'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol', 'Remote File Copy', 'Standard Application Layer Protocol', 'Web Service'],
      'details': 'UBoatRAT is a remote access tool that was identified in May 2017.',
      'Color': 'matrix24'
  },
  'UPPERCUT': {
      'Execution': ['Command-Line Interface'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'UPPERCUT is a backdoor that has been used by menuPass.',
      'Color': 'matrix25'
  },
  'USBStealer': {
      'Initial Access': ['Replication Through Removable Media'],
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['File Deletion', 'Masquerading', 'Obfuscated Files or Information', 'Timestomp'],
      'Discovery': ['File and Directory Discovery', 'Peripheral Device Discovery'],
      'Lateral Movement': ['Replication Through Removable Media'],
      'Collection': ['Automated Collection', 'Data from Removable Media', 'Data Staged'],
      'Command And Control': ['Communication Through Removable Media'],
      'Exfiltration': ['Automated Exfiltration', 'Exfiltration Over Physical Medium'],
      'details': 'USBStealer is malware that has used by APT28 since at least 2005 to extract information from air-gapped networks. It does not have the capability to communicate over the Internet and has been used in conjunction with ADVSTORESHELL.',
      'Color': 'matrix26'
  },
  'Umbreon': {
      'Initial Access': ['Valid Accounts'],
      'Execution': ['Command-Line Interface'],
      'Persistence': ['Port Knocking', 'Valid Accounts'],
      'Privilege Escalation': ['Valid Accounts'],
      'Defense Evasion': ['Port Knocking', 'Rootkit', 'Valid Accounts'],
      'Command And Control': ['Port Knocking', 'Standard Application Layer Protocol'],
      'details': 'A Linux rootkit that provides backdoor access and hides from defenders.',
      'Color': 'matrix27'
  },
  'Unknown Logger': {
      'Initial Access': ['Replication Through Removable Media'],
      'Defense Evasion': ['Disabling Security Tools'],
      'Credential Access': ['Credential Dumping', 'Input Capture'],
      'Discovery': ['System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy', 'Replication Through Removable Media'],
      'Collection': ['Input Capture'],
      'Command And Control': ['Remote File Copy'],
      'details': 'Unknown Logger is a publicly released, free backdoor. Version 1.5 of the backdoor has been used by the actors responsible for the MONSOON campaign.',
      'Color': 'matrix28'
  },
  'Uroburos': {
      'Defense Evasion': ['Rootkit', 'Software Packing'],
      'details': 'Uroburos is a rootkit used by Turla.',
      'Color': 'matrix29'
  },
  'VERMIN': {
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'File Deletion', 'Obfuscated Files or Information', 'Software Packing'],
      'Credential Access': ['Input Capture'],
      'Discovery': ['Process Discovery', 'Security Software Discovery', 'System Information Discovery', 'System Network Configuration Discovery', 'System Owner/User Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Audio Capture', 'Automated Collection', 'Clipboard Data', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'VERMIN is a remote access tool written in the Microsoft .NET framework. It is mostly composed of original code, but also has some open source code.',
      'Color': 'matrix30'
  },
  'Vasport': {
      'Persistence': ['Registry Run Keys / Startup Folder'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Connection Proxy', 'Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Vasport is a trojan used by Elderwood to open a backdoor on compromised hosts.',
      'Color': 'matrix1'
  },
  'Volgmer': {
      'Execution': ['Command-Line Interface', 'Execution through API'],
      'Persistence': ['Modify Existing Service', 'New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'File Deletion', 'Masquerading', 'Modify Registry', 'Obfuscated Files or Information', 'Software Packing'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'System Information Discovery', 'System Network Configuration Discovery', 'System Network Connections Discovery', 'System Service Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Custom Command and Control Protocol', 'Data Encoding', 'Remote File Copy', 'Standard Cryptographic Protocol', 'Uncommonly Used Port'],
      'details': 'Volgmer is a backdoor Trojan designed to provide covert access to a compromised system. It has been used since at least 2013 to target the government, financial, automotive, and media industries. Its primary delivery mechanism is suspected to be spearphishing.',
      'Color': 'matrix2'
  },
  'WEBC2': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['DLL Search Order Hijacking'],
      'Privilege Escalation': ['DLL Search Order Hijacking'],
      'Defense Evasion': ['DLL Search Order Hijacking'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy'],
      'details': 'WEBC2 is a backdoor used by APT1 to retrieve a Web page from a predetermined C2 server.',
      'Color': 'matrix3'
  },
  'WINDSHIELD': {
      'Defense Evasion': ['File Deletion'],
      'Discovery': ['Query Registry', 'System Information Discovery', 'System Owner/User Discovery'],
      'Command And Control': ['Custom Command and Control Protocol', 'Standard Non-Application Layer Protocol'],
      'details': 'WINDSHIELD is a signature backdoor used by APT32.',
      'Color': 'matrix4'
  },
  'WINERACK': {
      'Execution': ['Command-Line Interface'],
      'Discovery': ['Application Window Discovery', 'Application Window Discovery', 'File and Directory Discovery', 'Process Discovery', 'System Information Discovery', 'System Owner/User Discovery', 'System Service Discovery'],
      'details': 'WINERACK is a backdoor used by APT37.',
      'Color': 'matrix5'
  },
  'WannaCry': {
      'Execution': ['Windows Management Instrumentation'],
      'Persistence': ['Hidden Files and Directories', 'New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['File Permissions Modification', 'Hidden Files and Directories'],
      'Discovery': ['File and Directory Discovery', 'Peripheral Device Discovery', 'Remote System Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Exploitation of Remote Services', 'Remote Desktop Protocol', 'Remote File Copy'],
      'Command And Control': ['Custom Cryptographic Protocol', 'Multi-hop Proxy', 'Multilayer Encryption', 'Remote File Copy'],
      'Impact': ['Data Encrypted for Impact', 'Inhibit System Recovery', 'Service Stop'],
      'details': 'WannaCry is ransomware that was first seen in a global attack during May 2017, which affected more than 150 countries. It contains worm-like features to spread itself across a computer network using the SMBv1 exploit EternalBlue.',
      'Color': 'matrix6'
  },
  'Wiarp': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service', 'Process Injection'],
      'Defense Evasion': ['Process Injection'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Commonly Used Port', 'Remote File Copy'],
      'details': 'Wiarp is a trojan used by Elderwood to open a backdoor on compromised hosts.',
      'Color': 'matrix7'
  },
  'WinMM': {
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'System Information Discovery', 'System Owner/User Discovery'],
      'Command And Control': ['Fallback Channels', 'Standard Application Layer Protocol'],
      'details': 'WinMM is a full-featured, simple backdoor used by Naikon.',
      'Color': 'matrix8'
  },
  'Windows Credential Editor': {
      'Credential Access': ['Credential Dumping'],
      'details': 'Windows Credential Editor is a password dumping tool.',
      'Color': 'matrix9'
  },
  'Winexe': {
      'Execution': ['Service Execution'],
      'details': 'Winexe is a lightweight, open source tool similar to PsExec designed to allow system administrators to execute commands on remote servers. Winexe is unique in that it is a GNU/Linux based client.',
      'Color': 'matrix10'
  },
  'Wingbird': {
      'Execution': ['LSASS Driver', 'Service Execution'],
      'Persistence': ['LSASS Driver', 'New Service'],
      'Privilege Escalation': ['Exploitation for Privilege Escalation', 'New Service', 'Process Injection'],
      'Defense Evasion': ['DLL Side-Loading', 'File Deletion', 'Process Injection'],
      'Discovery': ['Security Software Discovery', 'System Information Discovery', 'System Owner/User Discovery'],
      'details': 'Wingbird is a backdoor that appears to be a version of commercial software FinFisher. It is reportedly used to attack individual computers instead of networks. It was used by NEODYMIUM in a May 2016 campaign.',
      'Color': 'matrix11'
  },
  'Winnti': {
      'Execution': ['Rundll32'],
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Masquerading', 'Rundll32'],
      'details': 'Winnti is a Trojan that has been used by multiple groups to carry out intrusions in varied regions from at least 2010 to 2016. One of the groups using this malware is referred to by the same name, Winnti Group; however, reporting indicates a second distinct group, Axiom, also uses the malware.',
      'Color': 'matrix12'
  },
  'Wiper': {
      'Execution': ['Third-party Software'],
      'Lateral Movement': ['Third-party Software'],
      'details': 'Wiper is a family of destructive malware used in March 2013 during breaches of South Korean banks and media companies.',
      'Color': 'matrix13'
  },
  'XAgentOSX': {
      'Execution': ['Execution through API'],
      'Defense Evasion': ['File Deletion'],
      'Credential Access': ['Credentials in Files', 'Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Peripheral Device Discovery', 'Process Discovery', 'System Information Discovery', 'System Owner/User Discovery'],
      'Collection': ['Input Capture', 'Screen Capture'],
      'Command And Control': ['Standard Application Layer Protocol'],
      'details': 'X-Agent for Android is Android malware that was placed in a repackaged version of a Ukrainian artillery targeting application. The malware reportedly retrieved general location data on where the victim device was used, and therefore could likely indicate the potential location of Ukrainian artillery. Is it tracked separately from the CHOPSTICK.',
      'Color': 'matrix14'
  },
  'XTunnel': {
      'Execution': ['Command-Line Interface'],
      'Defense Evasion': ['Binary Padding', 'Obfuscated Files or Information'],
      'Credential Access': ['Credentials in Files'],
      'Discovery': ['Network Service Scanning'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Connection Proxy', 'Fallback Channels', 'Remote File Copy', 'Standard Cryptographic Protocol'],
      'details': 'XTunnel a VPN-like network proxy tool that can relay traffic between a C2 server and a victim. It was first seen in May 2013 and reportedly used by APT28 during the compromise of the Democratic National Committee.',
      'Color': 'matrix15'
  },
  'Xbash': {
      'Execution': ['Exploitation for Client Execution', 'Local Job Scheduling', 'Mshta', 'PowerShell', 'Regsvr32', 'Scripting'],
      'Persistence': ['Local Job Scheduling', 'Registry Run Keys / Startup Folder'],
      'Defense Evasion': ['Mshta', 'Regsvr32', 'Scripting', 'Web Service'],
      'Credential Access': ['Brute Force'],
      'Discovery': ['Network Service Scanning', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol', 'Web Service'],
      'details': 'Xbash is a malware family that has targeted Linux and Microsoft Windows servers. The malware has been tied to the Iron Group, a threat actor group known for previous ransomware attacks. Xbash was developed in Python and then converted into a self-contained Linux ELF executable by using PyInstaller.',
      'Color': 'matrix16'
  },
  'ZLib': {
      'Execution': ['Command-Line Interface'],
      'Persistence': ['New Service'],
      'Privilege Escalation': ['New Service'],
      'Defense Evasion': ['Masquerading'],
      'Discovery': ['File and Directory Discovery', 'System Information Discovery', 'System Service Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'Exfiltration': ['Data Compressed'],
      'details': 'ZLib is a full-featured backdoor that was used as a second-stage implant by Dust Storm from 2014 to 2015. It is malware and should not be confused with the compression library from which its name is derived.',
      'Color': 'matrix17'
  },
  'Zebrocy': {
      'Execution': ['Windows Management Instrumentation'],
      'Persistence': ['Hooking', 'Logon Scripts', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Hooking'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'File Deletion', 'Software Packing'],
      'Credential Access': ['Hooking'],
      'Discovery': ['File and Directory Discovery', 'Network Share Discovery', 'Peripheral Device Discovery', 'Process Discovery', 'System Information Discovery', 'System Owner/User Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Logon Scripts', 'Remote File Copy'],
      'Collection': ['Automated Collection', 'Data Staged', 'Screen Capture'],
      'Command And Control': ['Custom Command and Control Protocol', 'Remote File Copy', 'Standard Application Layer Protocol','Standard Cryptographic Protocol', 'Uncommonly Used Port'],
      'Exfiltration': ['Data Encrypted'],
      'details': 'Zebrocy is a Trojan that has been used by APT28 since at least November 2015. The malware comes in several programming language variants, including C++, Delphi, AutoIt, C#, and VB.NET.',
      'Color': 'matrix18'
  },
  'ZeroT': {
      'Persistence': ['New Service'],
      'Privilege Escalation': ['Bypass User Account Control', 'New Service'],
      'Defense Evasion': ['Binary Padding', 'Bypass User Account Control', 'Deobfuscate/Decode Files or Information', 'DLL Side-Loading', 'Obfuscated Files or Information', 'Software Packing'],
      'Discovery': ['System Information Discovery', 'System Network Configuration Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Command And Control': ['Data Obfuscation', 'Remote File Copy', 'Standard Application Layer Protocol', 'Standard Cryptographic Protocol'],
      'details': 'ZeroT is a Trojan used by TA459, often in conjunction with PlugX.',
      'Color': 'matrix19'
  },
  'Zeroaccess': {
      'Defense Evasion': ['NTFS File Attributes', 'Rootkit'],
      'details': 'Zeroaccess is a kernel-mode Rootkit that attempts to add victims to the ZeroAccess botnet, often for monetary gain.',
      'Color': 'matrix20'
  },
  'Zeus Panda': {
      'Execution': ['Command-Line Interface', 'PowerShell', 'Scripting'],
      'Persistence': ['Hooking', 'Registry Run Keys / Startup Folder'],
      'Privilege Escalation': ['Hooking', 'Process Injection'],
      'Defense Evasion': ['Deobfuscate/Decode Files or Information', 'File Deletion', 'Indicator Removal on Host', 'Modify Registry', 'Obfuscated Files or Information', 'Process Injection', 'Scripting'],
      'Credential Access': ['Hooking', 'Input Capture'],
      'Discovery': ['File and Directory Discovery', 'Process Discovery', 'Query Registry', 'Security Software Discovery', 'System Information Discovery', 'System Time Discovery'],
      'Lateral Movement': ['Remote File Copy'],
      'Collection': ['Clipboard Data', 'Input Capture', 'Screen Capture'],
      'Command And Control': ['Remote File Copy', 'Standard Application Layer Protocol'],
      'details': 'Zeus Panda is a Trojan designed to steal banking information and other sensitive credentials for exfiltration. Zeus Panda’s original source code was leaked in 2011, allowing threat actors to use its source code as a basis for new malware variants. It is mainly used to target Windows operating systems ranging from Windows XP through Windows 10.',
      'Color': 'matrix21'
  }

};


export const Groups = {
  "APT1": {
      "Execution": ["Command-Line Interface", "Scripting"],
      "Defense Evasion": ["Masquerading", "Scripting"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Account Discovery", "Network Share Discovery", "Process Discovery", "System Network Configuration Discovery", "System Network Connections Discovery", "System Service Discovery"],
      "Lateral Movement": ["Pass the Hash", "Remote Desktop Protocol"],
      "Collection": ["Automated Collection", "Data from local system", "Email Collection"],
      "Exfiltration": ["Data Compressed"],
      "details": "APT1 is a Chinese threat group that has been attributed to the 2nd Bureau of the People’s Liberation Army (PLA) General Staff Department’s (GSD) 3rd Department, commonly known by its Military Unit Cover Designator (MUCD) as Unit 61398.",
      "Color": "groupmatrix1"
  },
  "APT3": {
      "Initial Access": ["Valid Accounts"],
      "Execution": ["Command-Line Interface", "Graphical User Interface", "PowerShell", "Rundll32", "Scheduled Task", "Scripting"],
      "Persistence": ["Accessibility Features", "Account Manipulation", "Create Account", "New Service", "Redundant Access", "Registry Run Keys / Startup Folder", "Scheduled Task"],
      "Privilege Escalation": ["Accessibility Features", "New Service", "Scheduled Task", "Valid Accounts"],
      "Defense Evasion": ["DLL Side-Loading", "File Deletion", "Indicator Removal from Tools", "Obfuscated Files or Information", "Redundant Access", "Rundll32", "Scripting", "Software Packing", "Valid Accounts"],
      "Credential Access": ["Account Manipulation", "Brute Force", "Credential Dumping", "Credentials in Files", "Input Capture"],
      "Discovery": ["Account Discovery", "File and Directory Discovery", "Permission Groups Discovery", "Process Discovery", "Remote System Discovery", "System Information Discovery", "System Network Configuration Discovery", "System Network Connections Discovery", "System Owner/User Discovery"],
      "Lateral Movement": ["Remote Desktop Protocol", "Remote File Copy", "Windows Admin Shares"],
      "Collection": ["Data from Local System", "Data Staged", "Input Capture"],
      "Command And Control": ["Commonly Used Port", "Connection Proxy", "Multi-Stage Channels", "Remote File Copy", "Standard Non-Application Layer Protocol", "Uncommonly Used Port"],
      "Exfiltration": ["Data Compressed", "Exfiltration Over Command and Control Channel"],
      "details": "APT3 is a China-based threat group that researchers have attributed to China's Ministry of State Security. [1] [2] This group is responsible for the campaigns known as Operation Clandestine Fox, Operation Clandestine Wolf, and Operation Double Tap. [1] [3] As of June 2015, the group appears to have shifted from targeting primarily US victims to primarily political organizations in Hong Kong.",
      "Color": "groupmatrix1"
  },
  "APT5": {
      "details": "(APT5)We have observed one APT group, which we call APT5, particularly focused on telecommunications and technology companies. More than half of the organizations we have observed being targeted or breached by APT5 operate in these sectors. Several times, APT5 has targeted organizations and personnel based in Southeast Asia. APT5 has been active since at least 2007. It appears to be a large threat group that consists of several subgroups, often with distinct tactics and infrastructure. APT5 has targeted or breached organizations across multiple industries, but its focus appears to be on telecommunications and technology companies, especially information about satellite communications. APT5 targeted the network of an electronics firm that sells products for both industrial and military applications. The group subsequently stole communications related to the firm’s business relationship with a national military, including inventories and memoranda about specific products they provided. In one case in late 2014, APT5 breached the network of an international telecommunications company. The group used malware with keylogging capabilities to monitor the computer of an executive who manages the company’s relationships with other telecommunications companies.",
      "Color": "matrix23"
  },
  "APT12":{
      "Initial Access": ["Spearphishing Attachment"],
      "Execution": ["Exploitation for Client Execution", "User Execution"],
      "Command And Control": ["Web Service"],
      "Defense Evasion": ["Web Service"],
      "details": "APT12 is a threat group that has been attributed to China. The group has targeted a variety of victims including but not limited to media outlets, high-tech companies, and multiple governments.",
      "Color": "matrix20"
  },
  "APT16": {
      "Lateral Movement": ["Remote Services"],
      "details": "APT16 is a China-based threat group that has launched spearphishing campaigns targeting Japanese and Taiwanese organizations.",
      "Color": "groupmatrix2"
  },
  "APT17": {
      "details": "APT17 is a China-based threat group that has conducted network intrusions against U.S. government entities, the defense industry, law firms, information technology companies, mining companies, and non-government organizations.",
      "Color": "matrix1"},


  "APT18": {
      "Initial Access": ["Accessibility Features", "Bypass User Account Control", "Scheduled Task"],
      "Defense Evasionitial Access": ["External Remote Services", "Valid Accounts"],
      "Execution": ["Command-Line Interface", "Scheduled Task"],
      "Persistence": ["External Remote Services", "Registry Run Keys / Startup Folder", "Scheduled Task", "Valid Accounts"],
      "Privilege Escalation": ["Scheduled Task", "Valid Accounts"],
      "Defense Evasion": ["File Deletion", "Obfuscated File or Information", "Valid Accounts"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["File and Directory Discovery", "System Information Discovery"],
      "Lateral Movement": ["Remote File Copy"],
      "Command And Control": ["Commonly Used Port", "Remote File Copy", "Standard Application Layer Protocol"],
      "Exfiltration": ["Data Compressed"],
      "details": "APT18 is a threat group that has operated since at least 2009 and has targeted a range of industries, including technology, manufacturing, human rights groups, government, and medical.",
      "Color": "groupmatrix3"
  },
  "APT19": {
      "Initial Access": ["Drive-by Compromise", "Spearphishing via Service"],
      "Execution": ["PowerShell", "Regsvr32", "Rundll32", "User Execution"],
      "Persistence": ["Modify Existing Service"],
      "Defense Evasion": ["Deobfuscate/Decode Files or Information", "DLL Side-Loading", "Modify Registry", "Regsvr32", "Rundll32", "Scripting"],
      "Discovery": ["System Network Configuration Discovery", "System Owner/User Discovery"],
      "Command And Control": ["Data Encoding"],
      "details": "APT19 is a Chinese-based threat group that has targeted a variety of industries, including defense, finance, energy, pharmaceutical, telecommunications, high tech, education, manufacturing, and legal services. In 2017, a phishing campaign was used to target seven law and investment firms. [1] Some analysts track APT19 and Deep Panda as the same group, but it is unclear from open source information if the groups are the same.",
      "Color": "groupmatrix4"
  },
  "APT28": {
      "Initial Access": ["Replication Through Removable Media", "Spearphishing Attachment", "Spearphishing Link", "Trusted Relationship", "Valid Accounts"],
      "Execution": ["Command-Line Interface", "Dynamic Data Exchange", "Exploitation for Client Execution", "PowerShell", "Rundll32", "Scripting", "User Execution"],
      "Persistence": ["Bootkit", "Component Object Model Hijacking", "Hidden Files and Directories", "Logon Scripts", "Office Application Startup", "Valid Accounts"],
      "Privilege Escalation": ["Access Token Manipulation", "Exploitation for Privilege Escalation", "Valid Accounts"],
      "Defense Evasion": ["Access Token Manipulation", "Component Object Model Hijacking", "Deobfuscate/Decode Files or Information", "Exploitation for Defense Evasion", "File Deletion", "Hidden Files and Directories", "Indicator Removal on Host", "Obfuscated Files or Information", "Rootkit", "Rundll32", "Scripting", "Template Injection", "Timestomp", "Valid Accounts"],
      "Credential Access": ["Credential Dumping", "Input Capture", "Network Sniffing"],
      "Discovery": ["File and Directory Discovery", "Network Sniffing", "Peripheral Device Discovery", "Process Discovery"],
      "Lateral Movement": ["Exploitation of Remote Services", "Logon Scripts", "Pass the Hash", "Remote File Copy", "Replication Through Removable Media"],
      "Collection": ["Automated Collection", "Data from Information Repositories", "Data from local system", "Data from Removable Media", "Data Staged", "Email Collection", "Input Capture", "Screen Capture"],
      "Command And Control": ["Communication Through Removable Media", "Connection Proxy", "Data Obfuscation", "Remote File Copy", "Standard Application Layer Protocol"],
      "Exfiltration": ["Data Compressed"],
      "details": "APT28 is a threat group that has been attributed to Russia's Main Intelligence Directorate of the Russian General Staff by a July 2018 U.S. Department of Justice indictment. This group reportedly compromised the Hillary Clinton campaign, the Democratic National Committee, and the Democratic Congressional Campaign Committee in 2016 in an attempt to interfere with the U.S. presidential election. APT28 has been active since at least January 2007.",
      "Color": "groupmatrix5"
  },
  "APT29": {
      "Initial Access": ["Spearphishing Attachment", "Spearphishing Link"],
      "Execution": ["Exploitation for Client Execution", "PowerShell", "Rundll32", "Scheduled Task", "Scripting", "User Execution", "Windows Management Instrumentation"],
      "Persistence": ["Accessibility Features", "Registry Run Keys / Startup Folder", "Scheduled Task", "Shortcut Modification", "Windows Management Instrumentation Event Subscription"],
      "Privilege Escalation": ["Bypass User Account Control", "Indicator Removal on Host", "Obfuscated Files or Information", "Rundll32", "Scripting", "Software Packing"],
      "Lateral Movement": ["Pass the Ticket"],
      "Command And Control": ["Commonly Used Port", "Domain Fronting", "Multi-hop Proxy"],
      "details": "APT29 is threat group that has been attributed to the Russian government and has operated since at least 2008. [1] [2] This group reportedly compromised the Democratic National Committee starting in the summer of 2015.",
      "Color": "groupmatrix6"
  },
  "APT30":{
      "details": "APT30 is a threat group suspected to be associated with the Chinese government. [1] While Naikon shares some characteristics with APT30, the two groups do not appear to be exact matches.",
      "Color": "matrix12"
  },
  "APT32": {
      "Initial Access": ["Drive-by Compromise", "Spearphishing Attachment", "Spearphishing Link", "Valid Accounts"],
      "Execution": ["Command-Line Interface", "Exploitation for Client Execution", "Mshta", "PowerShell", "Regsvr32", "Scheduled Task", "Scripting", "Service Execution", "Signed Script Proxy Execution", "User Execution", "Windows Management Instrumentation"],
      "Persistence": ["Hidden Files and Directories", "Modify Existing Service", "New Service", "Office Application Startup", "Registry Run Keys / Startup Folder", "Scheduled Task", "Valid Accounts", "Web Shell"],
      "Privilege Escalation": ["Exploitation for Privilege Escalation", "New Service", "Scheduled Task", "Valid Accounts", "Web Shell"],
      "Defense Evasion": ["Binary Padding", "DLL Side-Loading", "File Deletion", "File Permissions Modification", "Hidden Files and Directories", "Indicator Removal on Host", "Masquerading", "Modify Registry", "Mshta", "NTFS File Attributes", "Obfuscated Files or Information", "Regsvr32", "Scripting", "Signed Script Proxy Execution", "Software Packing", "Timestomp", "Valid Accounts"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Account Discovery", "File and Directory Discovery", "Network Service Scanning", "Query Registry", "Remote System Discovery", "System Information Discovery", "System Network Configuration Discovery", "System Network Connections Discovery", "System Owner/User Discovery"],
      "Lateral Movement": ["Application Deployment Software", "Pass the Hash", "Pass the Ticket", "Remote File Copy", "Windows Admin Shares"],
      "Command And Control": ["Commonly Used Port", "Custom Command and Control Protocol", "Remote File Copy", "Standard Application Layer Protocol", "Uncommonly Used Port"],
      "Exfiltration": ["Data Compressed", "Data Encrypted", "Exfiltration Over Command and Control Channel"],
      "details": "APT32 is a threat group that has been active since at least 2014. The group has targeted multiple private sector industries as well as with foreign governments, dissidents, and journalists with a strong focus on Southeast Asian countries like Vietnam, the Philippines, Laos, and Cambodia. They have extensively used strategic web compromises to compromise victims. The group is believed to be Vietnam-based.",
      "Color": "matrix1"
  },
  "APT33": {
      "Initial Access": ["Spearphishing Link", "Valid Accounts"],
      "Execution": ["Exploitation for Client Execution", "PowerShell", "Scheduled Task", "Scripting", "User Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder", "Scheduled Task", "Valid Accounts"],
      "Privilege Escalation": ["Exploitation for Privilege Escalation", "New Service", "Scheduled Task", "Valid Accounts"],
      "Defense Evasion": ["Execution Guardrails", "Obfuscated Files or Information", "Valid Accounts"],
      "Credential Access": ["Brute Force", "Credential Dumping", "Network Sniffing"],
      "Discovery": ["Network Sniffing"],
      "Lateral Movement": ["Remote File Copy"],
      "Command And Control": ["Commonly Used Port", "Data Encoding", "Remote File Copy", "Standard Application Layer Protocol", "Standard Cryptographic Protocol", "Uncommonly Used Port"],
      "Exfiltration": ["Data Compressed", "Exfiltration Over Alternative Protocol"],
      "details": "APT33 is a suspected Iranian threat group that has carried out operations since at least 2013. The group has targeted organizations across multiple industries in the United States, Saudi Arabia, and South Korea, with a particular interest in the aviation and energy sectors.",
      "Color": "matrix2"
  },
  "APT37": {
      "Initial Access": ["Drive-by Compromise", "Spearphishing Attachment"],
      "Execution": ["Command-Line Interface", "Dynamic Data Exchange", "Execution through API", "Exploitation for Client Execution", "Scripting", "User Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder"],
      "Privilege Escalation": ["Process Injection"],
      "Defense Evasion": ["Code Signing", "Obfuscated Files or Information", "Process Injection", "Scripting", "Web Service"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Process Discovery", "System Information Discovery", "System Owner/User Discovery"],
      "Lateral Movement": ["Remote File Copy"],
      "Collection": ["Audio Capture", "Data from Local System"],
      "Command And Control": ["Commonly Used Port", "Custom Command and Control Protocol", "Remote File Copy", "Standard Application Layer Protocol", "Web Service"],
      "Impact": ["Disk Structure Wipe"],
      "details": "APT37 is a suspected North Korean cyber espionage group that has been active since at least 2012. The group has targeted victims primarily in South Korea, but also in Japan, Vietnam, Russia, Nepal, China, India, Romania, Kuwait, and other parts of the Middle East. APT37 has also been linked to following campaigns between 2016-2018: Operation Daybreak, Operation Erebus, Golden Time, Evil New Year, Are you Happy?, FreeMilk, Northern Korean Human Rights, and Evil New Year 2018.",
      "Color": "matrix3"
  },
  "APT38": {
      "Initial Access": ["Drive-by Compromise"],
      "Execution": ["Command-Line Interface"],
      "Persistence": ["Port Monitors"],
      "Privilege Escalation": ["Port Monitors"],
      "Defense Evasion": ["File Deletion", "Indicator Removal on Host", "Modify Registry", "Software Packing"],
      "Credential Access": ["Input Capture"],
      "Discovery": ["Process Discovery"],
      "Lateral Movement": ["Remote File Copy"],
      "Collection": ["Clipboard Data", "Input Capture"],
      "Command And Control": ["Remote File Copy", "Standard Application Layer Protocol"],
      "Impact": ["Data Destruction", "Data Encrypted for Impact", "Disk Structure Wipe", "Runtime Data Manipulation", "Stored Data Manipulation", "Transmitted Data Manipulation"],
      "details": "APT38 is a financially-motivated threat group that is backed by the North Korean regime. The group mainly targets banks and financial institutions and has targeted more than 16 organizations in at least 13 countries since at least 2014.North Korean group definitions are known to have significant overlap, and the name Lazarus Group is known to encompass a broad range of activity. Some organizations use the name Lazarus Group to refer to any activity attributed to North Korea.[2] Some organizations track North Korean clusters or groups such as Bluenoroff,[3] APT37, and APT38 separately, while other organizations may track some activity associated with those group names by the name Lazarus Group",
      "Color": "matrix4"
  },
  "APT39": {
      "Initial Access": ["Spearphishing Link", "Spearphishing Attachment", "Valid Accounts"],
      "Execution": ["Scheduled Task", "Scripting", "User Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder", "Scheduled Task", "Shortcut Modification", "Valid Accounts", "Web Shell"],
      "Privilege Escalation": ["Scheduled Task", "Valid Accounts", "Web Shell"],
      "Defense Evasion": ["Scripting", "Software Packing", "Valid Accounts"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Network Service Scanning", "System Network Configuration Discovery", "System Owner/User Discovery"],
      "Lateral Movement": ["Remote Desktop Protocol", "Remote Services"],
      "Command And Control": ["Connection Proxy"],
      "Exfiltration": ["Data Compressed"],
      "details": "APT39 is an Iranian cyber espionage group that has been active since at least 2014. They have targeted the telecommunication and travel industries to collect personal information that aligns with Iran's national priorities.",
      "Color": "matrix5"
  },
  "APT41":{
      "Initial Access": ["External Remote Services", "Spearphishing Attachment", "Supply Chain Compromise","Valid Accounts"],
      "Execution": ["Command-Line Interface", "Compiled HTML File", "Exploitation for Client Execution", "PowerShell", "Windows Management Instrumentation"],
      "Persistence": ["Accessibility Features", "Bootkit", "Create Account", "External Remote Services", "Modify Existing Service", "Registry Run Keys / Startup Folder", "Scheduled Task", "Valid Accounts"],
      "Privilege Escalation": ["Accessibility Features", "Process Injection", "Scheduled Task", "Valid Accounts"],
      "Defense Evasion": ["Clear Command History","Code Signing", "Compiled HTML File", "Connection Proxy", "DLL Side-Loading", "File Deletion","Indicator Removal on Host", "Masquerading", "Modify Registry", "Process Injection", "Rootkit", "Valid Accounts", "Web Service"],
      "Credential Access": ["Brute Force", "Credential Dumping", "Input Capture"],
      "Discovery": ["Network Service Scanning","Network Share Discovery", "System Network Configuration Discovery","System Network Connections Discovery", "System Owner/User Discovery"],
      "Lateral Movement": ["Remote Desktop Protocol"],
      "Collection": [ "Input Capture"],
      "Command And Control": ["Connection Proxy","Domain Generation Algorithms", "Fallback Channels", "Standard Application Layer Protocol", "Web Service"],
      "Exfiltration": ["Data Compressed"],
      "Impact": ["Data Encrypted for Impact", "Resource Hijacking"],
      "details": "APT41 is a group that carries out Chinese state-sponsored espionage activity in addition to financially motivated activity. APT41 has been active since as early as 2012. The group has been observed targeting healthcare, telecom, technology, and video game industries in 14 countries.",
      "Color": "matrix5"
  },
  "Axiom": {
      "Initial Access": ["Exploit Public-Facing Application"],
      "Persistence": ["Accessibility Features"],
      "Privilege Escalation": ["Accessibility Features"],
      "Credential Access": ["Credential Dumping"],
      "Lateral Movement": ["Remote Desktop Protocol"],
      "Command And Control": ["Data Obfuscation"],
      "details": "Axiom is a cyber espionage group suspected to be associated with the Chinese government. It is responsible for the Operation SMN campaign. [1] Though both this group and Winnti Group use the malware Winnti, the two groups appear to be distinct based on differences in reporting on the groups' TTPs and targeting.",
      "Color": "matrix6"
  },
  "BRONZE_BUTLER": {
      "Initial Access": ["Drive-by Compromise", "Spearphishing Attachment"],
      "Execution": ["Command-Line Interface", "Exploitation for Client Execution", "PowerShell", "Scheduled Task", "Scripting", "User Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder", "Scheduled Task"],
      "Privilege Escalation": ["Bypass User Account Control", "Scheduled Task"],
      "Defense Evasion": ["Binary Padding", "Bypass User Account Control", "Deobfuscate/Decode Files or Information", "File Deletion", "Masquerading", "Scripting", "Web Service"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Account Discovery", "File and Directory Discovery", "Remote System Discovery", "System Time Discovery"],
      "Lateral Movement": ["Pass the Ticket", "Remote File Copy"],
      "Collection": ["Data from Local System", "Data from Network Shared Drive", "Screen Capture"],
      "Command And Control": ["Custom Cryptographic Protocol", "Data Encoding", "Remote File Copy", "Standard Application Layer Protocol", "Standard Cryptographic Protocol", "Web Service"],
      "Exfiltration": ["Data Compressed", "Data Encrypted"],
      "details": "BRONZE BUTLER is a cyber espionage group with likely Chinese origins that has been active since at least 2008. The group primarily targets Japanese organizations, particularly those in government, biotechnology, electronics manufacturing, and industrial chemistry.",
      "Color": "matrix7"
  },
  "BlackOasis": {
      "Defense Evasion": ["Obfuscated Files or Information"],
      "details": "BlackOasis is a Middle Eastern threat group that is believed to be a customer of Gamma Group. The group has shown interest in prominent figures in the United Nations, as well as opposition bloggers, activists, regional news correspondents, and think tanks. [1] [2] A group known by Microsoft as NEODYMIUM is reportedly associated closely with BlackOasis operations, but evidence that the group names are aliases has not been identified.",
      "Color": "matrix25"
  },
  "Carbanak_Group": {
      "Initial Access": ["Valid Accounts"],
      "Execution": ["Rundll32"],
      "Persistence": ["New Service", "Valid Accounts"],
      "Privilege Escalation": ["New Service", "Valid Accounts"],
      "Defense Evasion": ["Disabling Security Tools", "Masquerading", "Rundll32", "Valid Accounts", "Web Service"],
      "Command And Control": ["Remote Access Tools", "Web Service"],
      "details": "Carbanak is a threat group that mainly targets banks. It also refers to malware of the same name (Carbanak). It is sometimes referred to as FIN7, but these appear to be two groups using the same Carbanak malware and are therefore tracked separately",
      "Color": "matrix8"
  },
  "Cleaver": {
      "Credential Access": ["Credential Dumping"],
      "details": "Cleaver is a threat group that has been attributed to Iranian actors and is responsible for activity tracked as Operation Cleaver. [1] Strong circumstantial evidence suggests Cleaver is linked to Threat Group 2889 (TG-2889).",
      "Color": "matrix9"
  },

  "Cobalt_Group": {
      "Initial Access": ["Spearphishing Link", "Spearphishing Attachment"],
      "Execution": ["CMSTP", "Command-Line Interface", "Dynamic Data Exchange", "Exploitation for Client Execution", "PowerShell", "Regsvr32", "Scheduled Task", "Scripting", "Signed Binary Proxy Execution", "User Execution", "XSL Script Processing"],
      "Persistence": ["Logon Scripts", "New Service", "Redundant Access", "Registry Run Keys / Startup Folder", "Scheduled Task"],
      "Privilege Escalation": ["Bypass User Account Control", "Exploitation for Privilege Escalation", "New Service", "Process Injection", "Scheduled Task"],
      "Defense Evasion": ["Bypass User Account Control", "CMSTP", "File Deletion", "Obfuscated Files or Information", "Process Injection", "Redundant Access", "Regsvr32", "Scripting", "Signed Binary Proxy Execution", "XSL Script Processing"],
      "Discovery": ["Network Service Scanning", "Security Software Discovery"],
      "Lateral Movement": ["Logon Scripts", "Remote Desktop Protocol", "Remote File Copy"],
      "Command And Control": ["Remote Access Tools", "Remote File Copy", "Standard Application Layer Protocol", "Standard Cryptographic Protocol"],
      "details": "Cobalt Group is a financially motivated threat group that has primarily targeted financial institutions. The group has conducted intrusions to steal money via targeting ATM systems, card processing, payment systems and SWIFT systems. Cobalt Group has mainly targeted banks in Eastern Europe, Central Asia, and Southeast Asia. One of the alleged leaders was arrested in Spain in early 2018, but the group still appears to be active. The group has been known to target organizations in order to use their access to then compromise additional victims. Reporting indicates there may be links between Cobalt Group and both the malware Carbanak and the group Carbanak. ",
      "Color": "matrix10"
  },
  "CopyKittens": {
      "Execution": ["PowerShell", "Rundll32"],
      "Defense Evasion": ["Code Signing", "Rundll32"],
      "Exfiltration": ["Data Compressed", "Data Encrypted"],
      "details": "CopyKittens is an Iranian cyber espionage group that has been operating since at least 2013. It has targeted countries including Israel, Saudi Arabia, Turkey, the U.S., Jordan, and Germany. The group is responsible for the campaign known as Operation Wilted Tulip.",
      "Color": "matrix11"
  },
  "Charming_Kitten":{
      "details": "Charming Kitten is an Iranian cyber espionage group that has been active since approximately 2014. They appear to focus on targeting individuals of interest to Iran who work in academic research, human rights, and media, with most victims having been located in Iran, the US, Israel, and the UK. Charming Kitten usually tries to access private email and Facebook accounts, and sometimes establishes a foothold on victim computers as a secondary objective. The group's TTPs overlap extensively with another group, Magic Hound, resulting in reporting that may not distinguish between the two groups' activities.",
      "Color": "matrix20"
  },
  "Dark_Caracal": {
      "Initial Access": ["Drive-by Compromise", "Spearphishing via Service"],
      "Execution": ["Compiled HTML File", "Scripting", "User Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder"],
      "Defense Evasion": ["Compiled HTML File", "Obfuscated Files or Information", "Scripting", "Software Packing"],
      "Discovery": ["File and Directory Discovery"],
      "Collection": ["Data from Local System", "Screen Capture"],
      "Command And Control": ["Standard Application Layer Protocol"],
      "details": "Dark Caracal is threat group that has been attributed to the Lebanese General Directorate of General Security (GDGS) and has operated since at least 2012",
      "Color": "matrix12"
  },
  "DarkHydrus": {
      "Initial Access": ["Spearphishing Attachment"],
      "Execution": ["PowerShell", "User Execution"],
      "Defense Evasion": ["Template Injection"],
      "Credential Access": ["Forced Authentication"],
      "details": "DarkHydrus is a threat group that has targeted government agencies and educational institutions in the Middle East since at least 2016. The group heavily leverages open-source tools and custom payloads for carrying out attacks.",
      "Color": "matrix13"
  },
  "Darkhotel": {
      "Initial Access": ["Drive-by Compromise", "Replication Through Removable Media", "Spearphishing Attachment"],
      "Execution": ["Scripting", "User Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder", "Shortcut Modification"],
      "Defense Evasion": ["Code Signing", "Deobfuscate/Decode Files or Information", "Obfuscated Files or Information", "Scripting"],
      "Credential Access": ["Input Capture"],
      "Discovery": ["Process Discovery", "Security Software Discovery", "System Information Discovery", "System Network Configuration Discovery"],
      "Lateral Movement": ["Replication Through Removable Media", "Taint Shared Content"],
      "Collection": ["Input Capture"],
      "details": "Darkhotel is a threat group that has been active since at least 2004. The group has conducted activity on hotel and business center Wi‑Fi and physical connections as well as peer-to-peer and file sharing networks. The actors have also conducted spearphishing.",
      "Color": "matrix14"
  },
  "Deep_Panda": {
      "Execution": ["PowerShell", "Regsvr32", "Scripting", "Windows Management Instrumentation"],
      "Persistence": ["Accessibility Features", "Web Shell"],
      "Privilege Escalation": ["Accessibility Features", "Web Shell"],
      "Defense Evasion": ["Indicator Removal from Tools", "Regsvr32", "Scripting"],
      "Discovery": ["Process Discovery", "Remote System Discovery"],
      "Lateral Movement": ["Windows Admin Shares"],
      "details": "Deep Panda is a suspected Chinese threat group known to target many industries, including government, defense, financial, and telecommunications. [1] The intrusion into healthcare company Anthem has been attributed to Deep Panda. [2] This group is also known as Shell Crew, WebMasters, KungFu Kittens, and PinkPanther. [3] Deep Panda also appears to be known as Black Vine based on the attribution of both group names to the Anthem intrusion. [4] Some analysts track Deep Panda and APT19 as the same group, but it is unclear from open source information if the groups are the same.",
      "Color": "matrix15"
  },
  "Dragonfly":{
      "details": "Dragonfly is a cyber espionage group that has been active since at least 2011. They initially targeted defense and aviation companies but shifted to focus on the energy sector in early 2013. They have also targeted companies related to industrial control systems.A similar group emerged in 2015 and was identified by Symantec as Dragonfly 2.0. There is debate over the extent of the overlap between Dragonfly and Dragonfly 2.0, but there is sufficient evidence to lead to these being tracked as two separate groups.",
      "Color": "matrix22"
  },
  "Dragonfly_2_0": {
      "Initial Access": ["Drive-by Compromise", "External Remote Services", "Spearphishing Attachment", "Spearphishing Link", "Valid Accounts"],
      "Execution": ["Command-Line Interface", "PowerShell", "Scheduled Task", "Scripting", "User Execution"],
      "Persistence": ["Account Manipulation", "Create Account", "External Remote Services", "Registry Run Keys / Startup Folder", "Scheduled Task", "Shortcut Modification", "Valid Accounts", "Web Shell"],
      "Privilege Escalation": ["Scheduled Task", "Valid Accounts", "Web Shell"],
      "Defense Evasion": ["Disabling Security Tools", "File Deletion", "Indicator Removal on Host", "Masquerading", "Modify Registry", "Scripting", "Template Injection", "Valid Accounts"],
      "Credential Access": ["Account Manipulation", "Brute Force", "Credential Dumping", "Forced Authentication"],
      "Discovery": ["Account Discovery", "File and Directory Discovery", "Network Share Discovery", "Permission Groups Discovery", "Remote System Discovery", "System Network Configuration Discovery", "System Owner/User Discovery"],
      "Lateral Movement": ["Remote Desktop Protocol", "Remote File Copy"],
      "Collection": ["Data from Local System", "Data Staged", "Email Collection", "Screen Capture"],
      "Command And Control": ["Commonly Used Port", "Remote File Copy", "Standard Application Layer Protocol"],
      "Exfiltration": ["Data Compressed"],
      "details": "Dragonfly 2.0 is a suspected Russian group that has targeted government entities and multiple U.S. critical infrastructure sectors since at least March 2016. [1] [2] There is debate over the extent of overlap between Dragonfly 2.0 and Dragonfly, but there is sufficient evidence to lead to these being tracked as two separate groups.",
      "Color": "matrix16"
  },
  "DragonOK":{
      "details": "DragonOK is a threat group that has targeted Japanese organizations with phishing emails. Due to overlapping TTPs, including similar custom tools, DragonOK is thought to have a direct or indirect relationship with the threat group Moafee. [1] It is known to use a variety of malware, including Sysget/HelloBridge, PlugX, PoisonIvy, FormerFirstRat, NFlog, and NewCT.",
      "Color": "matrix2"
  },
  "Dust_Storm": {
      "Defense Evasion": ["Obfuscated Files or Information"],
      "Discovery": ["File and Directory Discovery"],
      "Collection": ["Data from Local System"],
      "details": "Dust Storm is a threat group that has targeted multiple industries in Japan, South Korea, the United States, Europe, and several Southeast Asian countries.",
      "Color": "matrix17"
  },
  "Elderwood": {
      "Initial Access": ["Drive-by Compromise", "Spearphishing Attachment", "Spearphishing Link", "Supply Chain Compromise"],
      "Execution": ["Exploitation for Client Execution", "User Execution"],
      "Defense Evasion": ["Obfuscated Files or Information", "Software Packing"],
      "Lateral Movement": ["Remote File Copy"],
      "Command And Control": ["Remote File Copy"],
      "details": "Elderwood is a suspected Chinese cyber espionage group that was reportedly responsible for the 2009 Google intrusion known as Operation Aurora. [1] The group has targeted defense organizations, supply chain manufacturers, human rights and nongovernmental organizations (NGOs), and IT service providers.",
      "Color": "matrix18"
  },
  "Equation": {
      "Persistence": ["Component Firmware"],
      "Defense Evasion": ["Component Firmware", "Execution Guardrails"],
      "Discovery": ["Peripheral Device Discovery"],
      "details": "Equation is a sophisticated threat group that employs multiple remote access tools. The group is known to use zero-day exploits and has developed the capability to overwrite the firmware of hard disk drives.",
      "Color": "matrix19"
  },
  "FIN10": {
      "Initial Access": ["Valid Accounts"],
      "Execution": ["PowerShell", "Scheduled Task", "Scripting"],
      "Persistence": ["Registry Run Keys / Startup Folder", "Scheduled Task", "Valid Accounts"],
      "Privilege Escalation": ["Scheduled Task", "Valid Accounts"],
      "Defense Evasion": ["File Deletion", "Scripting", "Template Injection", "Valid Accounts"],
      "Discovery": ["System Owner/User Discovery"],
      "Lateral Movement": ["Remote Desktop Protocol", "Remote File Copy"],
      "Command And Control": ["Remote File Copy"],
      "details": "FIN10 is a financially motivated threat group that has targeted organizations in North America since at least 2013 through 2016. The group uses stolen data exfiltrated from victims to extort organizations. ",
      "Color": "matrix20"
  },
  "FIN4": {
      "Initial Access": ["Spearphishing Attachment", "Spearphishing Link", "Valid Accounts"],
      "Execution": ["Scripting", "User Execution"],
      "Persistence": ["Valid Accounts"],
      "Privilege Escalation": ["Valid Accounts"],
      "Defense Evasion": ["Scripting", "Valid Accounts"],
      "Credential Access": ["Input Capture", "Input Prompt"],
      "Collection": ["Email Collection", "Input Capture"],
      "Command And Control": ["Multi-hop Proxy", "Standard Application Layer Protocol"],
      "details": "FIN4 is a financially-motivated threat group that has targeted confidential information related to the public financial market, particularly regarding healthcare and pharmaceutical companies, since at least 2013.[1][2] FIN4 is unique in that they do not infect victims with typical persistent malware, but rather they focus on capturing credentials authorized to access email and other non-public correspondence.",
      "Color": "matrix21"
  },
  "FIN5": {
      "Initial Access": ["External Remote Services", "Valid Accounts"],
      "Execution": ["Scripting"],
      "Persistence": ["External Remote Services", "Redundant Access", "Valid Accounts"],
      "Privilege Escalation": ["Valid Accounts"],
      "Defense Evasion": ["File Deletion", "Indicator Removal on Host", "Redundant Access", "Scripting", "Valid Accounts"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Remote System Discovery"],
      "Collection": ["Automated Collection", "Data Staged"],
      "details": "FIN5 is a financially motivated threat group that has targeted personally identifiable information and payment card information. The group has been active since at least 2008 and has targeted the restaurant, gaming, and hotel industries. The group is made up of actors who likely speak Russian.",
      "Color": "matrix22"
  },
  "FIN6": {
      "Initial Access": ["Valid Accounts"],
      "Execution": ["PowerShell", "Scheduled Task", "Scripting", "Service Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder", "Scheduled Task", "Valid Accounts"],
      "Privilege Escalation": ["Exploitation for Privilege Escalation", "Scheduled Task", "Valid Accounts"],
      "Defense Evasion": ["Masquerading", "Scripting", "Valid Accounts", "Web Service"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Account Discovery", "Network Service Scanning", "Permission Groups Discovery", "Remote System Discovery"],
      "Lateral Movement": ["Remote Desktop Protocol"],
      "Collection": ["Automated Collection", "Data Staged"],
      "Command And Control": ["Standard Application Layer Protocol", "Standard Cryptographic Protocol", "Web Service"],
      "Exfiltration": ["Data Compressed", "Data Encrypted"],
      "details": "FIN6 is a cyber crime group that has stolen payment card data and sold it for profit on underground marketplaces. This group has aggressively targeted and compromised point of sale (PoS) systems in the hospitality and retail sectors.",
      "Color": "matrix23"
  },
  "FIN7": {
      "Initial Access": ["Spearphishing Attachment"],
      "Execution": ["Command-Line Interface", "Dynamic Data Exchange", "Mshta", "PowerShell", "Scheduled Task", "Scripting", "User Execution"],
      "Persistence": ["Application Shimming", "New Service", "Registry Run Keys / Startup Folder", "Scheduled Task", "Shortcut Modification"],
      "Privilege Escalation": ["Application Shimming", "New Service", "Scheduled Task"],
      "Defense Evasion": ["Code Signing", "Masquerading", "Mshta", "Obfuscated Files or Information", "Scripting", "Virtualization/Sandbox Evasion", "Web Service"],
      "Discovery": ["Virtualization/Sandbox Evasion"],
      "Lateral Movement": ["Remote File Copy"],
      "Collection": ["Screen Capture", "Video Capture"],
      "Command And Control": ["Commonly Used Port", "Remote File Copy", "Standard Application Layer Protocol", "Web Service"],
      "details": "FIN7 is a financially-motivated threat group that has primarily targeted the U.S. retail, restaurant, and hospitality sectors since mid-2015. They often use point-of-sale malware. A portion of FIN7 was run out of a front company called Combi Security. FIN7 is sometimes referred to as Carbanak Group, but these appear to be two groups using the same Carbanak malware and are therefore tracked separately.",
      "Color": "matrix24"
  },
  "FIN8": {
      "Initial Access": ["Spearphishing Attachment", "Spearphishing Link", "Valid Accounts"],
      "Execution": ["Command-Line Interface", "PowerShell", "Scheduled Task", "Scripting", "User Execution", "Windows Management Instrumentation"],
      "Persistence": ["Scheduled Task", "Valid Accounts"],
      "Privilege Escalation": ["Exploitation for Privilege Escalation", "Scheduled Task", "Valid Accounts"],
      "Defense Evasion": [ "File Deletion", "Indicator Removal on Host", "Modify Registry", "Obfuscated Files or Information", "Scripting", "Valid Accounts"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Remote System Discovery", "Security Software Discovery"],
      "Lateral Movement": ["Remote Desktop Protocol", "Remote File Copy", "Windows Admin Shares"],
      "Collection": ["Data Staged"],
      "Command And Control": ["Commonly Used Port", "Remote File Copy", "Standard Cryptographic Protocol"],
      "Exfiltration": ["Data Compressed", "Exfiltration Over Alternative Protocol"],
      "details": "FIN8 is a financially motivated threat group known to launch tailored spearphishing campaigns targeting the retail, restaurant, and hospitality industries. ",
      "Color": "matrix25"
  },
  "GCMAN": {
      "Lateral Movement": ["Remote Services"],
      "details": "GCMAN is a threat group that focuses on targeting banks for the purpose of transferring money to e-currency services.",
      "Color": "matrix26"
  },
  "Gallmaker": {
      "Initial Access": ["Spearphishing Attachment"],
      "Execution": ["Dynamic Data Exchange", "PowerShell", "Scripting", "User Execution"],
      "Defense Evasion": ["Obfuscated Files or Information", "Scripting"],
      "Exfiltration": ["Data Compressed"],
      "details": "Gallmaker is a cyberespionage group that has targeted victims in the Middle East and has been active since at least December 2017. The group has mainly targeted victims in the defense, military, and government sectors.",
      "Color": "matrix27"
  },
  "Gamaredon_Group": {
      "Execution": ["Scripting"],
      "Defense Evasion": ["Scripting"],
      "Discovery": ["Peripheral Device Discovery", "System Information Discovery", "System Owner/User Discovery"],
      "Lateral Movement": ["Remote File Copy"],
      "Collection": ["Data from Removable Media"],
      "Command And Control": ["Remote File Copy", "Standard Application Layer Protocol"],
      "Exfiltration": ["Exfiltration Over Command and Control Channel"],
      "details": "Gamaredon Group is a threat group that has been active since at least 2013 and has targeted individuals likely involved in the Ukrainian government",
      "Color": "matrix28"
  },
  "Gorgon_Group": {
      "Initial Access": ["Spearphishing Attachment"],
      "Execution": ["Command-Line Interface", "Execution through API", "PowerShell", "Scripting", "User Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder", "Shortcut Modification"],
      "Privilege Escalation": ["Process Injection"],
      "Defense Evasion": ["Deobfuscate/Decode Files or Information", "Disabling Security Tools", "Modify Registry", "Process Hollowing", "Process Injection", "Scripting"],
      "Lateral Movement": ["Remote File Copy"],
      "Command And Control": ["Remote File Copy", "Uncommonly Used Port"],
      "details": "Gorgon Group is a threat group consisting of members who are suspected to be Pakistan-based or have other connections to Pakistan. The group has performed a mix of criminal and targeted attacks, including campaigns against government organizations in the United Kingdom, Spain, Russia, and the United States.",
      "Color": "matrix29"
  },
  "Group5": {
      "Defense Evasion": ["File Deletion", "Obfuscated Files or Information", "Software Packing"],
      "Credential Access": ["Input Capture"],
      "Collection": ["Input Capture", "Screen Capture"],
      "Command And Control": ["Uncommonly Used Port"],
      "details": "Group5 is a threat group with a suspected Iranian nexus, though this attribution is not definite. The group has targeted individuals connected to the Syrian opposition via spearphishing and watering holes, normally using Syrian and Iranian themes. Group5 has used two commonly available remote access tools (RATs), njRAT and NanoCore, as well as an Android RAT, DroidJack.",
      "Color": "matrix30"
  },
  "Honeybee": {
      "Execution": ["Command-Line Interface", "Scripting", "Service Execution"],
      "Persistence": ["AppCert DLLs", "Modify Existing Service", "Registry Run Keys / Startup Folder"],
      "Privilege Escalation": ["AppCert DLLs", "Bypass User Account Control", "Process Injection"],
      "Defense Evasion": ["Bypass User Account Control", "Code Signing", "Deobfuscate/Decode Files or Information", "File Deletion", "Modify Registry", "Obfuscated Files or Information", "Process Injection", "Scripting"],
      "Discovery": ["File and Directory Discovery", "Process Discovery", "System Information Discovery"],
      "Collection": ["Data from Local System", "Data Staged"],
      "Command And Control": ["Standard Application Layer Protocol"],
      "Exfiltration": ["Automated Exfiltration", "Data Compressed", "Data Encrypted"],
      "details": "Honeybee is a campaign led by an unknown actor that targets humanitarian aid organizations and has been active in Vietnam, Singapore, Argentina, Japans, Indonesia, and Canada. It has been an active operation since August of 2017 and as recently as February 2018.",
      "Color": "matrix1"
  },
  "Ke3chang": {
      "Initial Access": ["External Remote Services"],
      "Execution": ["Command-Line Interface", "Scripting", "Service Execution"],
      "Persistence": ["External Remote Services", "New Service", "Registry Run Keys / Startup Folder"],
      "Privilege Escalation": ["New Service"],
      "Defense Evasion": ["Masquerading", "Scripting"],
      "Credential Access": ["Credential Dumping", "Input Capture"],
      "Discovery": ["Account Discovery", "File and Directory Discovery", "Permission Groups Discovery", "Process Discovery", "Remote System Discovery", "System Information Discovery", "System Network Configuration Discovery", "System Network Connections Discovery", "System Service Discovery"],
      "Lateral Movement": ["Pass the Ticket", "Windows Admin Shares"],
      "Collection": ["Data from Information Repositories", "Data from Local System", "Email Collection", "Input Capture"],
      "Command And Control": ["Standard Application Layer Protocol"],
      "Exfiltration": ["Data Compressed", "Data Encrypted", "Exfiltration Over Command and Control Channel"],
      "details": "Ke3chang is a threat group attributed to actors operating out of China. Ke3chang has targeted several industries, including oil, government, military, and more.",
      "Color": "matrix2"
  },
  "Kimsuky": {
      "Initial Access": ["Spearphishing Attachment", "Spearphishing Link"],
      "Execution": ["Mshta", "PowerShell"],
      "Persistence": ["Browser Extensions", "Change Default File Association", "New Service", "Registry Run Keys / Startup Folder"],
      "Privilege Escalation": ["New Service", "Process Injection"],
      "Defense Evasion": ["Disabling Security Tools", "File Deletion", "Mshta", "Process Injection"],
      "Credential Access": ["Credentials in Files", "Input Capture"],
      "Discovery": ["File and Directory Discovery", "System Information Discovery"],
      "Lateral Movement": ["Pass the Ticket", "Windows Admin Shares"],
      "Collection": ["Data from Local System", "Input Capture"],
      "Command And Control": ["Remote Access Tools"],
      "Exfiltration": ["Data Encrypted", "Exfiltration Over Command and Control Channel"],
      "details": "Kimsuky is a North Korean-based threat group that has been active since at least September 2013. The group focuses on targeting Korean think tank as well as DPRK/nuclear-related targets. The group was attributed as the actor behind the Korea Hydro & Nuclear Power Co. compromise.",
      "Color": "matrix19  "
  },
  "Lazarus_Group": {
      "Initial Access": ["Drive-by Compromise", "Spearphishing Attachment"],
      "Execution": ["Command-Line Interface", "Compiled HTML File", "Exploitation for Client Execution", "Scripting", "User Execution", "Windows Management Instrumentation"],
      "Persistence": ["Account Manipulation", "Bootkit", "Hidden Files and Directories", "New Service", "Registry Run Keys / Startup Folder", "Shortcut Modification"],
      "Privilege Escalation": ["Access Token Manipulation", "New Service", "Process Injection"],
      "Defense Evasion": ["Access Token Manipulation", "Compiled HTML File", "Disabling Security Tools", "File Deletion", "Hidden Files and Directories", "Obfuscated Files or Information", "Process Injection", "Scripting", "Timestomp"],
      "Credential Access": ["Account Manipulation", "Brute Force", "Credential Dumping", "Input Capture"],
      "Discovery": ["Application Window Discovery", "File and Directory Discovery", "Process Discovery", "Query Registry", "System Information Discovery", "System Network Configuration Discovery", "System Network Owner/User Discovery", "System Time Discovery"],
      "Lateral Movement": ["Remote Desktop Protocol", "Remote File Copy", "Windows Admin Shares"],
      "Collection": ["Data from Local System", "Data Staged", "Input Capture"],
      "Command And Control": ["Commonly Used Port", "Connection Proxy", "Custom Cryptographic Protocol", "Data Encoding", "Fallback Channels", "Multiband Communication", "Remote File Copy", "Standard Application Layer Protocol", "Standard Cryptographic Protocol", "Uncommonly Used Port"],
      "Exfiltration": ["Data Compressed", "Data Encrypted", "Exfiltration Over Alternative Protocol", "Exfiltration Over Command and Control Channel"],
      "Impact": ["Data Destruction", "Disk Content Wipe", "Disk Structure wipe", "Resource Hijacking", "Service Stop"],
      "details": "Lazarus Group is a threat group that has been attributed to the North Korean government.[1] The group has been active since at least 2009 and was reportedly responsible for the November 2014 destructive wiper attack against Sony Pictures Entertainment as part of a campaign named Operation Blockbuster by Novetta. Malware used by Lazarus Group correlates to other reported campaigns, including Operation Flame, Operation 1Mission, Operation Troy, DarkSeoul, and Ten Days of Rain. [2] In late 2017, Lazarus Group used KillDisk, a disk-wiping tool, in an attack against an online casino based in Central America.North Korean group definitions are known to have significant overlap, and the name Lazarus Group is known to encompass a broad range of activity. Some organizations use the name Lazarus Group to refer to any activity attributed to North Korea.[1] Some organizations track North Korean clusters or groups such as Bluenoroff,[4] APT37, and APT38 separately, while other organizations may track some activity associated with those group names by the name Lazarus Group.",
      "Color": "matrix3"
  },
  "Leafminer": {
      "Initial Access": ["Drive-by Compromise"],
      "Execution": ["Scripting"],
      "Persistence": ["Create Account", "Redundant Access"],
      "Defense Evasion": ["Obfuscated Files or Information", "Process Injection", "Redundant Access", "Scripting"],
      "Credential Access": ["Brute Force", "Credential Dumping"],
      "Discovery": ["File and Directory Discovery", "Network Service Scanning", "Remote System Discovery"],
      "Collection": ["Email Collection"],
      "details": "Leafminer is an Iranian threat group that has targeted government organizations and business entities in the Middle East since at least early 2017.",
      "Color": "matrix4"
  },
  "Leviathan": {
      "Initial Access": ["Spearphishing Attachment", "Spearphishing Link", "Valid Accounts"],
      "Execution": ["Command-Line Interface", "Exploitation for Client Execution", "PowerShell", "Regsvr32", "Scripting", "User Execution", "Windows Management Instrumentation"],
      "Persistence": ["BITS Jobs", "Registry Run Keys / Startup Folder", "Shortcut Modification", "Valid Accounts", "Web Shell", "Windows Management Instrumentation Event Subscription"],
      "Privilege Escalation": [ "Valid Accounts", "Web Shell"],
      "Defense Evasion": ["Binary Padding", "BITS Jobs", "Code Signing", "Deobfuscate/Decode Files or Information", "Obfuscated Files or Information", "Regsvr32", "Scripting", "Valid Accounts", "Web Service"],
      "Credential Access": ["Credential Dumping"],
      "Lateral Movement": ["Remote Desktop Protocol", "Remote File Copy", "Remote Services"],
      "Collection": ["Data Staged"],
      "Command And Control": ["Remote File Copy", "Web Service"],
      "details": "Leviathan is a cyber espionage group that has been active since at least 2013. The group generally targets defense and government organizations, but has also targeted a range of industries including engineering firms, shipping and transportation, manufacturing, defense, government offices, and research universities in the United States, Western Europe, and along the South China Sea",
      "Color": "matrix5"
  },
  "Lotus Blossom":{
      "details": "Lotus Blossom is a threat group that has targeted government and military organizations in Southeast Asia.",
      "Color": "matrix24"
  },
  "Machete": {
      "Initial Access": ["Spearphishing Attachment", "Spearphishing Link"],
      "Execution": [ "Scheduled Task", "Scripting", "User Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder", "Scheduled Task"],
      "Privilege Escalation": [ "Scheduled Task"],
      "Defense Evasion": ["Obfuscated Files or Information", "Scripting"],
      "Collection": ["Data from Removable Media" ,"Data Staged"],
      "Command And Control": ["Commonly Used Port", "Standard Application Layer Protocol", "Standard Cryptographic Protocol"],
      "details": "Machete is a group that has been active since at least 2010, targeting high-profile government entities in Latin American countries.",
      "Color": "matrix25"
  },
  "Magic_Hound": {
      "Initial Access": ["Spearphishing Attachment", "Spearphishing Link", "Spearphishing via Service"],
      "Execution": ["Command-Line Interface", "PowerShell", "Regsvr32", "Scripting", "User Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder"],
      "Defense Evasion": ["File Deletion", "Obfuscated Files or Information", "Scripting", "Web Service"],
      "Credential Access": ["Credential Dumping", "Input Capture"],
      "Discovery": ["File and Directory Discovery", "Process Discovery",  "System Information Discovery", "System Network Configuration Discovery", "System Owner/User Discovery"],
      "Lateral Movement": ["Remote File Copy"],
      "Collection": ["Email Collection", "Input Capture", "Screen Capture"],
      "Command And Control": ["Commonly Used Port", "Remote File Copy", "Standard Application Layer Protocol", "Uncommonly Used Port", "Web Service"],
      "Exfiltration": ["Data Compressed"],
      "details": "Magic Hound is an Iranian-sponsored threat group operating primarily in the Middle East that dates back as early as 2014. The group behind the campaign has primarily targeted organizations in the energy, government, and technology sectors that are either based or have business interests in Saudi Arabia.",
      "Color": "matrix1"
  },
  "Moafee": {
      "Defense Evasion": ["Binary Padding"],
      "details": "Moafee is a threat group that appears to operate from the Guandong Province of China. Due to overlapping TTPs, including similar custom tools, Moafee is thought to have a direct or indirect relationship with the threat group DragonOK.",
      "Color": "matrix2"
  },
  "Molerats": {
      "Defense Evasion": ["Code Signing"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Process Discovery"],
      "details": "Molerats is a politically-motivated threat group that has been operating since 2012. The group's victims have primarily been in the Middle East, Europe, and the United States.",
      "Color": "matrix3"
  },
  "MuddyWater": {
      "Initial Access": ["Spearphishing Attachment"],
      "Execution": ["CMSTP", "Command-Line Interface", "Dynamic Data Exchange", "Mshta", "PowerShell", "Rundll32", "Scripting", "User Execution", "Windows Management Instrumentation"],
      "Persistence": ["Registry Run Keys / Startup Folder"],
      "Privilege Escalation": ["Bypass User Account Control"],
      "Defense Evasion": ["Bypass User Account Control", "CMSTP", "Compile After Delivery", "Deobfuscate/Decode Files or Information", "Masquerading", "Mshta", "Obfuscated Files or Information", "Rundll32", "Scripting"],
      "Credential Access": ["Credential Dumping", "Credentials in Files"],
      "Discovery": ["File and Directory Discovery", "Process Discovery", "Security Software Discovery", "System Information Discovery", "System Network Configuration Discovery", "System Owner/User Discovery"],
      "Lateral Movement": ["Distributed Component Object Model", "Remote File Copy"],
      "Collection": ["Screen Capture"],
      "Command And Control": ["Connection Proxy", "Remote File Copy"],
      "Exfiltration": ["Data Compressed"],
      "details": "MuddyWater is an Iranian threat group that has primarily targeted Middle Eastern nations, and has also targeted European and North American nations. The group's victims are mainly in the telecommunications, government (IT services), and oil sectors. Activity from this group was previously linked to FIN7, but the group is believed to be a distinct group possibly motivated by espionage.",
      "Color": "matrix4"
  },
  "Naikon": {
      "Discovery": ["Security Software Discovery", "System Network Configuration Discovery"],
      "details": "Naikon is a threat group that has focused on targets around the South China Sea. [1] The group has been attributed to the Chinese People’s Liberation Army’s (PLA) Chengdu Military Region Second Technical Reconnaissance Bureau (Military Unit Cover Designator 78020). [2] While Naikon shares some characteristics with APT30, the two groups do not appear to be exact matches.",
      "Color": "matrix5"
  },
  "NEODYMIUM": {
      "details": "NEODYMIUM is an activity group that conducted a campaign in May 2016 and has heavily targeted Turkish victims. The group has demonstrated similarity to another activity group called PROMETHIUM due to overlapping victim and campaign characteristics. [1] [2] NEODYMIUM is reportedly associated closely with BlackOasis operations, but evidence that the group names are aliases has not been identified.",
      "Color": "matrix14"
  },
  "Night_Dragon": {
      "Initial Access": ["Exploit Public-Facing Application", "External Remote Services", "Spearphishing Link", "Valid Accounts"],
      "Execution": ["User Execution"],
      "Persistence": ["External Remote Services"],
      "Privilege Escalation": ["Valid Accounts"],
      "Defense Evasion": ["Disabling Security Tools", "Obfuscated Files or Information", "Software Packing", "Valid Accounts"],
      "Credential Access": ["Credential Dumping"],
      "Lateral Movement": ["Pass the Hash"],
      "Collection": ["Data Staged"],
      "Command And Control": ["Commonly Used Port", "Remote Access Tools", "Standard Application Layer Protocol"],
      "details": "Night Dragon is a campaign name for activity involving a threat group that has conducted activity originating primarily in China.",
      "Color": "matrix6"
  },
  "OilRig": {
      "Initial Access": ["External Remote Services", "Spearphishing Attachment", "Spearphishing Link", "Valid Accounts"],
      "Execution": ["Command-Line Interface", "Compiled HTML File", "PowerShell", "Scheduled Task", "Scripting", "User Execution", "Windows Remote Management"],
      "Persistence": ["External Remote Services", "Redundant Access", "Scheduled Task", "Valid Accounts", "Web Shell"],
      "Privilege Escalation": ["Scheduled Task", "Valid Accounts", "Web Shell"],
      "Defense Evasion": ["Compiled HTML File", "Deobfuscate/Decode Files or Information", "File Deletion", "Indicator Removal from Tools", "Obfuscated Files or Information", "Redundant Access", "Scripting", "Valid Accounts"],
      "Credential Access": ["Brute Force", "Credential Dumping", "Input Capture"],
      "Discovery": ["Account Discovery", "Network Service Scanning", "Password Policy Discovery", "Permission Groups Discovery", "Process Discovery", "Query Registry", "System Information Discovery", "System Network Configuration Discovery", "System Network Connections Discovery", "System Owner/User Discovery", "System Service Discovery"],
      "Lateral Movement": ["Remote Desktop Protocol", "Remote File Copy", "Remote Services"],
      "Collection": ["Automated Collection", "Input Capture", "Screen Capture"],
      "Command And Control": ["Custom Command and Control Protocol", "Fallback Channels", "Remote File Copy", "Standard Application Layer Protocol", "Standard Cryptographic Protocol"],
      "Exfiltration": ["Exfiltration Over Alternative Protocol"],
      "details": "OilRig is a threat group with suspected Iranian origins that has targeted Middle Eastern and international victims since at least 2014. The group has targeted a variety of industries, including financial, government, energy, chemical, and telecommunications, and has largely focused its operations within the Middle East. It appears the group carries out supply chain attacks, leveraging the trust relationship between organizations to attack their primary targets. FireEye assesses that the group works on behalf of the Iranian government based on infrastructure details that contain references to Iran, use of Iranian infrastructure, and targeting that aligns with nation-state interests. [1] [2] [3] [4] [5] [6][7] This group was previously tracked under two distinct groups, APT34 and OilRig, but was combined due to additional reporting giving higher confidence about the overlap of the activity.",
      "Color": "matrix7"
  },
  "Orangeworm": {
      "Lateral Movement": ["Windows Admin Shares"],
      "Command And Control": ["Standard Application Layer Protocol"],
      "details": "Orangeworm is a group that has targeted organizations in the healthcare sector in the United States, Europe, and Asia since at least 2015, likely for the purpose of corporate espionage",
      "Color": "matrix8"
  },
  "PLATINUM": {
      "Initial Access": ["Drive-by Compromise", "Spearphishing Attachment"],
      "Execution": ["User Execution"],
      "Persistence": ["Hooking"],
      "Privilege Escalation": ["Exploitation for Privilege Escalation", "Hooking", "Process Injection"],
      "Defense Evasion": ["Masquerading", "Process Injection"],
      "Credential Access": ["Credential Dumping", "Hooking", "Input Capture"],
      "Lateral Movement": ["Remote File Copy"],
      "Collection": ["Input Capture"],
      "Command And Control": ["Custom Command and Control Protocol", "Remote File Copy", "Standard Application Layer Protocol"],
      "details": "PLATINUM is an activity group that has targeted victims since at least 2009. The group has focused on targets associated with governments and related organizations in South and Southeast Asia.",
      "Color": "matrix9"
  },
  "Patchwork": {
      "Initial Access": ["Drive-by Compromise", "Spearphishing Attachment", "Spearphishing Link"],
      "Execution": ["Command-Line Interface", "Dynamic Data Exchange", "Exploitation for Client Execution", "PowerShell", "Scheduled Task", "Scripting", "User Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder", "Scheduled Task"],
      "Privilege Escalation": ["Bypass User Account Control", "Scheduled Task"],
      "Defense Evasion": ["Binary Padding", "Bypass User Account Control", "DLL Side-Loading", "File Deletion", "Indicator Removal from Tools", "Masquerading", "Modify Registry", "Obfuscated Files or Information", "Process Hollowing", "Software Packing", "Web Service"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["File and Directory Discovery", "Security Software Discovery", "System Information Discovery", "System Owner/User Discovery"],
      "Lateral Movement": ["Remote Desktop Protocol", "Remote File Copy"],
      "Collection": ["Automated Collection", "Data from Local System", "Data Staged"],
      "Command And Control": ["Data Encoding", "Remote File Copy", "Web Service"],
      "Exfiltration": ["Data Encrypted"],
      "details": "Patchwork is a cyberespionage group that was first observed in December 2015. While the group has not been definitively attributed, circumstantial evidence suggests the group may be a pro-Indian or Indian entity. Patchwork has been seen targeting industries related to diplomatic and government agencies. Much of the code used by this group was copied and pasted from online forums. Patchwork was also seen operating spearphishing campaigns targeting U.S. think tank groups in March and April of 2018.",
      "Color": "matrix10"
  },
  "PittyTiger": {
      "Initial Access": ["Valid Accounts"],
      "Persistence": ["Valid Accounts"],
      "Privilege Escalation": ["Valid Accounts"],
      "Defense Evasion": ["Valid Accounts"],
      "details": "PittyTiger is a threat group believed to operate out of China that uses multiple different types of malware to maintain command and control. ",
      "Color": "matrix11"
  },
  "Poseidon_Group": {
      "Execution": ["PowerShell"],
      "Defense Evasion": ["Masquerading"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Account Discovery", "Process Discovery", "System Network Connections Discovery", "System Service Discovery"],
      "details": "Poseidon Group is a Portuguese-speaking threat group that has been active since at least 2005. The group has a history of using information exfiltrated from victims to blackmail victim companies into contracting the Poseidon Group as a security firm.",
      "Color": "matrix12"
  },
  "PROMETHIUM": {
      "details": "PROMETHIUM is an activity group that has been active since at least 2012. The group conducted a campaign in May 2016 and has heavily targeted Turkish victims. PROMETHIUM has demonstrated similarity to another activity group called NEODYMIUM due to overlapping victim and campaign characteristics.",
      "Color": "matrix1"
  },
  "Putter_Panda": {
      "Persistence": ["Registry Run Keys / Startup Folder"],
      "Privilege Escalation": ["Process Injection"],
      "Defense Evasion": ["Disabling Security Tools", "Obfuscated Files or Information", "Process Injection"],
      "details": "Putter Panda is a Chinese threat group that has been attributed to Unit 61486 of the 12th Bureau of the PLA’s 3rd General Staff Department (GSD).",
      "Color": "matrix13"
  },
  "Sandworm Team": {
      "details": "Sandworm Team is a Russian cyber espionage group that has operated since approximately 2009. The group likely consists of Russian pro-hacktivists. Sandworm Team targets mainly Ukrainian entities associated with energy, industrial control systems, SCADA, government, and media. Sandworm Team has been linked to the Ukrainian energy sector attack in late 2015.",
      "Color": "matrix3"
  },
  "RTM": {
      "Defense Evasion": ["Web Service"],
      "Command And Control": ["Web Service"],
      "details": "RTM is a cybercriminal group that has been active since at least 2015 and is primarily interested in users of remote banking systems in Russia and neighboring countries. The group uses a Trojan by the same name (RTM)",
      "Color": "matrix14"
  },
  "Rancor": {
      "Initial Access": ["Spearphishing Attachment"],
      "Execution": ["Command-Line Interface", "Scheduled Task", "Scripting", "Signed Binary Proxy Execution", "User Execution", "Windows Management Instrumentation"],
      "Privilege Escalation": ["Scheduled Task"],
      "Defense Evasion": ["Scripting", "Signed Binary Proxy Execution"],
      "Lateral Movement": ["Remote File Copy"],
      "Command And Control": ["Remote File Copy", "Standard Application Layer Protocol"],
      "details": "Rancor is a threat group that has led targeted campaigns against the South East Asia region. Rancor uses politically-motivated lures to entice victims to open malicious documents.",
      "Color": "matrix15"
  },
  "Scarlet_Mimic": {
      "Defense Evasion": ["Masquerading"],
      "details": "Scarlet Mimic is a threat group that has targeted minority rights activists. This group has not been directly linked to a government source, but the group's motivations appear to overlap with those of the Chinese government. While there is some overlap between IP addresses used by Scarlet Mimic and Putter Panda, it has not been concluded that the groups are the same.",
      "Color": "matrix16"
  },
  "Silence": {
      "Initial Access": ["Spearphishing Attachment"],
      "Execution": ["Command-Line Interface", "Compiled HTML File", "Execution through API", "Scheduled Task", "Scripting", "Service Execution"],
      "Persistence": ["Scheduled Task"],
      "Privilege Escalation": ["Scheduled Task"],
      "Defense Evasion": ["Compiled HTML File", "File Deletion", "Obfuscated Files or Information", "Scripting"],
      "Collection": ["Screen Capture", "Video Capture"],
      "details": "Silence is a financially motivated threat actor targeting financial institutions in different countries. The group was first seen in June 2016. Their main targets reside in Russia, Ukraine, Belarus, Azerbaijan, Poland and Kazakhstan. They compromised various banking systems, including the Russian Central Bank's Automated Workstation Client, ATMs, and card processing.",
      "Color": "matrix5"
  },
  "SilverTerrier": {
      "Command And Control": ["Standard Application Layer Protocol"],
      "details": "SilverTerrier is a Nigerian threat group that has been seen active since 2014. SilverTerrier mainly targets organizations in high technology, higher education, and manufacturing.",
      "Color": "matrix17"
  },
  "Soft Cell": {
      "Initial Access": ["External Remote Services", "Exploit Public-Facing Application", "Valid Accounts"],
      "Execution": ["Command-Line Interface", "PowerShell", "Scheduled Task", "Scripting", "Windows Management Instrumentation"],
      "Persistence": ["Create Account", "External Remote Services", "Scheduled Task", "Valid Accounts", "Web Shell"],
      "Privilege Escalation": ["Scheduled Task", "Valid Accounts", "Web Shell"],
      "Defense Evasion": ["Connection Proxy", "DLL Side-Loading", "Indicator Removal from Tools","Masquerading", "Obfuscated Files or Information", "Software Packing", "Valid Accounts"],
      "Credential Access": ["Credential Dumping", "Credentials in Registry"],
      "Discovery": ["Remote System Discovery", "System Network Configuration Discovery", "System Network Connections Discovery", "System Owner/User Discovery"],
      "Lateral Movement": ["Pass the Hash", "Remote File Copy"],
      "Collection": ["Data from Local System", "Data Staged"],
      "Command And Control": ["Connection Proxy", "Remote File Copy"],
      "Exfiltration": ["Data Compressed", "Data Encrypted", "Exfiltration Over Command and Control Channel"],
      "details": "Operation Soft Cell is a group that is reportedly affiliated with China and is likely state-sponsored. The group has operated since at least 2012 and has compromised high-profile telecommunications networks.",
      "Color": "matrix6"
  },
  "Sowbug": {
      "Execution": ["Command-Line Interface"],
      "Defense Evasion": ["Masquerading"],
      "Credential Access": ["Credential Dumping", "Input Capture"],
      "Discovery": ["File and Directory Discovery", "Network Share Discovery", "System Information Discovery"],
      "Collection": ["Data from Network Shared Drive", "Input Capture"],
      "Exfiltration": ["Data Compressed"],
      "details": "Sowbug is a threat group that has conducted targeted attacks against organizations in South America and Southeast Asia, particularly government entities, since at least 2015.",
      "Color": "matrix18"
  },
  "Stealth_Falcon": {
      "Execution": ["PowerShell", "Scheduled Task", "Scripting", "Windows Management Instrumentation"],
      "Persistence": ["Scheduled Task"],
      "Privilege Escalation": ["Scheduled Task"],
      "Defense Evasion": ["Scripting"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Process Discovery", "Query Registry", "System Information Discovery", "System Network Configuration Discovery", "System Owner/User Discovery"],
      "Collection": ["Data from Local System"],
      "Command And Control": ["Standard Application Layer Protocol", "Standard Cryptographic Protocol"],
      "Exfiltration": ["Exfiltration Over Command and Control Channel"],
      "details": "Stealth Falcon is a threat group that has conducted targeted spyware attacks against Emirati journalists, activists, and dissidents since at least 2012. Circumstantial evidence suggests there could be a link between this group and the United Arab Emirates (UAE) government, but that has not been confirmed.",
      "Color": "matrix19"
  },
  "Stolen_Pencil": {
      "Initial Access": ["Spearphishing Link", "Valid Accounts"],
      "Persistence": ["Browser Extensions", "Redundant Access", "Valid Accounts"],
      "Privilege Escalation": ["Valid Accounts"],
      "Defense Evasion": ["Redundant Access", "Valid Accounts"],
      "Credential Access": ["Credential Dumping","Credentials in Files", "Input Capture", "Network Sniffing"],
      "Discovery": ["Network Sniffing"],
      "Lateral Movement": ["Remote Desktop Protocol"],
      "Collection": ["Input Capture"],
      "details": "Stolen Pencil is a threat group likely originating from DPRK that has been active since at least May 2018. The group appears to have targeted academic institutions, but its motives remain unclear.",
      "Color": "matrix20"
  },
  "Strider": {
      "Credential Access": ["Credential Dumping"],
      "Command And Control": ["Connection Proxy"],
      "details": "Strider is a threat group that has been active since at least 2011 and has targeted victims in Russia, China, Sweden, Belgium, Iran, and Rwanda. ",
      "Color": "matrix21"
  },
  "Suckfly": {
      "Initial Access": ["Valid Accounts"],
      "Execution": ["Command-Line Interface"],
      "Persistence": ["Valid Accounts"],
      "Privilege Escalation": ["Valid Accounts"],
      "Defense Evasion": ["Code Signing", "Valid Accounts"],
      "Credential Access": ["Credential Dumping"],
      "Discovery": ["Network Service Scanning"],
      "details": "Suckfly is a China-based threat group that has been active since at least 2014.",
      "Color": "matrix22"
  },
  "TA459": {
      "Initial Access": ["Spearphishing Attachment"],
      "Execution": ["Exploitation for Client Execution", "PowerShell", "Scripting", "User Execution"],
      "Defense Evasion": ["Scripting"],
      "details": "TA459 is a threat group believed to operate out of China that has targeted countries including Russia, Belarus, Mongolia, and others.",
      "Color": "matrix23"
  },
  "TA505": {
      "Initial Access": ["Spearphishing Attachment", "Spearphishing Link"],
      "Execution": ["Dynamic Data Exchange", "PowerShell", "Rundll32", "Scripting", "Signed Binary Proxy Execution", "User Execution"],
      "Defense Evasion": ["Code Signing", "Obfuscated Files or Information", "Rundll32", "Scripting", "Signed Binary Proxy Execution"],
      "Credential Access": ["Credentials from Web Browsers", "Credentials in Files"],
      "Lateral Movement": ["Remote File Copy"],
      "Command And Control": ["Remote File Copy"],
      "Impact": ["Data Encrypted for Impact"],
      "details": "TA505 is a financially motivated threat group that has been active since at least 2014. The group is known for frequently changing malware and driving global trends in criminal malware distribution.",
      "Color": "matrix3"
  },
  "TEMP_Veles": {
      "Initial Access": ["External Remote Services", "Valid Accounts"],
      "Execution": ["PowerShell", "Scheduled Task"],
      "Persistence": ["External Remote Services", "Image File Execution Options Injection", "Scheduled Task", "Valid Accounts", "Web Shell"],
      "Privilege Escalation": ["Image File Execution Options Injection",  "Scheduled Task", "Valid Accounts", "Web Shell"],
      "Defense Evasion": ["File Deletion", "Image File Execution Options Injection", "Indicator Removal from Tools", "Masquerading", "Timestomp", "Valid Accounts"],
      "Credential Access": ["Credential Dumping"],
      "Lateral Movement": ["Remote Desktop Protocol", "Remote Services"],
      "Collection": ["Data Staged"],
      "Command And Control": ["Commonly Used Port", "Uncommonly Used Port"],
      "details": "TEMP.Veles\n" +
      "TEMP.Veles is a Russia-based threat group that has targeted critical infrastructure. The group has been observed utilizing TRITON, a malware framework designed to manipulate industrial safety systems.",
      "Color": "matrix24"
  },
  "The White Company": {
      "Initial Access": ["Spearphishing Attachment"],
      "Execution": ["Exploitation for Client Execution", "User Execution"],
      "Defense Evasion": ["File Deletion", "Software Packing", "Virtualization/Sandbox Evasion"],
      "Discovery": ["Security Software Discovery", "System Time Discovery", "Virtualization/Sandbox Evasion"],
      "details": "The White Company is a likely state-sponsored threat actor with advanced capabilities. From 2017 through 2018, the group led an espionage campaign called Operation Shaheen targeting government and military organizations in Pakistan.",
      "Color": "matrix13"
  },
  "Taidoor": {
      "Command And Control": ["Standard Cryptographic Protocol"],
      "details": "Taidoor is a threat group that has operated since at least 2009 and has primarily targeted the Taiwanese government.",
      "Color": "matrix25"
  },
  "Threat_Group_1314": {
      "Initial Access": ["Valid Accounts"],
      "Execution": ["Command-Line Interface", "Third-party Software"],
      "Persistence": ["Valid Accounts"],
      "Privilege Escalation": ["Valid Accounts"],
      "Defense Evasion": ["Valid Accounts"],
      "Lateral Movement": ["Third-party Software", "Windows Admin Shares"],
      "details": "Threat Group-1314 is an unattributed threat group that has used compromised credentials to log into a victim's remote access infrastructure. ",
      "Color": "matrix26"
  },
  "Threat_Group_3390": {
      "Initial Access": ["Drive-by Compromise", "External Remote Services", "Valid Accounts"],
      "Execution": ["Command-Line Interface", "PowerShell", "Scheduled Task", "Windows Management Instrumentation", "Windows Remote Management"],
      "Persistence": ["DLL Search Order Hijacking", "External Remote Services", "New Service", "Redundant Access", "Registry Run Keys / Startup Folder", "Scheduled Task", "Valid Accounts"],
      "Privilege Escalation": ["Bypass User Account Control", "DLL Search Order Hijacking", "Exploitation for Privilege Escalation", "New Service", "Process Injection", "Scheduled Task", "Valid Accounts"],
      "Defense Evasion": ["Bypass User Account Control", "Deobfuscate/Decode Files or Information", "Disabling Security Tools", "DLL Search Order Hijacking", "DLL Side-Loading", "File Deletion",  "Modify Registry", "Network Share Connection Removal", "Obfuscated Files or Information", "Valid Accounts"],
      "Credential Access": ["Credential Dumping", "Input Capture"],
      "Discovery": ["Account Discovery", "Network Service Scanning", "Query Registry", "Remote System Discovery", "System Network Configuration Discovery", "System Network Connections Discovery"],
      "Lateral Movement": ["Remote File Copy", "Windows Remote Management"],
      "Collection": ["Automated Collection", "Data from Local System", "Data Staged", "Input Capture"],
      "Command And Control": ["Commonly Used Port", "Remote File Copy", "Standard Application Layer Protocol"],
      "Exfiltration": ["Data Compressed", "Data Encrypted", "Data Transfer Size Limits"],
      "details": "Threat Group-3390 is a Chinese threat group that has extensively used strategic Web compromises to target victims. [1] The group has been active since at least 2010 and has targeted organizations in the aerospace, government, defense, technology, energy, and manufacturing sectors.",
      "Color": "matrix27"
  },
  "Thrip": {
      "Execution": ["PowerShell"],
      "Command And Control": ["Remote Access Tools"],
      "Exfiltration": ["Exfiltration Over Alternative Protocol"],
      "details": "Thrip is an espionage group that has targeted satellite communications, telecoms, and defense contractor companies in the U.S. and Southeast Asia. The group uses custom malware as well as \"living off the land\" techniques",
      "Color": "matrix28"
  },
  "Tropic_Trooper": {
      "Initial Access": ["Spearphishing Attachment"],
      "Execution": ["Exploitation for Client Execution"],
      "Persistence": ["BITS Jobs", "Hidden Files and Directories", "Winlogon Helper DLL"],
      "Privilege Escalation": ["Process Injection"],
      "Defense Evasion": ["BITS Jobs", "Deobfuscate/Decode Files or Information", "Hidden Files and Directories", "Obfuscated Files or Information", "Process Injection", "Template Injection"],
      "Discovery": ["Process Discovery", "Security Software Discovery"],
      "Command And Control": ["Commonly Used Port", "Standard Cryptographic Protocol"],
      "details": "Tropic Trooper is an unaffiliated threat group that has led targeted campaigns against targets in Taiwan, the Philippines, and Hong Kong. Tropic Trooper focuses on targeting government, healthcare, transportation, and high-tech industries and has been active since 2011",
      "Color": "matrix29"
  },
  "Turla": {
      "Initial Access": ["Spearphishing Attachment", "Spearphishing Link"],
      "Execution": ["PowerShell", "User Execution"],
      "Persistence": ["Registry Run Keys / Startup Folder", "Winlogon Helper DLL"],
      "Privilege Escalation": ["Process Injection"],
      "Defense Evasion": ["Indicator Removal from Tools", "Process Injection", "Web Service"],
      "Credential Access": ["Brute Force"],
      "Discovery": ["File and Directory Discovery", "Process Discovery", "Remote System Discovery", "System Information Discovery", "System Network Configuration Discovery", "System Network Connections Discovery", "System Service Discovery", "System Time Discovery" ],
      "Lateral Movement": ["Remote File Copy", "Windows Admin Shares"],
      "Command And Control": ["Remote File Copy", "Standard Application Layer Protocol", "Web Service"],
      "details": "Turla is a Russian-based threat group that has infected victims in over 45 countries, spanning a range of industries including government, embassies, military, education, research and pharmaceutical companies since 2004. Heightened activity was seen in mid-2015. Turla is known for conducting watering hole and spearphishing campaigns and leveraging in-house tools and malware. Turla’s espionage platform is mainly used against Windows machines, but has also been seen used against macOS and Linux machines. ",
      "Color": "matrix30"
  },
  "Winnti_Group": {
      "Defense Evasion": ["Code Signing", "Rootkit"],
      "Discovery": ["Process Discovery"],
      "details": "Winnti Group is a threat group with Chinese origins that has been active since at least 2010. The group has heavily targeted the gaming industry, but it has also expanded the scope of its targeting. [1] [2] [3] Some reporting suggests a number of other groups, including Axiom, APT17, and Ke3chang, are closely linked to Winnti Group.",
      "Color": "matrix1"
  },
  "admin_338": {
      "Execution": ["Command-Line Interface"],
      "Defense Evasion": ["Masquerading"],
      "Discovery": ["Account Discovery", "File and Directory Discovery", "Permission Groups Discovery", "System Information Discovery", "System Network Configuration Discovery", "System Network Connections Discovery", "System Service Discovery"],
      "details": "admin@338 is a China-based cyber threat group. It has previously used newsworthy events as lures to deliver malware and has primarily targeted organizations involved in financial, economic, and trade policy, typically using publicly available RATs such as PoisonIvy, as well as some non-public backdoors.",
      "Color": "matrix2"
  },
  "menuPass": {
      "Initial Access":["Spearphishing Attachment","Trusted Relationship", "Valid Accounts"],
      "Execution":["Command-Line Interface","PowerShell", "Scheduled Task", 			"Scripting","User Execution", "Windows Management Instrumentation"],
      "Persistence":["DLL Search Order Hijacking","Scheduled Task","Valid Accounts"],
      "Credential Access":["Credential Dumping", "Input Capture"],
      "Discovery":["Account Discovery","Network Service Scanning", "Remote System Discovery","System Network Configuration Discovery", "System Network Connections Discovery"],
      "Lateral Movement":["Remote Desktop Protocol", "Remote File Copy", "Remote Services"],
      "Collection": ["Data from Local System", "Data from Network Shared Drive", "Data Staged", "Input Capture"],
      "Command And Control": ["Connection Proxy", "Remote File Copy"],
      "Exfiltration": ["Data Compressed", "Data Encrypted"],
      "details": "menuPass is a threat group that appears to originate from China and has been active since approximately 2009. The group has targeted healthcare, defense, aerospace, and government sectors, and has targeted Japanese victims since at least 2014. In 2016 and 2017, the group targeted managed IT service providers, manufacturing and mining companies, and a university.",
      "Color": "matrix3"
  }
}
