// Course Data Structure for Microsoft Entra Training Platform

export interface TrainerNote {
    talkingPoints: string[];
    realExamples: string[];
    questionsToAsk: string[];
}

export interface Lesson {
    id: string;
    title: string;
    slug: string;
    duration: string;
    content: {
        explanation: string[];
        keyPoints: string[];
        architecture?: {
            title: string;
            steps: {
                step: number;
                title: string;
                description: string;
                icon?: string;
            }[];
        };
        whyItMatters: string;
        commonMistakes: string[];
        interviewTips: string[];
        examTips: string[];
    };
    trainerNotes: TrainerNote;
    completed?: boolean;
}

export interface Module {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    lessons: Lesson[];
    duration: string;
}

export interface CourseData {
    title: string;
    subtitle: string;
    trainer: {
        name: string;
        title: string;
        email: string;
        linkedin?: string;
    };
    duration: string;
    prerequisites: string[];
    whatYouWillLearn: string[];
    targetAudience: string[];
    modules: Module[];
}

export const courseData: CourseData = {
    title: "Microsoft Entra",
    subtitle: "Identity & Access Management for the Modern Enterprise",
    trainer: {
        name: "Maheshwar",
        title: "Infrastructure & Cloud Administrator (HCLTech)",
        email: "maheshwarkumar5629@gmail.com",
        linkedin: "https://linkedin.com/in/trainer",
    },
    duration: "8-12 hours",
    prerequisites: [
        "Basic understanding of Microsoft 365 administration",
        "Familiarity with Azure portal navigation",
        "Understanding of identity and authentication concepts",
        "Access to Microsoft Entra ID P1/P2 or trial recommended",
    ],
    whatYouWillLearn: [
        "Understand the complete Microsoft Entra identity platform",
        "Configure and manage users, groups, and external identities",
        "Implement Multi-Factor Authentication and passwordless methods",
        "Design and deploy Conditional Access policies for Zero Trust",
        "Set up Identity Governance with access reviews and PIM",
        "Protect identities with risk-based policies and Identity Protection",
    ],
    targetAudience: [
        "IT Administrators managing Microsoft 365 and Azure",
        "Identity & Access Management Engineers",
        "Security Architects and Analysts",
        "Cloud Infrastructure Engineers",
        "Professionals preparing for SC-300 certification",
    ],
    modules: [
        {
            id: "module-1",
            title: "Introduction to Microsoft Entra",
            slug: "introduction",
            description: "Understanding the fundamentals of Microsoft Entra and its role in identity and access management",
            icon: "Shield",
            duration: "1.5 hours",
            lessons: [
                {
                    id: "lesson-1-1",
                    title: "What is Microsoft Entra?",
                    slug: "what-is-entra",
                    duration: "20 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra is a family of identity and network access products that provides a unified approach to identity management, access control, and network security for organizations of all sizes.",
                            "At its core is Microsoft Entra ID (formerly Azure Active Directory), the cloud-based identity and access management service that helps employees sign in and access resources. Entra extends beyond traditional IAM to include identity governance, verified ID, permissions management, and network access.",
                            "The rebranding from Azure AD to Microsoft Entra ID in 2023 reflects Microsoft's vision of a comprehensive identity solution that goes beyond just directory services to encompass the entire identity lifecycle.",
                        ],
                        keyPoints: [
                            "Microsoft Entra ID is the new name for Azure Active Directory (Azure AD)",
                            "Cloud-based Identity and Access Management (IAM) service",
                            "Supports SSO to thousands of SaaS applications",
                            "Provides MFA, Conditional Access, and Identity Protection",
                            "Part of the broader Microsoft Entra product family",
                        ],
                        architecture: {
                            title: "Microsoft Entra Product Family",
                            steps: [
                                { step: 1, title: "Entra ID", description: "Core identity platform - SSO, MFA, Conditional Access, directory services", icon: "CircleUser" },
                                { step: 2, title: "Entra ID Governance", description: "Access reviews, entitlement management, lifecycle workflows", icon: "Workflow" },
                                { step: 3, title: "Entra External ID", description: "Customer and partner identity management (B2B/B2C)", icon: "Users" },
                                { step: 4, title: "Entra Verified ID", description: "Decentralized identity credentials and verification", icon: "BadgeCheck" },
                                { step: 5, title: "Entra Permissions Mgmt", description: "Multi-cloud permissions management (CIEM)", icon: "Key" },
                                { step: 6, title: "Entra Internet Access", description: "Secure web gateway and network access control", icon: "Globe" },
                            ],
                        },
                        whyItMatters: "Identity is the new security perimeter in the cloud era. With 80% of breaches involving compromised credentials, a robust identity platform is essential. Microsoft Entra ID manages over 600 million identities and processes 76 billion authentications daily, making it the backbone of enterprise security.",
                        commonMistakes: [
                            "Confusing Microsoft Entra ID with on-premises Active Directory Domain Services",
                            "Not understanding the difference between Entra ID and the broader Entra family",
                            "Assuming Azure AD features have been removed with the rename - it is purely a rebrand",
                            "Ignoring the identity-first security approach in favor of network-only security",
                        ],
                        interviewTips: [
                            "Explain the evolution from Azure AD to Microsoft Entra ID",
                            "Discuss the broader Entra product family beyond just Entra ID",
                            "Mention the scale - 600M+ identities, 76B+ daily authentications",
                            "Reference the Zero Trust model where identity is the control plane",
                        ],
                        examTips: [
                            "Know the full Microsoft Entra product family and each product's purpose",
                            "Understand that Entra ID = Azure AD (it is a rename, not a replacement)",
                            "Be familiar with the Entra admin center navigation",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Start with why identity matters - the perimeter has shifted to identity",
                            "Clarify the Azure AD to Entra ID rename timeline and what changed",
                            "Emphasize that Entra is a family - ID is just one product",
                            "Highlight that this is Microsoft's strategic direction for all identity",
                        ],
                        realExamples: [
                            "Enterprise with 50,000 users migrated from on-prem AD to hybrid with Entra ID for cloud SSO",
                            "SaaS company used Entra External ID to manage 2 million customer identities",
                            "Financial services firm used Entra Permissions Management to discover over-provisioned cloud roles",
                        ],
                        questionsToAsk: [
                            "Is your organization currently using Azure AD or have you transitioned to the Entra branding?",
                            "What identity challenges does your organization face today?",
                            "Are you managing identities across multiple clouds?",
                        ],
                    },
                },
                {
                    id: "lesson-1-2",
                    title: "Entra ID vs Active Directory Domain Services",
                    slug: "entra-vs-adds",
                    duration: "20 mins",
                    content: {
                        explanation: [
                            "Active Directory Domain Services (AD DS) is the traditional on-premises directory service that has been the backbone of Windows enterprise networks since Windows 2000. It uses LDAP, Kerberos, and Group Policy for authentication and management.",
                            "Microsoft Entra ID is a cloud-native identity service designed for modern applications and cloud resources. It uses modern protocols like OAuth 2.0, OpenID Connect, and SAML for authentication, and manages access to SaaS apps, Azure resources, and Microsoft 365.",
                            "They serve different purposes and often coexist in hybrid environments. Entra Connect (formerly Azure AD Connect) synchronizes on-premises AD identities to Entra ID, enabling a unified identity experience across cloud and on-premises resources.",
                        ],
                        keyPoints: [
                            "AD DS: On-premises, LDAP/Kerberos, Group Policy, OUs, domain-joined devices",
                            "Entra ID: Cloud-native, OAuth/OIDC/SAML, Conditional Access, flat structure",
                            "Entra ID is NOT a cloud replacement for AD DS - they serve different roles",
                            "Entra Connect synchronizes identities between AD DS and Entra ID",
                            "Hybrid identity allows users to access both on-prem and cloud resources seamlessly",
                        ],
                        architecture: {
                            title: "Hybrid Identity Architecture",
                            steps: [
                                { step: 1, title: "AD DS (On-Prem)", description: "Domain controllers, GPOs, LDAP/Kerberos authentication", icon: "Building" },
                                { step: 2, title: "Entra Connect", description: "Sync agent that replicates identities to the cloud", icon: "RefreshCw" },
                                { step: 3, title: "Entra ID (Cloud)", description: "Cloud directory, modern auth, SSO to SaaS apps", icon: "Globe" },
                                { step: 4, title: "User Experience", description: "Single identity for on-prem and cloud resources", icon: "CircleUser" },
                            ],
                        },
                        whyItMatters: "Most enterprises operate in hybrid environments with both on-premises and cloud resources. Understanding the distinction between AD DS and Entra ID is critical for designing secure, efficient identity solutions that bridge both worlds without introducing security gaps.",
                        commonMistakes: [
                            "Trying to replicate AD DS structure (OUs, GPOs) directly in Entra ID",
                            "Assuming Entra ID can replace AD DS for domain-joined device management",
                            "Forgetting that Entra ID uses a flat structure - no OUs or forests",
                            "Not planning for Entra Connect sync filtering and attribute mapping",
                        ],
                        interviewTips: [
                            "Clearly articulate the differences in protocols, structure, and use cases",
                            "Explain hybrid identity and when organizations need both",
                            "Discuss Entra Connect sync options: password hash sync, pass-through auth, federation",
                        ],
                        examTips: [
                            "Know the protocol differences: LDAP/Kerberos vs OAuth/OIDC/SAML",
                            "Understand Entra Connect authentication methods and when to use each",
                            "Know which features exist in AD DS only vs Entra ID only vs both",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Use a comparison table to highlight key differences",
                            "Explain that most organizations will have both for years to come",
                            "Discuss the three Entra Connect auth methods in detail",
                            "Mention Entra Domain Services as the managed AD DS option in Azure",
                        ],
                        realExamples: [
                            "Organization tried to go cloud-only but still needed AD DS for legacy apps using Kerberos",
                            "Company successfully migrated to hybrid identity, reducing help desk password reset calls by 40%",
                        ],
                        questionsToAsk: [
                            "Does your organization have on-premises Active Directory today?",
                            "What authentication method does your Entra Connect use?",
                            "Are there legacy applications that require Kerberos or LDAP?",
                        ],
                    },
                },
                {
                    id: "lesson-1-3",
                    title: "Licensing & Editions",
                    slug: "licensing",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra ID comes in multiple editions: Free, P1, and P2. The Free edition is included with Azure subscriptions and Microsoft 365, providing basic identity features. P1 adds Conditional Access, dynamic groups, and self-service capabilities. P2 adds Identity Protection and Privileged Identity Management.",
                            "Licensing is per-user and follows a per-seat model. Some features like Conditional Access require P1 for all users who will be evaluated by policies, not just those who create them.",
                            "Microsoft Entra ID Governance (access reviews, entitlement management, lifecycle workflows) requires additional licensing beyond P2 in some configurations. Understanding the license matrix is essential for planning deployments.",
                        ],
                        keyPoints: [
                            "Free: Basic user/group management, SSO (up to 10 apps per user), MFA",
                            "P1: Conditional Access, dynamic groups, SSPR, application proxy, hybrid identity",
                            "P2: Identity Protection, risk-based CA, PIM, access reviews, entitlement management",
                            "Microsoft 365 E3 includes Entra ID P1; E5 includes Entra ID P2",
                            "Per-user licensing - all users subject to a feature need appropriate licenses",
                        ],
                        architecture: {
                            title: "License Tiers & Features",
                            steps: [
                                { step: 1, title: "Free / M365", description: "Basic SSO, MFA, user management, security defaults", icon: "Package" },
                                { step: 2, title: "Entra ID P1", description: "Conditional Access, dynamic groups, SSPR, App Proxy", icon: "PackageCheck" },
                                { step: 3, title: "Entra ID P2", description: "Identity Protection, PIM, risk-based policies", icon: "PackagePlus" },
                                { step: 4, title: "ID Governance", description: "Lifecycle workflows, entitlement mgmt, advanced access reviews", icon: "Workflow" },
                            ],
                        },
                        whyItMatters: "Incorrect licensing leads to either overspending or missing critical security features. Many organizations discover mid-deployment that Conditional Access requires P1 for every evaluated user, causing unexpected cost increases. Proper license planning prevents project delays and budget overruns.",
                        commonMistakes: [
                            "Assuming Conditional Access is included in the free tier",
                            "Not licensing all users evaluated by a Conditional Access policy",
                            "Confusing Entra ID P2 with Entra ID Governance licensing",
                            "Deploying PIM without P2 licenses and wondering why it does not work",
                        ],
                        interviewTips: [
                            "Show awareness of the licensing complexity and cost considerations",
                            "Discuss how to optimize licensing across an organization",
                            "Mention trial options for testing P2 features before committing",
                        ],
                        examTips: [
                            "Know exactly which features require P1 vs P2",
                            "Understand that Conditional Access = P1 minimum",
                            "Know that PIM and Identity Protection require P2",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Licensing is a common pain point - acknowledge it upfront",
                            "Show the Microsoft licensing comparison page",
                            "Discuss M365 E3/E5 bundles vs standalone Entra licenses",
                            "Recommend always checking docs as Microsoft updates frequently",
                        ],
                        realExamples: [
                            "Company deployed Conditional Access but had mixed E3/E1 licenses - policies silently failed for E1 users",
                            "Organization saved money by using security defaults instead of Conditional Access for basic MFA",
                        ],
                        questionsToAsk: [
                            "What Microsoft 365 or Azure AD licenses does your organization have?",
                            "Have you encountered licensing gaps when deploying identity features?",
                            "Is budget a constraint for your identity security initiatives?",
                        ],
                    },
                },
                {
                    id: "lesson-1-4",
                    title: "Entra Admin Center & Tenant Setup",
                    slug: "admin-center",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "The Microsoft Entra admin center (entra.microsoft.com) is the unified management portal for all Entra products. It provides a centralized interface for managing users, groups, applications, Conditional Access policies, and governance features.",
                            "A tenant is a dedicated instance of Microsoft Entra ID that an organization receives when it signs up for a Microsoft cloud service. Each tenant is distinct and separate, with its own directory of users, groups, and registered applications.",
                            "Key tenant configuration includes custom domain names, company branding, user settings (external collaboration, app registrations), and security defaults. Proper initial setup is critical for a secure and manageable identity environment.",
                        ],
                        keyPoints: [
                            "Entra admin center at entra.microsoft.com replaces the Azure AD portal",
                            "Each organization gets a unique tenant with a .onmicrosoft.com domain",
                            "Custom domains can be added and verified via DNS TXT records",
                            "Company branding customizes the sign-in experience with logos and backgrounds",
                            "Tenant-level settings control default behavior for all users",
                        ],
                        architecture: {
                            title: "Tenant Configuration Flow",
                            steps: [
                                { step: 1, title: "Create Tenant", description: "Provision a new Entra ID tenant with .onmicrosoft.com domain", icon: "Building" },
                                { step: 2, title: "Add Domain", description: "Register and verify custom domain via DNS", icon: "Globe" },
                                { step: 3, title: "Set Branding", description: "Configure sign-in page with company logo and colors", icon: "Edit" },
                                { step: 4, title: "User Settings", description: "Configure guest access, app registrations, admin consent", icon: "Settings" },
                                { step: 5, title: "Security Defaults", description: "Enable baseline security policies or configure Conditional Access", icon: "ShieldCheck" },
                            ],
                        },
                        whyItMatters: "The tenant is the foundation of your identity infrastructure. Poor initial configuration leads to security gaps, user confusion, and administrative overhead. Getting tenant settings right from the start prevents costly remediation later.",
                        commonMistakes: [
                            "Not verifying custom domains, leaving the .onmicrosoft.com as primary",
                            "Ignoring company branding, leaving the default Microsoft sign-in page",
                            "Allowing all users to register applications without governance",
                            "Not understanding the difference between security defaults and Conditional Access",
                        ],
                        interviewTips: [
                            "Explain the relationship between tenants, subscriptions, and directories",
                            "Discuss custom domain setup and DNS verification process",
                            "Mention security defaults vs Conditional Access tradeoffs",
                        ],
                        examTips: [
                            "Know how to add and verify custom domains",
                            "Understand tenant-level user settings and their implications",
                            "Know when security defaults should be disabled in favor of Conditional Access",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Walk through the Entra admin center navigation",
                            "Show the custom domain verification process",
                            "Demonstrate company branding configuration",
                            "Explain security defaults and when to move beyond them",
                        ],
                        realExamples: [
                            "Organization had three separate tenants due to M&A - consolidated into one with proper planning",
                            "Company reduced phishing success by 30% after implementing company branding on sign-in pages",
                        ],
                        questionsToAsk: [
                            "How many Microsoft Entra tenants does your organization manage?",
                            "Have you customized your sign-in experience with company branding?",
                            "Are security defaults enabled or have you moved to Conditional Access?",
                        ],
                    },
                },
            ],
        },
        {
            id: "module-2",
            title: "User & Group Management",
            slug: "user-group-management",
            description: "Master user lifecycle management, group strategies, and external identity collaboration",
            icon: "Users",
            duration: "2 hours",
            lessons: [
                {
                    id: "lesson-2-1",
                    title: "User Accounts & Lifecycle",
                    slug: "user-lifecycle",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra ID supports multiple types of user accounts: cloud-only users created directly in Entra ID, synchronized users from on-premises AD via Entra Connect, and guest users (external identities) invited for collaboration.",
                            "User lifecycle management encompasses the entire journey of an identity: creation/provisioning, attribute management, access assignment, ongoing governance, and eventually deprovisioning/deletion. Automating this lifecycle reduces security risks and administrative burden.",
                            "User properties include display name, UPN (user principal name), job title, department, manager, and custom extension attributes. These properties drive dynamic group memberships, Conditional Access policies, and entitlement management.",
                        ],
                        keyPoints: [
                            "Cloud users: Created directly in Entra ID, managed in the cloud",
                            "Synced users: Mastered in on-prem AD, synchronized via Entra Connect",
                            "Guest users: External identities invited for B2B collaboration",
                            "UPN format: user@domain.com - the primary sign-in identifier",
                            "Soft delete: Deleted users are recoverable for 30 days",
                        ],
                        architecture: {
                            title: "User Lifecycle Stages",
                            steps: [
                                { step: 1, title: "Provision", description: "Create user account (manual, bulk, API, or HR-driven)", icon: "UserPlus" },
                                { step: 2, title: "Configure", description: "Set attributes, assign licenses, set MFA methods", icon: "Settings" },
                                { step: 3, title: "Assign Access", description: "Add to groups, assign apps, entitlements", icon: "Key" },
                                { step: 4, title: "Govern", description: "Access reviews, attestation, re-certification", icon: "ClipboardCheck" },
                                { step: 5, title: "Deprovision", description: "Disable, remove access, delete account", icon: "UserMinus" },
                            ],
                        },
                        whyItMatters: "Orphaned accounts and over-provisioned access are among the top identity security risks. Organizations with poor lifecycle management often discover hundreds of active accounts belonging to former employees, each representing a potential breach vector.",
                        commonMistakes: [
                            "Not implementing automated deprovisioning when employees leave",
                            "Using shared accounts instead of individual user accounts",
                            "Neglecting to review and update user attributes regularly",
                            "Forgetting about the 30-day soft delete window for recovery",
                        ],
                        interviewTips: [
                            "Explain the three user types and when to use each",
                            "Discuss automated provisioning from HR systems",
                            "Mention lifecycle workflows for joiner/mover/leaver scenarios",
                        ],
                        examTips: [
                            "Know the user types and their source of authority",
                            "Understand bulk user operations (CSV import)",
                            "Know the soft delete retention period (30 days)",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Start with the security risk of orphaned accounts",
                            "Show user creation in the Entra admin center",
                            "Demonstrate bulk user import via CSV",
                            "Discuss HR-driven provisioning with lifecycle workflows",
                        ],
                        realExamples: [
                            "Company audit discovered 500+ active accounts for former employees - immediate security risk",
                            "Organization automated provisioning from Workday, reducing onboarding time from 3 days to 15 minutes",
                        ],
                        questionsToAsk: [
                            "How are user accounts currently created in your organization?",
                            "What happens to accounts when employees leave?",
                            "Do you use any HR-driven provisioning today?",
                        ],
                    },
                },
                {
                    id: "lesson-2-2",
                    title: "Groups & Dynamic Membership",
                    slug: "groups-dynamic",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Groups in Microsoft Entra ID are used to manage access to resources at scale. Instead of assigning permissions to individual users, you assign them to groups and manage group membership. There are two main types: Security groups and Microsoft 365 groups.",
                            "Dynamic groups automatically add and remove members based on user attribute rules. For example, a dynamic group can include all users where department equals 'Engineering' - when a user's department changes, their group membership updates automatically.",
                            "Group-based licensing allows you to assign licenses to a group, and all members automatically receive the appropriate licenses. This simplifies license management significantly for large organizations.",
                        ],
                        keyPoints: [
                            "Security Groups: Used for access control to apps and resources",
                            "M365 Groups: Include a shared mailbox, calendar, SharePoint site, Teams",
                            "Assigned membership: Manual add/remove by administrators",
                            "Dynamic membership: Rule-based automatic membership (requires P1)",
                            "Group-based licensing: Assign licenses to groups instead of individual users",
                        ],
                        architecture: {
                            title: "Group Management Strategy",
                            steps: [
                                { step: 1, title: "Security Groups", description: "Control access to applications, Azure resources, SharePoint", icon: "Shield" },
                                { step: 2, title: "M365 Groups", description: "Collaboration with Teams, SharePoint, shared mailbox", icon: "UsersRound" },
                                { step: 3, title: "Dynamic Rules", description: "Attribute-based auto-membership (dept, location, title)", icon: "Sparkles" },
                                { step: 4, title: "Nested Groups", description: "Groups within groups for hierarchical access", icon: "Layers" },
                                { step: 5, title: "Group Licensing", description: "Automatic license assignment via group membership", icon: "Package" },
                            ],
                        },
                        whyItMatters: "Managing access at the group level is fundamental to scalable identity management. Organizations with hundreds of applications and thousands of users cannot efficiently manage individual access assignments. Groups enable consistent, auditable, and automated access control.",
                        commonMistakes: [
                            "Creating too many groups without a naming convention or governance",
                            "Using assigned groups when dynamic groups would be more appropriate",
                            "Not understanding that dynamic groups require Entra ID P1",
                            "Forgetting that nested dynamic groups are not supported",
                        ],
                        interviewTips: [
                            "Explain the difference between Security and M365 groups",
                            "Discuss dynamic group rule syntax and common patterns",
                            "Mention group-based licensing as a management strategy",
                        ],
                        examTips: [
                            "Know dynamic group rule syntax (e.g., user.department -eq 'Sales')",
                            "Understand which group types support dynamic membership",
                            "Know licensing requirements for dynamic groups (P1)",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show the dynamic group rule builder in the portal",
                            "CreateExample dynamic rules for common scenarios",
                            "Demonstrate group-based licensing assignment",
                            "Discuss naming conventions and group governance",
                        ],
                        realExamples: [
                            "Organization reduced manual group management by 80% using dynamic groups for department-based access",
                            "Company used group-based licensing to automate E5 assignment for all Finance users",
                        ],
                        questionsToAsk: [
                            "How do you currently manage group memberships?",
                            "Do you have a naming convention for groups?",
                            "How many groups does your organization have approximately?",
                        ],
                    },
                },
                {
                    id: "lesson-2-3",
                    title: "External Identities & Guest Access",
                    slug: "external-identities",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra External ID enables organizations to collaborate securely with partners, vendors, and customers. B2B collaboration allows you to invite external users as guests into your tenant, granting them controlled access to specific resources.",
                            "Guest users can authenticate using their own organization's credentials (if they have Entra ID or Google), a one-time passcode via email, or a Microsoft account. This means partners don't need to create separate credentials for your organization.",
                            "External collaboration settings control who can invite guests, which domains are allowed/blocked, and what level of access guests receive. Proper configuration balances collaboration needs with security requirements.",
                        ],
                        keyPoints: [
                            "B2B collaboration: Invite external users as guests in your tenant",
                            "B2C: Customer-facing identity for apps (separate product)",
                            "Guest users sign in with their own credentials (federated, OTP, or MSA)",
                            "Cross-tenant access settings control inbound/outbound collaboration",
                            "External collaboration settings govern invitation permissions and domain restrictions",
                        ],
                        architecture: {
                            title: "External Identity Flow",
                            steps: [
                                { step: 1, title: "Invite Guest", description: "Admin or user sends B2B invitation to external email", icon: "Send" },
                                { step: 2, title: "Redemption", description: "Guest redeems invitation using their identity provider", icon: "LogIn" },
                                { step: 3, title: "Authentication", description: "Guest authenticates via federation, OTP, or Microsoft account", icon: "Fingerprint" },
                                { step: 4, title: "Access Granted", description: "Guest accesses permitted resources per policy", icon: "Key" },
                                { step: 5, title: "Governance", description: "Access reviews ensure ongoing appropriateness", icon: "ClipboardCheck" },
                            ],
                        },
                        whyItMatters: "Modern business requires collaboration across organizational boundaries. Without proper external identity management, organizations resort to creating internal accounts for partners (security risk) or using shared credentials (audit nightmare). B2B collaboration provides secure, auditable external access.",
                        commonMistakes: [
                            "Creating internal accounts for external partners instead of using guest access",
                            "Not restricting which domains can be invited",
                            "Forgetting to set up access reviews for guest users",
                            "Allowing all users to invite guests without governance",
                        ],
                        interviewTips: [
                            "Explain B2B vs B2C scenarios and when to use each",
                            "Discuss cross-tenant access settings for multi-org scenarios",
                            "Mention guest user lifecycle management and cleanup",
                        ],
                        examTips: [
                            "Know the guest user authentication options",
                            "Understand external collaboration settings and domain restrictions",
                            "Know how cross-tenant access policies work",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Demo inviting a guest user and the redemption experience",
                            "Show external collaboration settings in the admin center",
                            "Discuss real scenarios for B2B collaboration",
                            "Cover guest user access reviews for cleanup",
                        ],
                        realExamples: [
                            "Consulting firm used B2B to give 200 client users controlled access to project SharePoint sites",
                            "Manufacturing company discovered 3000 stale guest accounts during their first access review",
                        ],
                        questionsToAsk: [
                            "How does your organization currently collaborate with external partners?",
                            "Do you have governance around guest user lifecycle?",
                            "Have you configured domain allow/block lists?",
                        ],
                    },
                },
                {
                    id: "lesson-2-4",
                    title: "Administrative Units & Role-Based Access",
                    slug: "admin-units-rbac",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Administrative units (AUs) in Microsoft Entra ID allow you to restrict administrative scope. Instead of giving an administrator tenant-wide permissions, you can scope their role to a specific administrative unit containing a subset of users, groups, or devices.",
                            "Built-in Entra ID roles include Global Administrator, User Administrator, Security Administrator, and many more. Custom roles can be created to grant specific permissions tailored to your organization's needs (requires P1).",
                            "The principle of least privilege should guide role assignments: administrators should have only the permissions they need, scoped to the resources they manage. PIM (Privileged Identity Management) adds just-in-time access for elevated roles.",
                        ],
                        keyPoints: [
                            "Administrative units scope admin permissions to a subset of objects",
                            "60+ built-in roles available for common administrative tasks",
                            "Custom roles allow granular permission assignment (P1 required)",
                            "Global Administrator is the most powerful role - limit to 2-4 users",
                            "Use PIM for just-in-time activation of privileged roles (P2 required)",
                        ],
                        architecture: {
                            title: "RBAC Architecture",
                            steps: [
                                { step: 1, title: "Define AUs", description: "Create administrative units by region, department, or function", icon: "Building" },
                                { step: 2, title: "Assign Members", description: "Add users, groups, or devices to administrative units", icon: "Users" },
                                { step: 3, title: "Assign Roles", description: "Grant admin roles scoped to specific administrative units", icon: "Key" },
                                { step: 4, title: "Activate via PIM", description: "Admins activate roles just-in-time when needed", icon: "Timer" },
                            ],
                        },
                        whyItMatters: "Without administrative units, delegating admin tasks requires granting tenant-wide permissions. This violates least privilege and creates excessive risk. AUs enable safe delegation while maintaining security boundaries between business units or regions.",
                        commonMistakes: [
                            "Making too many users Global Administrators",
                            "Not using administrative units for delegated administration",
                            "Assigning permanent privileged roles instead of using PIM",
                            "Creating custom roles when built-in roles would suffice",
                        ],
                        interviewTips: [
                            "Explain the least privilege principle in context of Entra ID roles",
                            "Discuss when to use administrative units vs other scoping methods",
                            "Mention PIM as the solution for just-in-time privileged access",
                        ],
                        examTips: [
                            "Know the key built-in roles and their permissions",
                            "Understand administrative unit capabilities and limitations",
                            "Know that custom roles require P1 and PIM requires P2",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Start with the risk of over-privileged administrators",
                            "Show creating an administrative unit and scoping a role",
                            "Discuss the common built-in roles and when to use them",
                            "Introduce PIM as a preview for the governance module",
                        ],
                        realExamples: [
                            "Global company created AUs per country, letting regional IT manage their own users",
                            "Organization reduced Global Admins from 15 to 3, using scoped roles for the rest",
                        ],
                        questionsToAsk: [
                            "How many Global Administrators does your organization have?",
                            "Do you delegate administration to regional or departmental IT teams?",
                            "Are you using PIM for privileged role management?",
                        ],
                    },
                },
                {
                    id: "lesson-2-5",
                    title: "Device Identity & Registration",
                    slug: "device-identity",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Device identity in Microsoft Entra ID determines how devices are managed and how they interact with cloud resources. There are three join types: Entra registered (BYOD personal devices), Entra joined (cloud-only corporate devices), and Entra hybrid joined (on-premises domain-joined devices also registered in Entra ID).",
                            "Entra registered devices allow users to access corporate resources from personal devices with minimal IT control. Entra joined devices are fully managed cloud devices - ideal for cloud-first organizations. Hybrid joined devices bridge the gap for organizations with existing on-premises AD infrastructure.",
                            "Device-based Conditional Access policies can require managed or compliant devices for access. Intune compliance policies define what constitutes a compliant device (encryption, OS version, antivirus). Device identity is a cornerstone of Zero Trust - you must verify both the user AND the device.",
                        ],
                        keyPoints: [
                            "Entra Registered: BYOD devices, user-level association, minimal IT control",
                            "Entra Joined: Cloud-managed corporate devices, replaces domain join",
                            "Hybrid Joined: Domain-joined + Entra registered, for transition scenarios",
                            "Device compliance via Intune enforces security baselines",
                            "Primary Refresh Token (PRT) enables SSO on Entra joined/registered devices",
                        ],
                        architecture: {
                            title: "Device Join Types Comparison",
                            steps: [
                                { step: 1, title: "Entra Registered", description: "Personal device, user signs in with Entra ID, device not IT-managed", icon: "Smartphone" },
                                { step: 2, title: "Entra Joined", description: "Corporate device, fully cloud-managed, no on-prem domain needed", icon: "Laptop" },
                                { step: 3, title: "Hybrid Joined", description: "Domain-joined + cloud-registered, synced via Entra Connect", icon: "RefreshCw" },
                                { step: 4, title: "Compliance", description: "Intune checks encryption, OS patches, antivirus status", icon: "ShieldCheck" },
                            ],
                        },
                        whyItMatters: "In Zero Trust, device identity is as important as user identity. An authenticated user on a compromised or unmanaged device is still a risk. Device-based policies ensure that only healthy, managed devices can access sensitive resources.",
                        commonMistakes: [
                            "Confusing the three device join types and their requirements",
                            "Not understanding that hybrid join requires Entra Connect device writeback",
                            "Attempting to require compliant devices without Intune enrollment",
                            "Forgetting that Entra joined devices cannot access on-prem resources without special configuration",
                        ],
                        interviewTips: [
                            "Clearly differentiate the three join types with use cases",
                            "Explain the Primary Refresh Token and how it enables SSO",
                            "Discuss device-based Conditional Access for Zero Trust",
                        ],
                        examTips: [
                            "Know the three device join types and requirements for each",
                            "Understand device compliance requires Intune",
                            "Know how device state is used in Conditional Access policies",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show device management in the Entra admin center",
                            "Explain Primary Refresh Token and SSO on devices",
                            "Demo the device compliance flow with Intune",
                        ],
                        realExamples: [
                            "Organization moved from hybrid join to full Entra join for new devices, saving on domain controller infrastructure",
                            "Company enabled BYOD via Entra registered devices with app protection policies",
                        ],
                        questionsToAsk: [
                            "What device join type does your organization primarily use?",
                            "Are personal devices allowed to access corporate resources?",
                            "Is Intune deployed for device compliance?",
                        ],
                    },
                },
            ],
        },
        {
            id: "module-3",
            title: "Authentication & MFA",
            slug: "authentication-mfa",
            description: "Implement secure authentication methods including MFA, passwordless, and self-service password reset",
            icon: "KeyRound",
            duration: "2.5 hours",
            lessons: [
                {
                    id: "lesson-3-1",
                    title: "Authentication Methods Overview",
                    slug: "auth-methods",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra ID supports multiple authentication methods that can be combined for secure access. The authentication methods policy controls which methods are available to users across the tenant, replacing the legacy per-user MFA and SSPR settings.",
                            "Authentication methods fall into three categories: something you know (passwords, security questions), something you have (phone, FIDO2 key, authenticator app), and something you are (biometrics like Windows Hello). Stronger methods combine multiple factors.",
                            "The authentication strengths feature in Conditional Access allows administrators to require specific combinations of methods for different scenarios - for example, requiring phishing-resistant methods for admin access while allowing SMS for general users.",
                        ],
                        keyPoints: [
                            "Password: Traditional method, should be combined with a second factor",
                            "Microsoft Authenticator: Push notifications, OTP, and passwordless",
                            "FIDO2 Security Keys: Phishing-resistant hardware-based authentication",
                            "Windows Hello for Business: Biometric or PIN tied to the device",
                            "SMS/Voice: Phone-based verification (less secure, being phased out)",
                        ],
                        architecture: {
                            title: "Authentication Method Strength Levels",
                            steps: [
                                { step: 1, title: "Password Only", description: "Weakest - single factor, vulnerable to phishing and credential theft", icon: "Key" },
                                { step: 2, title: "Password + SMS", description: "MFA but SMS is susceptible to SIM swapping attacks", icon: "Smartphone" },
                                { step: 3, title: "Password + App", description: "Stronger MFA with Authenticator push or TOTP", icon: "ShieldCheck" },
                                { step: 4, title: "Passwordless", description: "Authenticator passwordless, WHfB, or FIDO2 key", icon: "Fingerprint" },
                                { step: 5, title: "Phishing-Resistant", description: "FIDO2 or WHfB - immune to credential phishing", icon: "Shield" },
                            ],
                        },
                        whyItMatters: "Authentication is the front door to your organization. Using weak methods like password-only leaves you vulnerable to credential stuffing, phishing, and brute force attacks. Microsoft reports that MFA blocks over 99.9% of account compromise attacks - making authentication method selection one of the highest-impact security decisions.",
                        commonMistakes: [
                            "Relying solely on passwords without any second factor",
                            "Using SMS as the only MFA method despite its known vulnerabilities",
                            "Not configuring the authentication methods policy centrally",
                            "Allowing users to choose weak authentication methods for privileged operations",
                        ],
                        interviewTips: [
                            "Explain the three authentication factor categories",
                            "Discuss the security spectrum from passwords to phishing-resistant methods",
                            "Mention Microsoft's push toward passwordless authentication",
                        ],
                        examTips: [
                            "Know all supported authentication methods and their strengths",
                            "Understand authentication strength policies in Conditional Access",
                            "Know that FIDO2 and WHfB are considered phishing-resistant",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Start with the 99.9% statistic about MFA blocking attacks",
                            "Show the authentication methods policy in the admin center",
                            "Compare method strengths visually",
                            "Discuss the migration path from legacy MFA to authentication methods policy",
                        ],
                        realExamples: [
                            "Company using only passwords experienced account compromise in 30% of phishing campaigns; MFA dropped this to near zero",
                            "Organization rolled out FIDO2 keys for IT admins as their first phishing-resistant deployment",
                        ],
                        questionsToAsk: [
                            "What authentication methods does your organization currently use?",
                            "Have you experienced account compromise from weak authentication?",
                            "Is your organization considering passwordless authentication?",
                        ],
                    },
                },
                {
                    id: "lesson-3-2",
                    title: "Configuring Multi-Factor Authentication",
                    slug: "mfa-configuration",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Multi-Factor Authentication (MFA) requires users to provide two or more verification factors to access resources. In Microsoft Entra ID, MFA can be enforced through security defaults (basic), Conditional Access policies (recommended), or per-user MFA settings (legacy).",
                            "Conditional Access-based MFA is the recommended approach as it provides granular control. You can require MFA for specific applications, user groups, risk levels, locations, or device states. This avoids the all-or-nothing approach of security defaults.",
                            "The MFA registration experience is managed through the combined registration flow, where users register for both MFA and SSPR simultaneously. Administrators can use the Registration Campaign feature to nudge users to set up the Authenticator app.",
                        ],
                        keyPoints: [
                            "Security Defaults: Free, enables MFA for all users (basic enforcement)",
                            "Conditional Access MFA: Granular policies based on conditions (requires P1)",
                            "Per-user MFA: Legacy method, avoid for new deployments",
                            "Combined registration: Users register MFA and SSPR in one flow",
                            "MFA fraud alerts: Users can report suspicious MFA prompts",
                        ],
                        architecture: {
                            title: "MFA Enforcement Flow",
                            steps: [
                                { step: 1, title: "User Signs In", description: "User provides primary credentials (username/password)", icon: "LogIn" },
                                { step: 2, title: "Policy Evaluation", description: "Conditional Access evaluates if MFA is required", icon: "Filter" },
                                { step: 3, title: "MFA Challenge", description: "User prompted for second factor (app, SMS, call)", icon: "Smartphone" },
                                { step: 4, title: "Verification", description: "Second factor validated by Entra ID", icon: "CheckCircle" },
                                { step: 5, title: "Access Granted", description: "Token issued with MFA claim, access permitted", icon: "Key" },
                            ],
                        },
                        whyItMatters: "MFA is the single most effective security control against identity attacks. Without it, a compromised password gives an attacker full access. With Conditional Access-based MFA, organizations can balance security and user experience by requiring MFA only when the risk warrants it.",
                        commonMistakes: [
                            "Using per-user MFA instead of Conditional Access policies",
                            "Not providing fallback authentication methods if primary method is unavailable",
                            "Enabling MFA without user communication and training on registration",
                            "Not excluding emergency access (break-glass) accounts from MFA policies",
                        ],
                        interviewTips: [
                            "Explain why Conditional Access MFA is preferred over security defaults and per-user MFA",
                            "Discuss the combined registration experience",
                            "Mention break-glass accounts and why they need MFA exceptions",
                        ],
                        examTips: [
                            "Know the three MFA enforcement methods and which is recommended",
                            "Understand MFA registration and the combined registration flow",
                            "Know about break-glass accounts and emergency access",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Demo the MFA registration experience from a user perspective",
                            "Show creating a Conditional Access policy that requires MFA",
                            "Discuss break-glass accounts and their importance",
                            "Cover the Registration Campaign feature for Authenticator adoption",
                        ],
                        realExamples: [
                            "Hospital rolled out MFA in phases - clinical staff got Authenticator app, shared workstations used FIDO2 keys",
                            "Organization forgot to exclude break-glass accounts from MFA and got locked out during an outage",
                        ],
                        questionsToAsk: [
                            "How is MFA currently enforced in your organization?",
                            "Do you have break-glass (emergency access) accounts configured?",
                            "What challenges did your users face when MFA was rolled out?",
                        ],
                    },
                },
                {
                    id: "lesson-3-3",
                    title: "Passwordless Authentication",
                    slug: "passwordless",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Passwordless authentication eliminates the password entirely, replacing it with stronger, more convenient methods. Microsoft supports three passwordless methods: Microsoft Authenticator (phone sign-in), FIDO2 security keys, and Windows Hello for Business.",
                            "Microsoft Authenticator passwordless works by sending a number-matching push notification to the user's phone. The user matches the number displayed on screen, then provides biometric or PIN verification on the device. This is both more secure and faster than password + MFA.",
                            "FIDO2 security keys (like YubiKey) provide the highest level of phishing resistance. They use public key cryptography tied to the specific site origin, making them immune to phishing attacks. Windows Hello for Business provides a similar level of security tied to the user's Windows device.",
                        ],
                        keyPoints: [
                            "Authenticator Passwordless: Number matching + biometric on the phone",
                            "FIDO2 Keys: Hardware tokens with phishing-resistant cryptographic auth",
                            "Windows Hello for Business: Device-bound biometric or PIN authentication",
                            "All passwordless methods are considered multi-factor (device + biometric/PIN)",
                            "Phishing-resistant: FIDO2 and WHfB are immune to credential phishing",
                        ],
                        architecture: {
                            title: "Passwordless Authentication Flow",
                            steps: [
                                { step: 1, title: "Enter Username", description: "User provides username only - no password needed", icon: "CircleUser" },
                                { step: 2, title: "Challenge Sent", description: "Number match sent to Authenticator or FIDO2 prompt", icon: "Bell" },
                                { step: 3, title: "Local Verify", description: "User provides biometric or PIN on device", icon: "Fingerprint" },
                                { step: 4, title: "Crypto Exchange", description: "Public key cryptography validates the authentication", icon: "Lock" },
                                { step: 5, title: "Signed In", description: "User gains access without ever typing a password", icon: "CheckCircle" },
                            ],
                        },
                        whyItMatters: "Passwords are the weakest link in identity security - they can be guessed, phished, stolen, or sprayed. Passwordless methods are both more secure AND provide a better user experience. Microsoft's own internal deployment of passwordless eliminated over 99% of password-related helpdesk tickets.",
                        commonMistakes: [
                            "Enabling passwordless but not disabling password as a fallback method",
                            "Not planning the FIDO2 key distribution and recovery process",
                            "Deploying Windows Hello for Business without proper device management",
                            "Using passwordless authentication but not enabling number matching in Authenticator",
                        ],
                        interviewTips: [
                            "Compare the three passwordless methods and when to use each",
                            "Explain what makes FIDO2 phishing-resistant at a technical level",
                            "Discuss the user experience improvements of passwordless",
                        ],
                        examTips: [
                            "Know the three passwordless methods and their requirements",
                            "Understand which methods are phishing-resistant vs phishing-capable",
                            "Know how to enable passwordless in the authentication methods policy",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Demo the Authenticator passwordless sign-in flow",
                            "Show a FIDO2 key and explain how it works",
                            "Discuss the deployment strategy for going passwordless",
                            "Cover temporary access pass for bootstrapping passwordless",
                        ],
                        realExamples: [
                            "Microsoft internally went passwordless for 99% of employee authentications",
                            "Manufacturing company deployed FIDO2 keys for factory floor workers who cannot use phones",
                        ],
                        questionsToAsk: [
                            "Is your organization interested in going passwordless?",
                            "Which passwordless method would best fit your workforce?",
                            "What is your biggest concern about eliminating passwords?",
                        ],
                    },
                },
                {
                    id: "lesson-3-4",
                    title: "Self-Service Password Reset (SSPR)",
                    slug: "sspr",
                    duration: "20 mins",
                    content: {
                        explanation: [
                            "Self-Service Password Reset (SSPR) allows users to reset their own passwords without contacting the helpdesk. This reduces IT support costs while improving user productivity. SSPR requires users to register authentication methods that can be used for verification during reset.",
                            "SSPR can be configured for cloud-only users or hybrid environments. Password writeback enables cloud-initiated password resets to flow back to on-premises Active Directory, ensuring password synchronization in hybrid identity deployments.",
                            "SSPR policies define how many authentication methods are required (one or two), which methods are available (email, phone, authenticator, security questions), and whether users are required to register during their next sign-in.",
                        ],
                        keyPoints: [
                            "SSPR reduces helpdesk password reset calls by 50-70%",
                            "One or two methods required for verification during reset",
                            "Combined registration: SSPR and MFA use the same registration flow",
                            "Password writeback enables cloud resets to sync to on-prem AD",
                            "SSPR can be scoped to specific groups or enabled for all users",
                        ],
                        architecture: {
                            title: "SSPR with Password Writeback",
                            steps: [
                                { step: 1, title: "User Locked Out", description: "User cannot remember password or account locked", icon: "Ban" },
                                { step: 2, title: "Click Reset", description: "User initiates self-service from the sign-in page", icon: "RefreshCw" },
                                { step: 3, title: "Verify Identity", description: "User proves identity via registered auth methods", icon: "Fingerprint" },
                                { step: 4, title: "Set New Password", description: "User creates new password meeting complexity rules", icon: "Key" },
                                { step: 5, title: "Writeback", description: "New password synced to on-prem AD via Entra Connect", icon: "RefreshCw" },
                            ],
                        },
                        whyItMatters: "Password resets account for 20-50% of helpdesk calls in most organizations. Each call costs $15-25 on average and reduces employee productivity. SSPR directly reduces these costs while empowering users. Combined with MFA registration, it forms a complete self-service authentication management experience.",
                        commonMistakes: [
                            "Enabling SSPR without password writeback in hybrid environments",
                            "Requiring only one auth method for reset (two is more secure)",
                            "Not enforcing SSPR registration before it is needed",
                            "Using security questions as the only SSPR verification method",
                        ],
                        interviewTips: [
                            "Quantify the cost savings from SSPR (helpdesk call reduction)",
                            "Explain password writeback and its requirements",
                            "Discuss the combined registration experience for MFA and SSPR",
                        ],
                        examTips: [
                            "Know the SSPR authentication methods and configuration options",
                            "Understand password writeback requirements (Entra Connect + P1)",
                            "Know the difference between one-method and two-method SSPR policies",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show the SSPR user experience from the sign-in page",
                            "Demonstrate SSPR configuration in the admin center",
                            "Explain password writeback setup via Entra Connect",
                            "Discuss the combined registration flow",
                        ],
                        realExamples: [
                            "Enterprise reduced Monday morning helpdesk calls by 60% after enabling SSPR",
                            "Organization discovered that password writeback was not configured, causing hybrid users to have mismatched passwords",
                        ],
                        questionsToAsk: [
                            "What percentage of your helpdesk calls are password-related?",
                            "Is SSPR currently enabled in your organization?",
                            "Do you have password writeback configured for hybrid users?",
                        ],
                    },
                },
                {
                    id: "lesson-3-5",
                    title: "Certificate-Based Auth, TAP & Password Protection",
                    slug: "cba-tap-password",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Certificate-Based Authentication (CBA) allows users to authenticate using X.509 certificates stored on smart cards or devices. This provides phishing-resistant authentication without passwords and is commonly used in government and regulated industries. CBA can be configured as single-factor or multi-factor based on policy OID rules.",
                            "Temporary Access Pass (TAP) is a time-limited passcode that allows users to onboard passwordless authentication methods. When a user receives a new FIDO2 key or needs to set up Authenticator, TAP provides a secure bootstrap mechanism without requiring a traditional password.",
                            "Microsoft Entra Password Protection prevents users from choosing weak or banned passwords. It includes a global banned password list maintained by Microsoft and allows custom banned password lists. For hybrid environments, Password Protection agents can be deployed on domain controllers to enforce bans during on-premises password changes.",
                        ],
                        keyPoints: [
                            "CBA: X.509 certificates on smart cards, phishing-resistant, configurable strength",
                            "TAP: Time-limited passcode to bootstrap passwordless methods",
                            "Global banned password list: Microsoft-maintained common weak passwords",
                            "Custom banned password list: Organization-specific terms to block",
                            "On-prem Password Protection: Agents on DCs enforce cloud ban lists",
                        ],
                        architecture: {
                            title: "Advanced Authentication Methods",
                            steps: [
                                { step: 1, title: "CBA Setup", description: "Upload CA certificates, configure user bindings and auth strength", icon: "FileKey" },
                                { step: 2, title: "TAP Issuance", description: "Admin creates time-limited pass for user onboarding", icon: "Timer" },
                                { step: 3, title: "Password Protection", description: "Cloud + custom ban lists evaluate password changes", icon: "ShieldAlert" },
                                { step: 4, title: "On-Prem Agent", description: "DC agents enforce cloud ban lists during on-prem resets", icon: "Building" },
                            ],
                        },
                        whyItMatters: "These features address critical gaps: CBA meets compliance requirements for smart card authentication, TAP solves the chicken-and-egg problem of deploying passwordless methods, and Password Protection prevents the most common attack vector - weak passwords.",
                        commonMistakes: [
                            "Not configuring CBA authentication strength policies with the correct certificate OIDs",
                            "Setting TAP durations too long, creating a security window",
                            "Forgetting to deploy Password Protection agents on all domain controllers",
                            "Not testing custom banned password lists before enabling enforcement",
                        ],
                        interviewTips: [
                            "Explain when CBA is preferred over FIDO2 or WHfB",
                            "Describe the TAP use case for passwordless bootstrapping",
                            "Discuss how Password Protection works in hybrid environments",
                        ],
                        examTips: [
                            "Know CBA configuration requirements and PKI integration",
                            "Understand TAP settings: lifetime, one-time vs reusable",
                            "Know Password Protection architecture for cloud and on-prem",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show CBA configuration in authentication methods",
                            "Demo TAP creation and user onboarding experience",
                            "Explain Password Protection architecture with DC agents",
                        ],
                        realExamples: [
                            "Government agency deployed CBA on smart cards for all employees to meet NIST guidelines",
                            "Company used TAP to bootstrap 5000 FIDO2 keys during a passwordless rollout",
                        ],
                        questionsToAsk: [
                            "Does your organization use smart cards or certificates for authentication?",
                            "How do you onboard users to passwordless methods?",
                            "Is custom password protection configured in your tenant?",
                        ],
                    },
                },
                {
                    id: "lesson-3-6",
                    title: "Account Management & Session Revocation",
                    slug: "account-session-mgmt",
                    duration: "20 mins",
                    content: {
                        explanation: [
                            "Disabling and blocking user accounts is a critical incident response action. When an account is compromised or an employee is terminated, you need to immediately prevent sign-in, revoke all active sessions, and disable refresh tokens to cut off access.",
                            "Session revocation in Microsoft Entra ID can be done via the Revoke Sessions action, which invalidates all refresh tokens. However, access tokens may remain valid for up to 1 hour. Continuous Access Evaluation (CAE) significantly reduces this gap for CAE-capable applications.",
                            "Microsoft Entra Kerberos authentication enables hybrid identities to use cloud credentials for accessing on-premises Kerberos-based resources. This is particularly important for organizations transitioning from AD FS to cloud authentication while maintaining access to legacy applications.",
                        ],
                        keyPoints: [
                            "Block sign-in: Prevents new authentications immediately",
                            "Revoke sessions: Invalidates refresh tokens for all devices",
                            "Access token lifetime: Up to 1 hour after revocation without CAE",
                            "CAE: Reduces token gap to near real-time for supported apps",
                            "Entra Kerberos: Cloud auth for on-prem Kerberos resources",
                        ],
                        whyItMatters: "During a security incident, every minute of continued access matters. Understanding the full chain of actions needed to completely cut off a compromised identity - and the token lifetime gaps that exist - is essential for effective incident response.",
                        commonMistakes: [
                            "Only disabling the account without revoking sessions - existing tokens remain valid",
                            "Not understanding the access token lifetime gap",
                            "Forgetting to revoke app-specific passwords for legacy apps",
                            "Not configuring CAE-capable apps to reduce the revocation gap",
                        ],
                        interviewTips: [
                            "Explain the full incident response process for a compromised identity",
                            "Discuss the token lifetime gap and how CAE mitigates it",
                            "Mention Entra Kerberos for hybrid authentication scenarios",
                        ],
                        examTips: [
                            "Know the steps to fully disable a compromised account",
                            "Understand access token vs refresh token revocation timing",
                            "Know Entra Kerberos requirements for hybrid environments",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Walk through the incident response checklist for a compromised account",
                            "Explain token types and their lifetimes",
                            "Discuss CAE and how it reduces the revocation gap",
                        ],
                        realExamples: [
                            "Terminated employee's account was disabled but they retained access via cached tokens for an hour",
                            "Organization enabled CAE and reduced effective revocation time from 1 hour to under 10 seconds",
                        ],
                        questionsToAsk: [
                            "What is your current process when an account is compromised?",
                            "Are you aware of the token lifetime gap after session revocation?",
                            "Are CAE-capable applications in use in your environment?",
                        ],
                    },
                },
            ],
        },
        {
            id: "module-4",
            title: "Conditional Access & Zero Trust",
            slug: "conditional-access",
            description: "Design and implement Conditional Access policies to enforce Zero Trust security principles",
            icon: "ShieldCheck",
            duration: "3 hours",
            lessons: [
                {
                    id: "lesson-4-1",
                    title: "Conditional Access Fundamentals",
                    slug: "ca-fundamentals",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Conditional Access is the Zero Trust policy engine of Microsoft Entra ID. It brings signals together (user, device, location, risk, application) to make real-time access decisions: allow, block, or require additional verification.",
                            "Policies follow an if-then model: IF a user matches certain conditions (assignments), THEN enforce specific access controls (grant/session controls). Multiple policies can apply simultaneously, and the most restrictive controls win.",
                            "Conditional Access replaces the need for all-or-nothing security approaches. Instead of requiring MFA for every sign-in or blocking all external access, policies can be tailored to specific scenarios based on risk and context.",
                        ],
                        keyPoints: [
                            "Zero Trust engine: Never trust, always verify, every access request",
                            "Signal-based decisions: User, device, location, app, risk level",
                            "Assignments: WHO (users/groups), WHAT (apps), WHERE (locations/platforms)",
                            "Controls: Grant (MFA, compliant device, terms of use) or Block",
                            "Session controls: App-enforced restrictions, sign-in frequency, persistent browser",
                        ],
                        architecture: {
                            title: "Conditional Access Policy Evaluation",
                            steps: [
                                { step: 1, title: "Signals", description: "User, device, location, app, real-time risk detected", icon: "Activity" },
                                { step: 2, title: "Assignments", description: "Policy checks: does this user/app/condition match?", icon: "Filter" },
                                { step: 3, title: "Evaluation", description: "All matching policies combined, most restrictive wins", icon: "Gauge" },
                                { step: 4, title: "Decision", description: "Allow, Block, or Require additional verification", icon: "ToggleLeft" },
                                { step: 5, title: "Enforcement", description: "Decision enforced at the resource level", icon: "ShieldCheck" },
                            ],
                        },
                        whyItMatters: "Conditional Access is the cornerstone of Zero Trust security in Microsoft 365 and Azure. It enables organizations to move from perimeter-based security to identity-based security, making access decisions based on real-time context. Microsoft processes over 23 billion Conditional Access policy evaluations daily.",
                        commonMistakes: [
                            "Starting with overly restrictive policies that block legitimate users",
                            "Not using report-only mode to test policies before enforcement",
                            "Forgetting to exclude break-glass accounts from block policies",
                            "Creating conflicting policies without understanding the evaluation logic",
                        ],
                        interviewTips: [
                            "Explain the if-then model with real examples",
                            "Discuss how multiple policies interact (most restrictive wins)",
                            "Mention report-only mode as a best practice for testing",
                        ],
                        examTips: [
                            "Know the assignment conditions: users, apps, conditions",
                            "Understand grant controls vs session controls",
                            "Know that Conditional Access requires Entra ID P1",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Start with the Zero Trust principle: never trust, always verify",
                            "Walk through a policy creation in the admin center",
                            "Emphasize report-only mode for safe testing",
                            "Show how to read the sign-in logs to troubleshoot CA policies",
                        ],
                        realExamples: [
                            "Organization blocked all sign-ins from countries where they have no employees, reducing unauthorized access attempts by 95%",
                            "Company required MFA for all cloud apps from non-corporate networks, maintaining productivity for office workers",
                        ],
                        questionsToAsk: [
                            "How many Conditional Access policies does your organization have?",
                            "Do you use report-only mode to test policies?",
                            "Have you ever accidentally locked users out with a CA policy?",
                        ],
                    },
                },
                {
                    id: "lesson-4-2",
                    title: "Named Locations & Device Conditions",
                    slug: "locations-devices",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Named locations define trusted or known network locations by IP ranges or countries/regions. They can be used in Conditional Access policies to vary requirements based on where users are signing in from - for example, skipping MFA when on the corporate network.",
                            "Device conditions allow policies to require managed or compliant devices. A compliant device meets the organization's security standards (encryption, antivirus, OS version) as enforced by Intune. Entra hybrid joined devices bridge on-premises management with cloud policies.",
                            "Combining location and device conditions creates powerful policies: require MFA AND a compliant device when accessing sensitive apps from outside the corporate network, while allowing seamless access from trusted locations on managed devices.",
                        ],
                        keyPoints: [
                            "IP-based named locations: Define by IP ranges (IPv4/IPv6)",
                            "Country-based locations: Block or allow by geographic region",
                            "Trusted locations: Mark network as trusted to reduce MFA friction",
                            "Device compliance: Require devices meet Intune compliance policies",
                            "Entra hybrid join: On-prem domain-joined devices registered in Entra ID",
                        ],
                        architecture: {
                            title: "Location & Device Policy Logic",
                            steps: [
                                { step: 1, title: "Define Locations", description: "Create named locations with IP ranges or countries", icon: "MapPin" },
                                { step: 2, title: "Device Enrollment", description: "Devices enrolled in Intune or hybrid joined", icon: "Laptop" },
                                { step: 3, title: "Compliance Check", description: "Intune evaluates device against compliance policy", icon: "ClipboardCheck" },
                                { step: 4, title: "CA Evaluation", description: "Policy checks location + device state for access decision", icon: "Filter" },
                            ],
                        },
                        whyItMatters: "Named locations and device conditions enable context-aware security. Without them, organizations must apply the same security level everywhere, leading to either excessive friction for trusted scenarios or insufficient security for risky ones. Context-aware policies optimize both security and user experience.",
                        commonMistakes: [
                            "Defining overly broad named locations that include untrusted networks",
                            "Not keeping named location IP ranges updated when networks change",
                            "Requiring compliant devices without having Intune compliance policies configured",
                            "Confusing Entra registered, Entra joined, and hybrid joined device states",
                        ],
                        interviewTips: [
                            "Explain the difference between named locations and trusted locations",
                            "Discuss Entra device join types: registered, joined, hybrid joined",
                            "Give examples of combined location + device policies",
                        ],
                        examTips: [
                            "Know the device join types and when to use each",
                            "Understand how named locations integrate with Conditional Access",
                            "Know that device compliance requires Microsoft Intune",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Demo creating a named location in the admin center",
                            "Show the difference between the three device join types",
                            "Create a policy that combines location and device conditions",
                            "Discuss the risk of trusting VPN exit points",
                        ],
                        realExamples: [
                            "Company trusted their VPN exit IPs and skipped MFA - discovered the VPN had a vulnerability",
                            "Organization required compliant devices for Finance apps but not for general email access",
                        ],
                        questionsToAsk: [
                            "Have you defined named locations for your corporate networks?",
                            "Are your devices enrolled in Intune for compliance checking?",
                            "Which device join type does your organization primarily use?",
                        ],
                    },
                },
                {
                    id: "lesson-4-3",
                    title: "Risk-Based Conditional Access",
                    slug: "risk-based-policies",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra Identity Protection detects risk signals in real-time and assigns risk levels to sign-ins and users. Conditional Access policies can use these risk levels to dynamically adjust access requirements - for example, requiring MFA for medium-risk sign-ins and blocking high-risk ones.",
                            "Sign-in risk assesses the probability that a given sign-in was not performed by the legitimate user. Signals include anonymous IP addresses, atypical travel, malware-linked IPs, and token anomalies. User risk represents the probability that a user's identity has been compromised.",
                            "Risk-based policies create an adaptive security posture that automatically responds to threats. Low-risk sign-ins proceed normally, medium-risk ones require additional verification, and high-risk ones are blocked until remediated. This balances security with productivity.",
                        ],
                        keyPoints: [
                            "Sign-in risk: Real-time assessment of each authentication attempt",
                            "User risk: Cumulative risk score based on compromised credentials, anomalies",
                            "Risk levels: None, Low, Medium, High - set by Identity Protection",
                            "Remediation: Force password change or MFA for risky users/sign-ins",
                            "Identity Protection requires Entra ID P2 license",
                        ],
                        architecture: {
                            title: "Risk-Based Policy Flow",
                            steps: [
                                { step: 1, title: "Signal Collection", description: "Billions of signals analyzed: IP, behavior, leaked credentials", icon: "Activity" },
                                { step: 2, title: "Risk Calculation", description: "ML models determine sign-in and user risk levels", icon: "Brain" },
                                { step: 3, title: "Policy Match", description: "CA policy evaluates risk level against configured threshold", icon: "Filter" },
                                { step: 4, title: "Adaptive Response", description: "Allow, MFA, password change, or block based on risk", icon: "ShieldCheck" },
                                { step: 5, title: "Remediation", description: "User self-remediates or admin investigates and resolves", icon: "RefreshCw" },
                            ],
                        },
                        whyItMatters: "Static security policies apply the same controls regardless of risk level. Risk-based policies adapt in real-time, providing stronger security when threats are detected while reducing friction during normal operations. Organizations using risk-based CA see 60% fewer successful account compromises.",
                        commonMistakes: [
                            "Setting risk thresholds too low, causing excessive MFA prompts for low-risk events",
                            "Not configuring user risk remediation (password change) alongside sign-in risk policies",
                            "Ignoring risk detections in the Identity Protection dashboard",
                            "Not understanding that risk-based policies require P2 licensing",
                        ],
                        interviewTips: [
                            "Explain the difference between sign-in risk and user risk",
                            "Discuss how risk-based policies create adaptive security",
                            "Mention the types of risk detections Identity Protection can identify",
                        ],
                        examTips: [
                            "Know sign-in risk vs user risk and their risk levels",
                            "Understand risk remediation options (password change, MFA)",
                            "Know that risk-based CA requires Entra ID P2",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show the Identity Protection dashboard and risk detections",
                            "Create a risk-based Conditional Access policy step by step",
                            "Discuss real risk detection types and what triggers them",
                            "Explain investigation and remediation workflows",
                        ],
                        realExamples: [
                            "Organization detected credential leak for an executive via Identity Protection before the attacker could use them",
                            "Risk-based CA detected impossible travel and automatically blocked a compromised account accessing from two continents simultaneously",
                        ],
                        questionsToAsk: [
                            "Are you currently using Identity Protection risk policies?",
                            "How do you currently detect compromised credentials?",
                            "Do you have a process for investigating risky sign-ins?",
                        ],
                    },
                },
                {
                    id: "lesson-4-4",
                    title: "Session Controls & App Protection",
                    slug: "session-controls",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Session controls in Conditional Access go beyond the initial access decision to control what users can do during their session. Sign-in frequency controls how often users must re-authenticate, while persistent browser sessions determine if users stay signed in across browser restarts.",
                            "Conditional Access App Control integrates with Microsoft Defender for Cloud Apps to provide real-time session monitoring and control. It can prevent downloads, block copy/paste, watermark documents, and monitor session activity for sensitive applications.",
                            "Application-enforced restrictions work with specific Microsoft apps (SharePoint, Exchange) to limit functionality based on device state. For example, restricting users on unmanaged devices to web-only access with no download capability.",
                        ],
                        keyPoints: [
                            "Sign-in frequency: Control re-authentication intervals (e.g., every 8 hours)",
                            "Persistent browser: Allow or require non-persistent sessions",
                            "App control: Real-time session monitoring via Defender for Cloud Apps",
                            "App-enforced restrictions: Limited access on unmanaged devices",
                            "Continuous Access Evaluation (CAE): Near real-time policy enforcement",
                        ],
                        architecture: {
                            title: "Session Control Architecture",
                            steps: [
                                { step: 1, title: "Access Granted", description: "User passes initial CA evaluation and gains access", icon: "LogIn" },
                                { step: 2, title: "Session Policy", description: "Session controls applied: frequency, persistence, app control", icon: "Settings" },
                                { step: 3, title: "Real-Time Monitor", description: "Defender for Cloud Apps monitors actions in real-time", icon: "Eye" },
                                { step: 4, title: "Action Control", description: "Block downloads, watermark, or restrict based on policy", icon: "Ban" },
                                { step: 5, title: "CAE Events", description: "Critical events trigger immediate re-evaluation", icon: "Zap" },
                            ],
                        },
                        whyItMatters: "Access decisions should not end at sign-in. Once a user has access, their actions within the session matter too. Session controls extend Zero Trust from the authentication moment throughout the entire user session, preventing data exfiltration and enabling safe access from any device.",
                        commonMistakes: [
                            "Setting sign-in frequency too aggressively, frustrating users with constant re-auth",
                            "Not understanding that app-enforced restrictions only work with specific Microsoft apps",
                            "Deploying Conditional Access App Control without Defender for Cloud Apps licensing",
                            "Ignoring Continuous Access Evaluation capabilities for near real-time enforcement",
                        ],
                        interviewTips: [
                            "Explain the difference between grant controls and session controls",
                            "Discuss Continuous Access Evaluation and its benefits",
                            "Give examples of session control scenarios for BYOD/unmanaged devices",
                        ],
                        examTips: [
                            "Know the session control options and their use cases",
                            "Understand Continuous Access Evaluation (CAE) and its triggers",
                            "Know which apps support app-enforced restrictions",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show session control options in a CA policy",
                            "Discuss real-world scenarios for each session control type",
                            "Explain Continuous Access Evaluation and critical events",
                            "Demo app-enforced restrictions with SharePoint Online",
                        ],
                        realExamples: [
                            "Law firm used app control to prevent document downloads on personal devices while allowing viewing",
                            "Organization set 4-hour sign-in frequency for PCI-regulated applications",
                        ],
                        questionsToAsk: [
                            "Do you have BYOD users who need controlled access to corporate apps?",
                            "What session duration is appropriate for your sensitive applications?",
                            "Are you using Defender for Cloud Apps for session monitoring?",
                        ],
                    },
                },
                {
                    id: "lesson-4-5",
                    title: "Authentication Context & Protected Actions",
                    slug: "auth-context-protected",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Authentication context allows Conditional Access policies to be triggered by specific actions within an application, not just at sign-in. For example, accessing a confidential SharePoint site or performing a sensitive operation in a custom app can require step-up authentication even if the user is already signed in.",
                            "Protected actions extend this concept to Microsoft Entra administrative operations. Specific admin actions (like modifying Conditional Access policies or deleting users) can be protected by requiring additional authentication, even for already-authenticated administrators.",
                            "Conditional Access templates provide pre-built policy configurations for common scenarios such as requiring MFA for admins, blocking legacy authentication, or requiring compliant devices. These templates accelerate deployment and ensure best practices are followed.",
                        ],
                        keyPoints: [
                            "Authentication context: Tag apps/resources with context IDs (c1-c25)",
                            "Step-up authentication: Require stronger auth for sensitive operations mid-session",
                            "Protected actions: Shield admin operations with additional verification",
                            "CA templates: Pre-built policies for common security scenarios",
                            "SharePoint/Teams integration: Apply context to specific sites or channels",
                        ],
                        architecture: {
                            title: "Authentication Context Flow",
                            steps: [
                                { step: 1, title: "Define Context", description: "Create authentication context IDs in Entra admin center", icon: "Tag" },
                                { step: 2, title: "Create CA Policy", description: "Build CA policy targeting the authentication context", icon: "Filter" },
                                { step: 3, title: "Tag Resources", description: "Apply context ID to SharePoint sites, apps, or admin actions", icon: "Link" },
                                { step: 4, title: "User Access", description: "When user hits tagged resource, step-up auth is required", icon: "ShieldCheck" },
                            ],
                        },
                        whyItMatters: "Not all resources within an application need the same level of protection. Authentication context enables granular security within applications - a user can browse general documents with basic auth but must provide phishing-resistant MFA to access confidential files.",
                        commonMistakes: [
                            "Creating authentication contexts without linking them to CA policies",
                            "Not understanding that protected actions only apply to specific admin operations",
                            "Deploying CA templates without reviewing and customizing for your environment",
                            "Overusing authentication contexts, leading to excessive step-up prompts",
                        ],
                        interviewTips: [
                            "Explain authentication context with a real scenario like classified documents",
                            "Discuss protected actions for securing admin operations",
                            "Mention CA templates as a best practice for initial deployment",
                        ],
                        examTips: [
                            "Know how authentication context integrates with SharePoint sensitivity labels",
                            "Understand which admin actions can be protected",
                            "Know the available CA template categories",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Demo creating an authentication context and linking to a CA policy",
                            "Show how SharePoint uses sensitivity labels with auth context",
                            "Walk through the CA template gallery",
                        ],
                        realExamples: [
                            "Law firm required phishing-resistant MFA to access client-privileged SharePoint sites via authentication context",
                            "Organization protected CA policy modifications with protected actions after an admin accidentally deleted critical policies",
                        ],
                        questionsToAsk: [
                            "Do you have resources that need higher authentication than others?",
                            "Have you protected admin operations with step-up authentication?",
                            "Are you using CA templates or building policies from scratch?",
                        ],
                    },
                },
            ],
        },
        {
            id: "module-5",
            title: "Identity Governance & Protection",
            slug: "identity-governance",
            description: "Implement access reviews, PIM, entitlement management, identity protection, and monitoring",
            icon: "UserCheck",
            duration: "3.5 hours",
            lessons: [
                {
                    id: "lesson-5-1",
                    title: "Access Reviews",
                    slug: "access-reviews",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Access reviews in Microsoft Entra ID Governance enable organizations to periodically verify that users still need access to resources. Reviewers can be managers, group owners, specific users, or the users themselves who self-attest their need for continued access.",
                            "Reviews can target group memberships, application assignments, Entra ID role assignments, or Azure resource role assignments. They can be one-time or recurring (weekly, monthly, quarterly), with automatic actions when reviewers do not respond.",
                            "Access review results can automatically remove access for denied users, or administrators can manually review results and take action. This ensures that access does not accumulate over time and that the principle of least privilege is maintained.",
                        ],
                        keyPoints: [
                            "Review types: Group membership, app access, role assignments",
                            "Reviewers: Managers, group owners, specific users, or self-review",
                            "Recurrence: One-time, weekly, monthly, quarterly, or semi-annual",
                            "Auto-apply: Automatically remove access for denied reviews",
                            "Requires Entra ID Governance or P2 licensing",
                        ],
                        architecture: {
                            title: "Access Review Lifecycle",
                            steps: [
                                { step: 1, title: "Create Review", description: "Admin configures scope, reviewers, and schedule", icon: "ClipboardCheck" },
                                { step: 2, title: "Notify Reviewers", description: "Email notifications sent to designated reviewers", icon: "Bell" },
                                { step: 3, title: "Review Period", description: "Reviewers approve or deny each user's access", icon: "Eye" },
                                { step: 4, title: "Auto-Action", description: "Non-responded reviews handled by fallback rules", icon: "Settings" },
                                { step: 5, title: "Apply Results", description: "Access removed for denied users, audit trail created", icon: "CheckCircle" },
                            ],
                        },
                        whyItMatters: "Access accumulation is one of the biggest identity risks. Users change roles, projects end, and contractors finish engagements, but access is rarely removed proactively. Access reviews provide a systematic process to ensure access remains appropriate over time, meeting compliance requirements and reducing attack surface.",
                        commonMistakes: [
                            "Setting up reviews but not following up on results",
                            "Choosing reviewers who automatically approve everything without genuine review",
                            "Not configuring auto-apply for denied access, leaving manual follow-up",
                            "Running reviews too infrequently for high-risk resources",
                        ],
                        interviewTips: [
                            "Explain the business need for access reviews (compliance, least privilege)",
                            "Discuss reviewer selection strategies and their tradeoffs",
                            "Mention auto-apply and fallback reviewer configurations",
                        ],
                        examTips: [
                            "Know the types of resources that can be reviewed",
                            "Understand reviewer options and auto-apply behavior",
                            "Know the licensing requirements for access reviews",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show creating an access review in the admin center",
                            "Demonstrate the reviewer experience",
                            "Discuss compliance requirements that mandate access reviews (SOX, GDPR, HIPAA)",
                            "Cover multi-stage reviews for sensitive resources",
                        ],
                        realExamples: [
                            "Financial services firm runs quarterly access reviews for all privileged roles - required by auditors",
                            "Organization discovered 40% of guest users no longer needed access during their first review",
                        ],
                        questionsToAsk: [
                            "Does your organization currently perform access reviews?",
                            "What compliance requirements drive your access review needs?",
                            "How frequently should critical access be reviewed in your environment?",
                        ],
                    },
                },
                {
                    id: "lesson-5-2",
                    title: "Privileged Identity Management (PIM)",
                    slug: "pim",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Privileged Identity Management (PIM) provides just-in-time and just-enough access for privileged roles. Instead of permanent role assignments, PIM makes users eligible for roles that they activate when needed, with time-limited access and approval workflows.",
                            "PIM supports both Entra ID roles (Global Admin, User Admin) and Azure resource roles (Subscription Owner, Resource Group Contributor). Activation can require MFA, justification, approval, and is time-bounded (e.g., 8 hours maximum).",
                            "PIM also provides audit trails of all role activations and a consolidated view of who has privileged access. Alerts notify administrators of unusual activation patterns or roles that have not been used, enabling continuous refinement of privileged access.",
                        ],
                        keyPoints: [
                            "Just-in-time access: Roles activated only when needed",
                            "Time-bound: Activations expire after a configured duration",
                            "Approval workflow: Require approval for sensitive role activations",
                            "MFA + justification: Required at activation for accountability",
                            "Audit trail: Complete history of who activated what role and when",
                        ],
                        architecture: {
                            title: "PIM Activation Flow",
                            steps: [
                                { step: 1, title: "Eligible Role", description: "Admin is assigned as eligible (not active) for a role", icon: "UserCheck" },
                                { step: 2, title: "Request Activation", description: "Admin requests role activation with justification", icon: "FileText" },
                                { step: 3, title: "Verify Identity", description: "MFA required to prove admin identity before activation", icon: "Fingerprint" },
                                { step: 4, title: "Approval", description: "Approver reviews and approves/denies the request", icon: "CheckCircle" },
                                { step: 5, title: "Time-Bound Access", description: "Role active for configured duration, auto-deactivates", icon: "Timer" },
                            ],
                        },
                        whyItMatters: "Permanent privileged access is a prime target for attackers. If a Global Admin account is always active, a compromised credential gives unlimited access. PIM reduces the window of exposure by making privileged roles available only when needed, significantly reducing the attack surface for the most critical accounts.",
                        commonMistakes: [
                            "Setting activation durations too long (e.g., 24 hours for Global Admin)",
                            "Not requiring MFA and justification for role activations",
                            "Bypassing PIM by assigning permanent active roles",
                            "Not configuring alerts for unusual activation patterns",
                        ],
                        interviewTips: [
                            "Explain the security benefits of just-in-time access vs permanent assignments",
                            "Discuss the activation workflow components (MFA, justification, approval)",
                            "Mention PIM alerts and audit capabilities",
                        ],
                        examTips: [
                            "Know the difference between eligible and active assignments",
                            "Understand PIM settings: activation duration, MFA, approval, justification",
                            "Know that PIM requires Entra ID P2",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Demo the PIM activation experience from user perspective",
                            "Show PIM settings configuration for a role",
                            "Discuss the security improvement of going from permanent to eligible",
                            "Cover PIM for Azure resource roles, not just Entra ID roles",
                        ],
                        realExamples: [
                            "Enterprise reduced standing Global Admin count from 12 to 2, with 10 as eligible via PIM",
                            "Organization used PIM approval workflow so subscription owner required CTO approval to activate",
                        ],
                        questionsToAsk: [
                            "How many permanent privileged role assignments does your organization have?",
                            "Would approval workflows be acceptable for your admin role activations?",
                            "What activation duration makes sense for your most sensitive roles?",
                        ],
                    },
                },
                {
                    id: "lesson-5-3",
                    title: "Entitlement Management",
                    slug: "entitlement-management",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Entitlement management automates access request, assignment, review, and expiration workflows through access packages. An access package bundles groups, applications, and SharePoint sites into a single requestable unit with defined policies for who can request, who approves, and when access expires.",
                            "Catalogs organize access packages by department, project, or function. Catalog owners can manage their own access packages without needing tenant-wide admin rights, enabling decentralized access management at scale.",
                            "Connected organizations allow external users to discover and request access packages, replacing the manual guest invitation process. Combined with automatic expiration and access reviews, entitlement management provides end-to-end governance for both internal and external access.",
                        ],
                        keyPoints: [
                            "Access packages: Bundle of resources (groups, apps, sites) as one request",
                            "Catalogs: Organize packages by department, project, or scenario",
                            "Policies: Define who can request, approval chain, and expiration",
                            "Connected organizations: Enable external users to request access",
                            "Automatic expiration: Access packages expire after a configured period",
                        ],
                        architecture: {
                            title: "Entitlement Management Flow",
                            steps: [
                                { step: 1, title: "Create Catalog", description: "Organize resources by department or project", icon: "Archive" },
                                { step: 2, title: "Build Package", description: "Bundle groups, apps, and sites into access package", icon: "Package" },
                                { step: 3, title: "Define Policy", description: "Set requestors, approvers, and expiration rules", icon: "Settings" },
                                { step: 4, title: "User Requests", description: "User discovers and requests access package", icon: "Upload" },
                                { step: 5, title: "Lifecycle", description: "Auto-expire, review, and renew as needed", icon: "RefreshCw" },
                            ],
                        },
                        whyItMatters: "Traditional access provisioning is slow (days/weeks), error-prone (wrong groups assigned), and rarely includes expiration. Entitlement management transforms this into a self-service, governed process with consistent policies, automatic expiration, and full audit trails. This is critical for organizations managing thousands of users across hundreds of applications.",
                        commonMistakes: [
                            "Creating too many granular access packages instead of role-based bundles",
                            "Not configuring automatic expiration, leading to access accumulation",
                            "Skipping the approval workflow for sensitive resources",
                            "Not using catalogs to delegate management to business owners",
                        ],
                        interviewTips: [
                            "Explain the access package concept and why it simplifies governance",
                            "Discuss the self-service request and approval experience",
                            "Mention connected organizations for external user access governance",
                        ],
                        examTips: [
                            "Know the components: catalogs, access packages, policies",
                            "Understand the request and approval workflow",
                            "Know about connected organizations and external access",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Create an access package step by step in the admin center",
                            "Show the My Access portal from the end-user perspective",
                            "Discuss catalog delegation for decentralized management",
                            "Cover connected organizations for external user onboarding",
                        ],
                        realExamples: [
                            "University created access packages per course - students auto-received access at enrollment and lost it at completion",
                            "Consulting firm used connected organizations to let clients request project access with manager approval",
                        ],
                        questionsToAsk: [
                            "How do users currently request access to applications in your organization?",
                            "How long does it typically take to provision access for a new employee?",
                            "Do you have a process for automatically expiring temporary access?",
                        ],
                    },
                },
                {
                    id: "lesson-5-4",
                    title: "Identity Protection & Risk Management",
                    slug: "identity-protection",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra ID Protection uses machine learning and Microsoft's vast signal intelligence to detect identity-based threats. It analyzes billions of authentications daily to identify anomalous sign-in patterns, leaked credentials, and suspicious user behavior.",
                            "Risk detections include sign-in risk events (anonymous IP, atypical travel, impossible travel, malware-linked IP) and user risk events (leaked credentials from the dark web, anomalous user behavior). Each detection contributes to an overall risk score.",
                            "The Identity Protection dashboard provides visibility into risky users, risky sign-ins, and risk detections. Administrators can investigate individual events, confirm compromises, dismiss false positives, and configure automated remediation through Conditional Access risk-based policies.",
                        ],
                        keyPoints: [
                            "Sign-in risk detections: Anonymous IP, atypical travel, malware IP, token anomaly",
                            "User risk detections: Leaked credentials, anomalous activity patterns",
                            "Risk reports: Risky users, risky sign-ins, risk detections dashboard",
                            "Investigation: Drill into individual users and sign-in events",
                            "Remediation: Automated via CA policies or manual admin intervention",
                        ],
                        architecture: {
                            title: "Identity Protection Pipeline",
                            steps: [
                                { step: 1, title: "Signal Ingestion", description: "Billions of authentication signals analyzed in real-time", icon: "Database" },
                                { step: 2, title: "ML Detection", description: "Machine learning identifies anomalies and known threats", icon: "Brain" },
                                { step: 3, title: "Risk Scoring", description: "User and sign-in risk levels calculated (None to High)", icon: "Gauge" },
                                { step: 4, title: "Policy Response", description: "CA policies enforce MFA, password change, or block", icon: "ShieldCheck" },
                                { step: 5, title: "Investigation", description: "Admin reviews, confirms, or dismisses risk in dashboard", icon: "Search" },
                            ],
                        },
                        whyItMatters: "Traditional security monitoring is reactive - investigating incidents after they happen. Identity Protection provides proactive, automated defense by detecting and responding to threats in real-time. With over 300 trillion signals analyzed daily by Microsoft, Individual organizations benefit from collective intelligence across the entire Microsoft ecosystem.",
                        commonMistakes: [
                            "Deploying Identity Protection without integrating it into Conditional Access policies",
                            "Ignoring the risk reports dashboard and not investigating flagged users",
                            "Not configuring automated remediation, relying solely on manual investigation",
                            "Dismissing all risk detections as false positives without investigation",
                        ],
                        interviewTips: [
                            "Explain the types of risk detections and what triggers them",
                            "Discuss the investigation and remediation workflow",
                            "Mention the scale of Microsoft's threat intelligence (trillions of signals)",
                        ],
                        examTips: [
                            "Know all major risk detection types and categories",
                            "Understand the investigation workflow in the Identity Protection dashboard",
                            "Know that Identity Protection requires Entra ID P2",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Walk through the Identity Protection dashboard",
                            "Show a risky user investigation from detection to resolution",
                            "Discuss the types of risk detections and what they mean",
                            "Explain how Identity Protection integrates with Conditional Access",
                        ],
                        realExamples: [
                            "Identity Protection detected leaked credentials for 50 users from a third-party breach before any unauthorized access occurred",
                            "Impossible travel detection caught an attacker logging in from Asia while the real user was in the US",
                        ],
                        questionsToAsk: [
                            "How does your organization currently detect compromised identities?",
                            "Have you reviewed the Identity Protection dashboard recently?",
                            "What is your process for responding to a potentially compromised identity?",
                        ],
                    },
                },
                {
                    id: "lesson-5-5",
                    title: "Terms of Use & Break-Glass Accounts",
                    slug: "tou-breakglass",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Terms of Use (ToU) in Microsoft Entra ID allow organizations to present legal disclaimers or acceptable use policies that users must accept before accessing resources. ToU can be integrated into Conditional Access policies so users must accept terms when specific conditions are met.",
                            "Break-glass (emergency access) accounts are highly privileged accounts excluded from Conditional Access policies and MFA requirements. They serve as a last resort when normal administrative access is unavailable - for example, during an MFA service outage or when all Global Admins are locked out.",
                            "Break-glass accounts should use strong passwords stored securely, not be tied to any individual, be excluded from all CA policies, and be monitored via alerts for any sign-in activity. Microsoft recommends at least two break-glass accounts per tenant.",
                        ],
                        keyPoints: [
                            "ToU: PDF documents users must accept before access",
                            "ToU + CA: Require acceptance for specific apps, groups, or conditions",
                            "ToU versioning: Re-require acceptance when terms are updated",
                            "Break-glass: Emergency accounts excluded from CA and MFA",
                            "Monitoring: Alert on ANY break-glass account sign-in",
                        ],
                        whyItMatters: "Terms of Use provide legal protection and compliance documentation. Break-glass accounts prevent catastrophic lockout scenarios. Without properly configured emergency access, an MFA outage or misconfigured CA policy could lock all administrators out of the tenant permanently.",
                        commonMistakes: [
                            "Not excluding break-glass accounts from ALL Conditional Access policies",
                            "Using break-glass accounts for routine administration",
                            "Not monitoring break-glass account sign-ins with alerts",
                            "Storing break-glass credentials in accessible digital locations",
                        ],
                        interviewTips: [
                            "Explain the break-glass account best practices",
                            "Discuss ToU integration with Conditional Access",
                            "Mention monitoring requirements for emergency accounts",
                        ],
                        examTips: [
                            "Know break-glass account requirements and best practices",
                            "Understand ToU integration with Conditional Access policies",
                            "Know that break-glass accounts must be excluded from ALL CA policies",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show creating a Terms of Use document and CA policy",
                            "Discuss break-glass account security requirements",
                            "Explain alert configuration for emergency account monitoring",
                        ],
                        realExamples: [
                            "Organization locked out all admins when a CA policy blocked admin portal access - no break-glass account existed",
                            "Company used ToU to require GDPR acceptance before accessing EU data resources",
                        ],
                        questionsToAsk: [
                            "Does your organization have break-glass accounts configured?",
                            "Are Terms of Use required for any of your applications?",
                            "How are break-glass credentials stored and monitored?",
                        ],
                    },
                },
                {
                    id: "lesson-5-6",
                    title: "Monitoring, Logs & Identity Secure Score",
                    slug: "monitoring-logs",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra ID provides three primary log types: sign-in logs (authentication events), audit logs (directory changes), and provisioning logs (app provisioning activity). These logs are essential for troubleshooting, compliance reporting, and security investigation.",
                            "Diagnostic settings allow you to route logs to Azure Monitor Log Analytics workspaces, Azure Storage accounts, or Event Hubs for long-term retention and advanced analysis. Log Analytics enables powerful KQL (Kusto Query Language) queries for investigating identity events.",
                            "Identity Secure Score provides a quantified measure of your identity security posture with actionable recommendations. Workbooks offer pre-built and customizable dashboards for monitoring sign-in patterns, CA policy impact, and user behavior analytics.",
                        ],
                        keyPoints: [
                            "Sign-in logs: Every authentication event with details and CA evaluation results",
                            "Audit logs: Directory changes - user/group/app modifications",
                            "Provisioning logs: App provisioning events and errors",
                            "Log Analytics + KQL: Advanced querying for investigation and reporting",
                            "Identity Secure Score: Posture assessment with improvement actions",
                        ],
                        architecture: {
                            title: "Identity Monitoring Architecture",
                            steps: [
                                { step: 1, title: "Log Generation", description: "Sign-in, audit, and provisioning events generated", icon: "Database" },
                                { step: 2, title: "Diagnostic Settings", description: "Route logs to Log Analytics, Storage, or Event Hub", icon: "Settings" },
                                { step: 3, title: "KQL Queries", description: "Analyze logs with Kusto queries in Log Analytics", icon: "Search" },
                                { step: 4, title: "Workbooks", description: "Pre-built dashboards for visual monitoring", icon: "BarChart" },
                                { step: 5, title: "Secure Score", description: "Track and improve identity security posture", icon: "Gauge" },
                            ],
                        },
                        whyItMatters: "Without proper monitoring, security incidents go undetected and compliance requirements are unmet. Many regulations (SOX, HIPAA, GDPR) require audit log retention. Identity Secure Score provides a baseline and roadmap for continuous security improvement.",
                        commonMistakes: [
                            "Not configuring diagnostic settings - default log retention is only 7-30 days",
                            "Ignoring Identity Secure Score recommendations",
                            "Not using workbooks for proactive monitoring of CA policy impact",
                            "Writing overly broad KQL queries that return too much data",
                        ],
                        interviewTips: [
                            "Explain the three log types and their use cases",
                            "Discuss KQL query examples for common investigations",
                            "Mention Identity Secure Score and how to improve it",
                        ],
                        examTips: [
                            "Know the three log types and their retention defaults",
                            "Understand diagnostic settings destinations",
                            "Know basic KQL syntax for identity log queries",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Walk through sign-in and audit logs in the admin center",
                            "Show configuring diagnostic settings to Log Analytics",
                            "Demo a KQL query for failed sign-ins investigation",
                            "Review Identity Secure Score and improvement actions",
                        ],
                        realExamples: [
                            "Organization discovered a brute-force attack pattern by analyzing sign-in logs in Log Analytics",
                            "Company improved their Identity Secure Score from 35% to 78% in 6 months following recommendations",
                        ],
                        questionsToAsk: [
                            "Where are your identity logs stored today?",
                            "Do you use KQL to investigate identity events?",
                            "What is your current Identity Secure Score?",
                        ],
                    },
                },
            ],
        },
        {
            id: "module-6",
            title: "Hybrid Identity",
            slug: "hybrid-identity",
            description: "Implement and manage hybrid identity solutions with Entra Connect, Cloud Sync, and authentication methods",
            icon: "RefreshCw",
            duration: "2 hours",
            lessons: [
                {
                    id: "lesson-6-1",
                    title: "Entra Connect Sync & Cloud Sync",
                    slug: "entra-connect-sync",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra Connect Sync is the on-premises agent that synchronizes users, groups, and contacts from Active Directory to Microsoft Entra ID. It supports password hash synchronization, pass-through authentication, and federation with AD FS. Entra Connect is installed on a dedicated server in the on-premises environment.",
                            "Microsoft Entra Cloud Sync is a newer, lighter-weight synchronization option that uses a cloud provisioning agent instead of a full server installation. Cloud Sync supports multi-forest scenarios more easily and is managed entirely from the cloud, making it simpler to deploy and maintain.",
                            "Key differences: Connect Sync offers more features (device writeback, group writeback, custom sync rules), while Cloud Sync is simpler and supports multi-forest without complex configuration. Organizations can use both simultaneously for different forests.",
                        ],
                        keyPoints: [
                            "Connect Sync: Full-featured, server-based, supports all sync scenarios",
                            "Cloud Sync: Lightweight agent, cloud-managed, easier multi-forest",
                            "Both sync users, groups, and contacts from AD DS to Entra ID",
                            "Sync filtering: OU-based, attribute-based, or domain-based filtering",
                            "Connect Sync supports custom sync rules; Cloud Sync uses scoping filters",
                        ],
                        architecture: {
                            title: "Hybrid Sync Architecture",
                            steps: [
                                { step: 1, title: "AD DS Forest", description: "Source of identity data - users, groups, contacts", icon: "Building" },
                                { step: 2, title: "Sync Agent", description: "Connect Sync server or Cloud Sync agent installed", icon: "RefreshCw" },
                                { step: 3, title: "Filtering", description: "OU, domain, or attribute filters control what syncs", icon: "Filter" },
                                { step: 4, title: "Entra ID", description: "Cloud directory receives synchronized objects", icon: "Globe" },
                                { step: 5, title: "Source of Authority", description: "On-prem AD remains master for synced attributes", icon: "Database" },
                            ],
                        },
                        whyItMatters: "Most enterprise organizations have existing on-premises Active Directory with years of identity data. Hybrid sync bridges this investment with cloud identity, enabling a unified user experience without forcing a disruptive migration.",
                        commonMistakes: [
                            "Not planning sync filtering, resulting in syncing service accounts or system objects",
                            "Running Connect Sync on a domain controller instead of a dedicated server",
                            "Not understanding source of authority - editing synced attributes in the cloud instead of on-prem",
                            "Choosing Cloud Sync when Connect Sync features are needed (e.g., device writeback)",
                        ],
                        interviewTips: [
                            "Compare Connect Sync vs Cloud Sync use cases",
                            "Explain sync filtering strategies (OU-based is most common)",
                            "Discuss source of authority and attribute flow",
                        ],
                        examTips: [
                            "Know the differences between Connect Sync and Cloud Sync",
                            "Understand sync filtering options",
                            "Know which scenarios require Connect Sync vs Cloud Sync",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Compare Connect Sync and Cloud Sync side by side",
                            "Show the sync configuration wizard",
                            "Explain OU filtering and pilot groups",
                            "Discuss migration from Connect Sync to Cloud Sync",
                        ],
                        realExamples: [
                            "Organization with 5 AD forests used Cloud Sync for simpler multi-forest synchronization",
                            "Company accidentally synced 10,000 service accounts by not configuring OU filtering",
                        ],
                        questionsToAsk: [
                            "How many AD forests does your organization have?",
                            "Are you using Connect Sync or Cloud Sync currently?",
                            "Have you configured sync filtering to exclude service accounts?",
                        ],
                    },
                },
                {
                    id: "lesson-6-2",
                    title: "Authentication Methods: PHS, PTA & Federation",
                    slug: "phs-pta-federation",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Password Hash Synchronization (PHS) syncs a hash of the on-premises password hash to Entra ID. Users authenticate directly against the cloud with the same password. PHS is the simplest method, provides the best high-availability, and enables leaked credential detection via Identity Protection.",
                            "Pass-Through Authentication (PTA) validates passwords directly against on-premises AD in real-time. Each authentication request is forwarded to PTA agents running on-premises. PTA ensures on-premises password policies and account states are enforced immediately.",
                            "Federation with AD FS delegates authentication entirely to on-premises infrastructure. This provides the most control but is the most complex. Microsoft is actively guiding customers to migrate from AD FS to PHS or PTA for simplicity and security.",
                        ],
                        keyPoints: [
                            "PHS: Hash of hash synced to cloud, simplest, enables leak detection",
                            "PTA: Real-time validation against on-prem AD, enforces AD policies",
                            "Federation (AD FS): Full on-prem auth, most complex, being deprecated",
                            "Seamless SSO: Automatic sign-in from domain-joined devices (with PHS/PTA)",
                            "Staged rollout: Migrate users from federation to PHS/PTA in groups",
                        ],
                        architecture: {
                            title: "Authentication Method Comparison",
                            steps: [
                                { step: 1, title: "PHS", description: "Password hash synced → user authenticates against cloud", icon: "Database" },
                                { step: 2, title: "PTA", description: "Auth request forwarded → validated against on-prem AD in real-time", icon: "RefreshCw" },
                                { step: 3, title: "Federation", description: "User redirected → AD FS handles entire authentication", icon: "Building" },
                                { step: 4, title: "Seamless SSO", description: "Kerberos ticket exchange → transparent sign-in on domain PCs", icon: "Key" },
                            ],
                        },
                        whyItMatters: "Choosing the right hybrid authentication method impacts security, availability, and user experience. PHS is recommended by Microsoft as the default due to its simplicity and enabling of Identity Protection. Organizations on AD FS should plan migration to reduce complexity and attack surface.",
                        commonMistakes: [
                            "Choosing PTA when PHS would be more appropriate for the scenario",
                            "Not deploying multiple PTA agents for high availability",
                            "Remaining on AD FS without a migration plan",
                            "Not enabling Seamless SSO alongside PHS or PTA",
                        ],
                        interviewTips: [
                            "Compare all three methods with clear recommendation criteria",
                            "Explain when PTA is preferred over PHS (compliance, immediate lockout)",
                            "Discuss AD FS migration strategies using staged rollout",
                        ],
                        examTips: [
                            "Know the advantages of each method and Microsoft's recommendation",
                            "Understand staged rollout for federation migration",
                            "Know that PHS enables Identity Protection leak detection",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Use a comparison table for the three methods",
                            "Explain why Microsoft recommends PHS as default",
                            "Discuss AD FS migration best practices",
                            "Demo Seamless SSO configuration",
                        ],
                        realExamples: [
                            "Healthcare org chose PTA to enforce on-prem password complexity and account lockout policies in real-time",
                            "Enterprise migrated 40,000 users from AD FS to PHS using staged rollout over 3 months",
                        ],
                        questionsToAsk: [
                            "Which hybrid auth method does your organization use?",
                            "If using AD FS, is there a migration plan?",
                            "Is Seamless SSO enabled for domain-joined devices?",
                        ],
                    },
                },
                {
                    id: "lesson-6-3",
                    title: "Entra Connect Health & Troubleshooting",
                    slug: "connect-health",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra Connect Health monitors the health of your hybrid identity infrastructure. It provides dashboards for AD FS servers, Entra Connect Sync, and AD DS domain controllers with alerts for issues that could affect user sign-in or synchronization.",
                            "Connect Health collects performance data, sync errors, and authentication metrics. It can detect sync conflicts (duplicate attributes), AD FS certificate expiration, and domain controller replication issues before they cause user-facing problems.",
                            "Troubleshooting hybrid identity issues requires understanding sync cycles (default 30 min), export errors, filtering rules, and attribute flow. The Synchronization Service Manager and Connect Health portal are key tools for diagnosing problems.",
                        ],
                        keyPoints: [
                            "Connect Health monitors AD FS, Connect Sync, and AD DS health",
                            "Alerts for sync errors, certificate expiry, and replication issues",
                            "Risky IP report: Identifies IPs with failed AD FS sign-in attempts",
                            "Sync error investigation: Duplicate attribute conflicts, export errors",
                            "Requires Entra ID P1 license and agent installation",
                        ],
                        whyItMatters: "Hybrid identity issues are among the most impactful incidents - a sync failure can prevent new users from accessing cloud resources, while an AD FS outage can lock out the entire organization. Proactive monitoring with Connect Health prevents these scenarios.",
                        commonMistakes: [
                            "Not installing Connect Health agents on all sync and AD FS servers",
                            "Ignoring sync error notifications until users report issues",
                            "Not monitoring AD FS certificate expiration dates",
                            "Not understanding the 30-minute default sync cycle timing",
                        ],
                        interviewTips: [
                            "Explain what Connect Health monitors and its value",
                            "Describe common sync error types and resolution strategies",
                            "Discuss hybrid identity troubleshooting methodology",
                        ],
                        examTips: [
                            "Know Connect Health components and what each monitors",
                            "Understand common sync errors and their resolutions",
                            "Know the default sync cycle interval (30 minutes)",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show the Connect Health dashboard and alerts",
                            "Walk through a sync error investigation",
                            "Discuss common troubleshooting scenarios",
                        ],
                        realExamples: [
                            "Connect Health alert detected AD FS certificate expiring in 7 days, preventing a major outage",
                            "Organization resolved duplicate attribute conflicts affecting 200 users after Connect Health identified the errors",
                        ],
                        questionsToAsk: [
                            "Is Connect Health deployed in your environment?",
                            "How do you currently monitor your sync infrastructure?",
                            "Have you experienced sync errors or hybrid auth issues?",
                        ],
                    },
                },
            ],
        },
        {
            id: "module-7",
            title: "Workload Identities & App Management",
            slug: "workload-identities",
            description: "Plan and implement application identities, enterprise apps, app registrations, and app access management",
            icon: "AppWindow",
            duration: "3 hours",
            lessons: [
                {
                    id: "lesson-7-1",
                    title: "Managed Identities & Service Principals",
                    slug: "managed-identities",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Workload identities are non-human identities that applications and services use to authenticate and access resources. In Microsoft Entra ID, these include managed identities, service principals, and app registrations.",
                            "Managed identities are Entra ID identities automatically managed by Azure. System-assigned managed identities are tied to a specific Azure resource and are deleted when the resource is deleted. User-assigned managed identities are standalone and can be shared across multiple resources.",
                            "Service principals are the local representation of an application in a specific tenant. When an app is registered, a service principal is created. Service principals define what the app can access and are used for authentication via client secrets or certificates.",
                        ],
                        keyPoints: [
                            "Managed identities: No credentials to manage, Azure handles rotation",
                            "System-assigned: Tied to one resource, deleted with resource",
                            "User-assigned: Standalone, shareable across multiple resources",
                            "Service principals: App identity in a tenant with configured permissions",
                            "Workload identity federation: Federate external identities without secrets",
                        ],
                        architecture: {
                            title: "Workload Identity Types",
                            steps: [
                                { step: 1, title: "Managed Identity", description: "Azure-managed, no secrets, auto-rotated credentials", icon: "Bot" },
                                { step: 2, title: "Service Principal", description: "App identity with client secret or certificate auth", icon: "Key" },
                                { step: 3, title: "App Registration", description: "Developer-facing config for API permissions and auth", icon: "AppWindow" },
                                { step: 4, title: "Workload Federation", description: "External systems auth without stored secrets", icon: "Link" },
                            ],
                        },
                        whyItMatters: "Mismanaged workload identities are a growing attack vector. Service principals with expired secrets cause outages, while over-privileged app permissions create security risks. Managed identities eliminate credential management entirely, making them the preferred choice for Azure workloads.",
                        commonMistakes: [
                            "Using service principals with secrets when managed identities are available",
                            "Not monitoring service principal credential expiration",
                            "Granting Application permissions when Delegated permissions suffice",
                            "Not understanding the difference between app registration and service principal",
                        ],
                        interviewTips: [
                            "Explain when to use managed identities vs service principals",
                            "Discuss system-assigned vs user-assigned managed identity tradeoffs",
                            "Mention workload identity federation for CI/CD pipelines",
                        ],
                        examTips: [
                            "Know the types of managed identities and their lifecycle",
                            "Understand service principal authentication options",
                            "Know when to use managed identity vs service principal",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Demo creating a managed identity on an Azure VM",
                            "Show how managed identity accesses Key Vault without secrets",
                            "Explain workload identity federation for GitHub Actions",
                        ],
                        realExamples: [
                            "Company had 200 service principals with expired secrets causing app authentication failures",
                            "Organization switched from service principals to managed identities, eliminating secret rotation overhead",
                        ],
                        questionsToAsk: [
                            "How many service principals does your organization have?",
                            "Are managed identities used for Azure resource-to-resource authentication?",
                            "How do you track service principal credential expiration?",
                        ],
                    },
                },
                {
                    id: "lesson-7-2",
                    title: "Enterprise Applications & SaaS Integration",
                    slug: "enterprise-apps",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Enterprise applications in Microsoft Entra ID represent SaaS apps (Salesforce, ServiceNow), on-premises apps (via Application Proxy), and custom apps. The enterprise app gallery contains thousands of pre-integrated applications with SSO configuration.",
                            "Single Sign-On configuration for enterprise apps typically uses SAML or OIDC protocols. SAML-based SSO requires configuring identifier URIs, reply URLs, signing certificates, and attribute mappings. OIDC-based SSO is simpler with client ID and secret exchange.",
                            "User and group assignment controls who can access each application. Assignment can be required (only assigned users can access) or optional (all users can access). App roles define permission levels within the application.",
                        ],
                        keyPoints: [
                            "Gallery apps: Pre-integrated SSO config for thousands of SaaS apps",
                            "SAML SSO: Configure identifiers, reply URLs, certificates, claims mapping",
                            "OIDC SSO: Client ID/secret based, simpler configuration",
                            "User assignment: Control who can access each application",
                            "App roles: Define permission levels (Admin, Reader, Contributor)",
                        ],
                        architecture: {
                            title: "Enterprise App SSO Flow",
                            steps: [
                                { step: 1, title: "Add from Gallery", description: "Search and add pre-integrated SaaS application", icon: "Search" },
                                { step: 2, title: "Configure SSO", description: "Set up SAML or OIDC with certificates and URLs", icon: "Settings" },
                                { step: 3, title: "Assign Users", description: "Add users/groups and configure app roles", icon: "Users" },
                                { step: 4, title: "Test SSO", description: "Verify single sign-on works end-to-end", icon: "CheckCircle" },
                                { step: 5, title: "Provisioning", description: "Optional: Auto-provision users to the SaaS app", icon: "RefreshCw" },
                            ],
                        },
                        whyItMatters: "Enterprise apps are the primary reason users interact with Entra ID. Poor SSO configuration leads to passwords sprawl and security gaps. Proper integration centralizes access control, enables MFA enforcement, and provides audit logging for all application access.",
                        commonMistakes: [
                            "Not testing SSO thoroughly before rolling out to production users",
                            "Misconfiguring SAML claim mappings, causing authentication failures",
                            "Not enabling user assignment, allowing unintended access",
                            "Forgetting to configure provisioning for apps that support SCIM",
                        ],
                        interviewTips: [
                            "Explain SAML vs OIDC SSO and when to use each",
                            "Discuss the app integration process from gallery to production",
                            "Mention SCIM-based automatic provisioning",
                        ],
                        examTips: [
                            "Know SAML SSO configuration components",
                            "Understand user assignment and app roles",
                            "Know automatic provisioning via SCIM",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Demo adding a gallery app and configuring SAML SSO",
                            "Show user assignment and app role configuration",
                            "Explain SCIM provisioning for automated user management",
                        ],
                        realExamples: [
                            "Organization integrated 50 SaaS apps, reducing password-related helpdesk tickets by 65%",
                            "Company used SCIM provisioning with Salesforce, eliminating manual user creation",
                        ],
                        questionsToAsk: [
                            "How many SaaS applications does your organization use?",
                            "Are they integrated with SSO via Entra ID?",
                            "Is automatic provisioning configured for key applications?",
                        ],
                    },
                },
                {
                    id: "lesson-7-3",
                    title: "Application Proxy for On-Premises Apps",
                    slug: "app-proxy",
                    duration: "25 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra Application Proxy provides secure remote access to on-premises web applications without requiring VPN. It consists of a connector installed in the on-premises environment that creates an outbound connection to the Application Proxy service in Azure.",
                            "Application Proxy supports header-based authentication, integrated Windows authentication with Kerberos constrained delegation, and forms-based authentication. Users access on-premises apps through Entra ID with SSO, MFA, and Conditional Access - the same policies as cloud apps.",
                            "The architecture is secure by design: connectors make outbound-only connections (no inbound firewall rules needed), traffic is encrypted, and all access goes through Entra ID authentication and authorization.",
                        ],
                        keyPoints: [
                            "Outbound-only connectors: No inbound firewall rules or DMZ needed",
                            "SSO to on-prem apps: Kerberos, header-based, or forms authentication",
                            "CA + MFA: Cloud security policies applied to on-prem app access",
                            "Connector groups: Route traffic to specific connectors for different apps",
                            "Custom domains: Use your own domain instead of msappproxy.net",
                        ],
                        whyItMatters: "Application Proxy eliminates the need for VPN for web application access, reducing attack surface and improving user experience. It brings the full power of Entra ID security (CA, MFA, Identity Protection) to legacy on-premises applications.",
                        commonMistakes: [
                            "Installing only one connector without high availability",
                            "Not configuring Kerberos constrained delegation correctly for SSO",
                            "Using Application Proxy for non-web applications (it only supports HTTP/HTTPS)",
                            "Not using connector groups for apps in different network segments",
                        ],
                        interviewTips: [
                            "Explain the outbound-only architecture and its security benefits",
                            "Discuss SSO options for different on-prem app types",
                            "Compare Application Proxy to VPN for remote access",
                        ],
                        examTips: [
                            "Know Application Proxy architecture and connector requirements",
                            "Understand SSO options: KCD, header-based, forms",
                            "Know connector group use cases",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show Application Proxy architecture diagram",
                            "Demo publishing an on-prem app via Application Proxy",
                            "Explain KCD configuration for integrated Windows auth",
                        ],
                        realExamples: [
                            "Company replaced VPN for 20 internal web apps with Application Proxy, improving security and user experience",
                            "Organization used Application Proxy to provide external contractors access to internal timesheet app without VPN",
                        ],
                        questionsToAsk: [
                            "Do you have on-premises web apps that users access remotely?",
                            "Are you using VPN for remote access to internal applications?",
                            "Would replacing VPN with Application Proxy benefit your organization?",
                        ],
                    },
                },
                {
                    id: "lesson-7-4",
                    title: "App Registrations & API Permissions",
                    slug: "app-registrations",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "App registrations define the identity configuration for applications that integrate with Microsoft Entra ID. When you register an app, you configure its authentication settings, redirect URIs, API permissions, and credentials (secrets or certificates).",
                            "API permissions come in two types: Delegated permissions (act on behalf of a signed-in user) and Application permissions (act as the app itself without a user). Application permissions are more powerful and require admin consent.",
                            "User and admin consent controls whether users can grant permissions to apps themselves or require administrator approval. Configuring consent policies properly balances user productivity with security governance.",
                        ],
                        keyPoints: [
                            "App registration: Identity configuration (client ID, redirect URIs, credentials)",
                            "Delegated permissions: App acts on behalf of signed-in user",
                            "Application permissions: App acts independently, more powerful",
                            "Admin consent: Required for high-privilege or application permissions",
                            "User consent: Configurable - allow, restrict, or require admin review",
                        ],
                        architecture: {
                            title: "App Registration Components",
                            steps: [
                                { step: 1, title: "Register App", description: "Create registration with redirect URIs and platform config", icon: "AppWindow" },
                                { step: 2, title: "Credentials", description: "Add client secret or certificate for authentication", icon: "Key" },
                                { step: 3, title: "API Permissions", description: "Configure delegated or application permissions to APIs", icon: "Lock" },
                                { step: 4, title: "Consent", description: "Admin grants consent for requested permissions", icon: "CheckCircle" },
                                { step: 5, title: "App Roles", description: "Define custom roles for fine-grained authorization", icon: "Users" },
                            ],
                        },
                        whyItMatters: "Every custom application and third-party integration relies on app registrations. Misconfigured permissions can expose organizational data, while overly restrictive consent policies block legitimate business apps. Understanding this balance is critical for SC-300.",
                        commonMistakes: [
                            "Using Application permissions when Delegated would suffice",
                            "Not rotating client secrets before expiration",
                            "Granting broad permissions like Directory.ReadWrite.All unnecessarily",
                            "Allowing unrestricted user consent, enabling consent phishing attacks",
                        ],
                        interviewTips: [
                            "Explain delegated vs application permissions with examples",
                            "Discuss consent workflow and admin consent settings",
                            "Mention the principle of least privilege for API permissions",
                        ],
                        examTips: [
                            "Know the difference between delegated and application permissions",
                            "Understand admin consent vs user consent settings",
                            "Know how to configure consent policies",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Create an app registration step by step",
                            "Show API permission configuration with Graph API",
                            "Explain consent settings and admin consent workflow",
                            "Discuss credential management best practices",
                        ],
                        realExamples: [
                            "Company's internal app had Directory.ReadWrite.All instead of User.Read.All, creating a massive security risk",
                            "Organization was hit by consent phishing attack because user consent was unrestricted",
                        ],
                        questionsToAsk: [
                            "How many app registrations does your tenant have?",
                            "Is user consent restricted in your environment?",
                            "How do you manage app credential rotation?",
                        ],
                    },
                },
                {
                    id: "lesson-7-5",
                    title: "User & Admin Consent Configuration",
                    slug: "consent-config",
                    duration: "20 mins",
                    content: {
                        explanation: [
                            "Consent in Microsoft Entra ID is the process by which a user or admin grants an application permission to access resources. Understanding consent is critical because misconfigured consent settings are a top attack vector through consent phishing (illicit consent grant attacks).",
                            "Admin consent workflow allows users to request access to apps that require admin-approved permissions. Instead of blocking users entirely, the workflow routes requests to designated reviewers who can approve or deny on a case-by-case basis.",
                            "Application collections (My Apps) organize approved applications into categories for end-user self-service. Users can discover and launch applications from myapps.microsoft.com, reducing helpdesk calls for application access.",
                        ],
                        keyPoints: [
                            "User consent: Users grant low-risk permissions to apps themselves",
                            "Admin consent: Admins grant high-risk or org-wide permissions",
                            "Consent workflow: Users request, admins review and approve/deny",
                            "Illicit consent grant: Phishing attack where users unknowingly grant app permissions",
                            "My Apps portal: Self-service app launcher at myapps.microsoft.com",
                        ],
                        whyItMatters: "Consent phishing is one of the fastest-growing attack types. Attackers trick users into granting malicious apps access to email, files, and data. Proper consent configuration with admin review workflow prevents these attacks while maintaining user productivity.",
                        commonMistakes: [
                            "Allowing users to consent to any app without restriction",
                            "Blocking all user consent without providing an admin consent workflow",
                            "Not monitoring consent grants for suspicious applications",
                            "Forgetting to organize My Apps collections for user discoverability",
                        ],
                        interviewTips: [
                            "Explain consent phishing and how to prevent it",
                            "Discuss the balance between user consent and security",
                            "Mention the admin consent workflow as a best practice",
                        ],
                        examTips: [
                            "Know consent configuration options and their security implications",
                            "Understand the admin consent workflow process",
                            "Know how to detect and respond to illicit consent grants",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show consent settings in the admin center",
                            "Demo the admin consent workflow experience",
                            "Discuss consent phishing examples and prevention",
                            "Show My Apps portal customization",
                        ],
                        realExamples: [
                            "Organization detected a consent phishing attack granting a malicious app Mail.Read and Files.ReadWrite permissions",
                            "Company implemented admin consent workflow, processing 20 app requests per week without security risk",
                        ],
                        questionsToAsk: [
                            "What are your current user consent settings?",
                            "Is the admin consent workflow enabled?",
                            "Have you checked for suspicious consent grants recently?",
                        ],
                    },
                },
                {
                    id: "lesson-7-6",
                    title: "Microsoft Defender for Cloud Apps",
                    slug: "defender-cloud-apps",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Microsoft Defender for Cloud Apps (MDCA) is a Cloud Access Security Broker (CASB) that provides visibility, control, and threat protection for cloud applications. It discovers shadow IT (unapproved cloud apps), monitors user activity, and enforces data protection policies.",
                            "Cloud discovery analyzes traffic logs to identify cloud app usage, risk scores, and compliance status. Connected apps provide deeper integration with popular SaaS apps for activity monitoring, file scanning, and policy enforcement.",
                            "Access and session policies in MDCA work with Conditional Access App Control to provide real-time monitoring and control. They can block downloads, prevent copy/paste, watermark documents, and require step-up authentication for sensitive operations.",
                        ],
                        keyPoints: [
                            "Cloud discovery: Identify shadow IT and unapproved cloud app usage",
                            "Connected apps: Deep integration with M365, Salesforce, Box, etc.",
                            "Access policies: Control who can access cloud apps and from where",
                            "Session policies: Real-time monitoring and control of in-app actions",
                            "OAuth app policies: Monitor and control third-party OAuth app permissions",
                        ],
                        architecture: {
                            title: "Defender for Cloud Apps Architecture",
                            steps: [
                                { step: 1, title: "Discovery", description: "Analyze traffic to find all cloud apps in use", icon: "Search" },
                                { step: 2, title: "Connect Apps", description: "API connectors for deep visibility into SaaS apps", icon: "Link" },
                                { step: 3, title: "Policies", description: "Create access, session, and activity policies", icon: "Shield" },
                                { step: 4, title: "Real-Time Control", description: "CA App Control for session monitoring", icon: "Eye" },
                                { step: 5, title: "OAuth Governance", description: "Monitor and control third-party app permissions", icon: "AppWindow" },
                            ],
                        },
                        whyItMatters: "Most organizations have significant shadow IT - employees use hundreds of cloud apps without IT knowledge. MDCA provides visibility into this usage, enables risk assessment, and extends security policies to all cloud applications, not just those integrated with Entra ID.",
                        commonMistakes: [
                            "Deploying MDCA without reviewing cloud discovery results first",
                            "Not connecting key SaaS apps for deeper monitoring",
                            "Creating session policies that block too many legitimate user actions",
                            "Ignoring OAuth app governance and third-party permissions",
                        ],
                        interviewTips: [
                            "Explain shadow IT discovery and its security implications",
                            "Discuss session policy use cases for data protection",
                            "Mention OAuth app governance for third-party risk management",
                        ],
                        examTips: [
                            "Know MDCA components: discovery, connected apps, policies",
                            "Understand access vs session policies",
                            "Know how MDCA integrates with Conditional Access App Control",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Show the cloud discovery dashboard",
                            "Demo creating an access policy and session policy",
                            "Explain OAuth app governance",
                            "Discuss integration with Conditional Access",
                        ],
                        realExamples: [
                            "Cloud discovery revealed employees using 300+ unapproved cloud apps including high-risk file sharing services",
                            "Session policy prevented a departing employee from downloading sensitive files from SharePoint Online",
                        ],
                        questionsToAsk: [
                            "Have you run a cloud discovery assessment?",
                            "Are key SaaS apps connected to Defender for Cloud Apps?",
                            "Do you have session policies for data loss prevention?",
                        ],
                    },
                },
            ],
        },
        {
            id: "module-8",
            title: "Global Secure Access",
            slug: "global-secure-access",
            description: "Deploy and manage Microsoft Entra Internet Access and Private Access for network security",
            icon: "Globe",
            duration: "1.5 hours",
            lessons: [
                {
                    id: "lesson-8-1",
                    title: "Global Secure Access Overview",
                    slug: "gsa-overview",
                    duration: "20 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra Global Secure Access is Microsoft's Security Service Edge (SSE) solution that provides identity-centric network access. It consists of two services: Microsoft Entra Internet Access (secure web gateway) and Microsoft Entra Private Access (zero trust network access replacement for VPN).",
                            "Global Secure Access uses a lightweight client installed on end-user devices to tunnel traffic through Microsoft's network. This enables identity-aware network security: traffic policies can be based on user identity, device compliance, and risk level from Conditional Access.",
                            "The Global Secure Access client integrates with Conditional Access policies, enabling unified access control across identity (who you are), device (what you're using), and network (where you're going). This is a key component of Microsoft's Security Service Edge strategy.",
                        ],
                        keyPoints: [
                            "Internet Access: Secure web gateway for internet-bound traffic",
                            "Private Access: Zero-trust replacement for VPN to private resources",
                            "Client-based: Lightweight agent on Windows, macOS, iOS, Android",
                            "Identity-aware: Policies tied to Entra ID users and CA policies",
                            "Microsoft 365 profile: Optimized routing for M365 traffic",
                        ],
                        architecture: {
                            title: "Global Secure Access Architecture",
                            steps: [
                                { step: 1, title: "GSA Client", description: "Installed on user devices, tunnels selected traffic", icon: "Laptop" },
                                { step: 2, title: "Traffic Profiles", description: "M365, Internet, or Private Access traffic selection", icon: "Filter" },
                                { step: 3, title: "Microsoft Edge", description: "Traffic routed through Microsoft's global network", icon: "Globe" },
                                { step: 4, title: "Policy Evaluation", description: "CA policies + network policies applied together", icon: "ShieldCheck" },
                                { step: 5, title: "Resource Access", description: "Traffic forwarded to internet, M365, or private resources", icon: "Key" },
                            ],
                        },
                        whyItMatters: "Traditional VPN and proxy solutions are separate from identity. Global Secure Access unifies network security with identity-based access control, enabling true zero-trust for all traffic types - internet, SaaS, and private applications.",
                        commonMistakes: [
                            "Deploying GSA client without planning traffic profile configuration",
                            "Not understanding the difference between Internet and Private Access",
                            "Forgetting to configure the M365 traffic profile for optimal performance",
                            "Not integrating GSA policies with existing Conditional Access policies",
                        ],
                        interviewTips: [
                            "Explain the SSE concept and Microsoft's approach",
                            "Compare Global Secure Access to traditional VPN solutions",
                            "Discuss how identity and network security converge",
                        ],
                        examTips: [
                            "Know the difference between Internet Access and Private Access",
                            "Understand the GSA client and traffic profiles",
                            "Know how Global Secure Access integrates with Conditional Access",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Explain the Security Service Edge concept",
                            "Show the Global Secure Access admin center",
                            "Compare to traditional VPN and SWG approaches",
                        ],
                        realExamples: [
                            "Organization replaced traditional VPN with Private Access, improving performance and security posture",
                            "Company used Internet Access to enforce web filtering policies tied to user identity",
                        ],
                        questionsToAsk: [
                            "Is your organization evaluating SSE or SASE solutions?",
                            "How do you currently manage internet security for remote workers?",
                            "Are you using VPN for private application access?",
                        ],
                    },
                },
                {
                    id: "lesson-8-2",
                    title: "Private Access & Internet Access",
                    slug: "private-internet-access",
                    duration: "30 mins",
                    content: {
                        explanation: [
                            "Microsoft Entra Private Access provides zero-trust network access to private (on-premises or IaaS) resources. Unlike VPN which grants broad network access, Private Access provides per-app access based on identity. Users only reach the specific applications they are authorized for.",
                            "Microsoft Entra Internet Access is a secure web gateway (SWG) that filters internet-bound traffic. It can block access to risky websites, prevent data exfiltration, and apply web content filtering policies. The M365 traffic profile provides optimized, secure routing for Microsoft 365 services.",
                            "Both services integrate with Conditional Access for policy enforcement. A private access policy can require MFA and a compliant device before granting access to an internal application, while internet access policies can block high-risk web categories for specific user groups.",
                        ],
                        keyPoints: [
                            "Private Access: Per-app access to private resources (replaces VPN)",
                            "Quick Access: Fast setup for common private app scenarios",
                            "Internet Access: Web filtering, threat protection for internet traffic",
                            "M365 profile: Optimized routing and security for Microsoft 365",
                            "Universal CA: Network + identity policies in one framework",
                        ],
                        architecture: {
                            title: "Private & Internet Access Flows",
                            steps: [
                                { step: 1, title: "Private Access", description: "App segments define internal resources, connectors route traffic", icon: "Lock" },
                                { step: 2, title: "Quick Access", description: "Simplified setup for IP/FQDN-based private app access", icon: "Zap" },
                                { step: 3, title: "Internet Access", description: "Web filtering policies applied to internet-bound traffic", icon: "Globe" },
                                { step: 4, title: "M365 Profile", description: "Dedicated traffic profile for M365 with security policies", icon: "Cloud" },
                            ],
                        },
                        whyItMatters: "VPNs grant overly broad network access and are a common attack target. Private Access provides zero-trust per-app access. Internet Access extends corporate web security to remote workers without backhauling traffic. Together, they form a complete SSE solution.",
                        commonMistakes: [
                            "Configuring Private Access connectors in the same group as Application Proxy connectors",
                            "Not defining app segments granularly enough, creating broad network exposure",
                            "Applying internet access policies too broadly without testing first",
                            "Forgetting to enable the M365 traffic profile for compliance scenarios",
                        ],
                        interviewTips: [
                            "Explain per-app access vs traditional VPN broad access",
                            "Discuss when to use Private Access vs Application Proxy",
                            "Mention the M365 traffic profile use case for tenant restrictions",
                        ],
                        examTips: [
                            "Know Private Access components: connectors, app segments, Quick Access",
                            "Understand Internet Access web filtering capabilities",
                            "Know the M365 traffic profile and its security features",
                        ],
                    },
                    trainerNotes: {
                        talkingPoints: [
                            "Demo Private Access setup with Quick Access",
                            "Show internet access web filtering policies",
                            "Explain the M365 traffic profile configuration",
                            "Compare Private Access to Application Proxy",
                        ],
                        realExamples: [
                            "Enterprise replaced VPN for 10,000 remote workers with Private Access, reducing lateral movement risk",
                            "Organization used Internet Access to enforce web filtering for remote employees accessing risky sites",
                        ],
                        questionsToAsk: [
                            "What private applications do your remote users need to access?",
                            "How do you currently handle web security for remote workers?",
                            "Are you interested in replacing VPN with per-app access?",
                        ],
                    },
                },
            ],
        },
    ],
};

export default courseData;
