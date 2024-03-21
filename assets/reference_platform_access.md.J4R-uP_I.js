import{_ as e,c as t,o,a4 as a,cE as r,cF as n,cG as s,cH as i,cI as l,cJ as c}from"./chunks/framework.BGFi9fUZ.js";const w=JSON.parse('{"title":"Access control","description":"","frontmatter":{},"headers":[],"relativePath":"reference/platform/access.md","filePath":"reference/platform/access.md","lastUpdated":1686109849000}'),p={name:"reference/platform/access.md"},d=a('<h1 id="access-control" tabindex="-1">Access control <a class="header-anchor" href="#access-control" aria-label="Permalink to &quot;Access control&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#motivation">Motivation</a></li><li><a href="#organization-access">Organization access</a></li><li><a href="#project-access">Project access</a></li><li><a href="#how-to-use">How to use</a><ul><li><a href="#invite-member-join-organization">Invite member join organization</a></li><li><a href="#manage-access-to-project">Manage access to project</a></li></ul></li></ul></nav><h2 id="motivation" tabindex="-1">Motivation <a class="header-anchor" href="#motivation" aria-label="Permalink to &quot;Motivation&quot;">​</a></h2><p>It is common for multiple members to collaborate on building a project. OpenCUI offers access control, which lets you give more granular access to specific project resources and prevents unwanted access to other resources.</p><p>Access control lets you adopt the <a href="https://en.wikipedia.org/wiki/Principle_of_least_privilege" target="_blank" rel="noreferrer">principle of least privilege</a>, so control access and permissions granted to team members, you grant only the necessary access to your project resources.</p><h2 id="organization-access" tabindex="-1">Organization access <a class="header-anchor" href="#organization-access" aria-label="Permalink to &quot;Organization access&quot;">​</a></h2><p>Your team can collaborate on OpenCUI by using an organization account, which serves as a container for your shared work and gives the work a unique name and brand. You can invite people to join your organization, then give these members a variety of roles that grant different levels of access to the organization and its project.</p><p>The roles in the organization are:</p><table><thead><tr><th style="text-align:left;">Role</th><th style="text-align:left;">Summary</th></tr></thead><tbody><tr><td style="text-align:left;">Member</td><td style="text-align:left;">Can see all other members, can be granted access to projects.</td></tr><tr><td style="text-align:left;">Owner</td><td style="text-align:left;">Full administrative rights to the org, and have complete access to all projects.</td></tr></tbody></table><p>Organizations can own public, internal and private project. You can start with Starter Plan, which includes limited features on public project. To get the full feature set on public project, internal and private project and additional features at the organization level, you can upgrade to Team or Case Based plan. For more information, see <a href="./../../pricing/">Pricing</a>.</p><h2 id="project-access" tabindex="-1">Project access <a class="header-anchor" href="#project-access" aria-label="Permalink to &quot;Project access&quot;">​</a></h2><p>In addition to managing access to the organization itself, you can separately manage access to your organization&#39;s projects.</p><ol><li>You can restrict who has access to a project by choosing a project&#39;s privacy: public, internal or private:</li></ol><table><thead><tr><th style="text-align:left;">Privacy</th><th style="text-align:left;">Summary</th></tr></thead><tbody><tr><td style="text-align:left;">Public</td><td style="text-align:left;">Accessible to everyone in the OpenCUI. Only have read-only permissions, if they are not granted specific access.</td></tr><tr><td style="text-align:left;">Internal</td><td style="text-align:left;">Accessible to certain organization internal members. Only have read-only permissions, if they are not granted specific access.</td></tr><tr><td style="text-align:left;">Private</td><td style="text-align:left;">Only accessible to you and people you explicitly share access with</td></tr></tbody></table><ol start="2"><li>You can customize access to each project including chatbots, components and providers in your organization by assigning granular roles. From least access to most access, the roles for a project are:</li></ol><table><thead><tr><th style="text-align:left;">Role</th><th style="text-align:left;">Summary</th></tr></thead><tbody><tr><td style="text-align:left;">Read</td><td style="text-align:left;">Accessible to view your project</td></tr><tr><td style="text-align:left;">Edit</td><td style="text-align:left;">Accessible to edit language related content to your project</td></tr><tr><td style="text-align:left;">Write</td><td style="text-align:left;">Manage the project without access to sensitive or destructive actions</td></tr><tr><td style="text-align:left;">Admin</td><td style="text-align:left;">Full access to the project, including sensitive and destructive actions like managing privacy or deleting a repository</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Note</p><p>By default, <strong>Member</strong> of an organization will have <strong>Read</strong> permissions to the projects, <strong>Owner</strong> of an organization will have <strong>Admin</strong> permissions.</p></div><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use&quot;">​</a></h2><h3 id="invite-member-join-organization" tabindex="-1">Invite member join organization <a class="header-anchor" href="#invite-member-join-organization" aria-label="Permalink to &quot;Invite member join organization&quot;">​</a></h3><p>To invite a member to join your org:</p><ol><li><p>Head to the organization <strong>Team</strong> page and click <strong>Add member</strong>.</p><p><img src="'+r+'" alt="add org member"></p></li><li><p>In the popup, type the email address of the person you want to invite and click <strong>Add</strong>.</p><p><img src="'+n+'" alt="type email"></p></li><li><p>To manage members, find the person whose role you&#39;d like to change, hover “<strong>…</strong>” icon on the right side. You can set a member as <strong>Owner</strong>, convert internal member to <strong>Collaborator</strong> or <strong>Remove member</strong>.</p><p><img src="'+s+'" alt="manage member"></p></li></ol><div class="warning custom-block"><p class="custom-block-title">Need To Know</p><ul><li><p>When you removing members from your organization, all project corresponding datas of their branch will be permanently destroy. The paid license count does not automatically downgrade.</p></li><li><p>When you converting members to collaborator, means this operation will covert them from <strong>Internal member</strong> to <strong>Collaborator</strong>, their permissions to the internal projects will be lost. If they do not have specific permissions for any of the projects, they will be removed from the organization.</p></li></ul></div><h3 id="manage-access-to-project" tabindex="-1">Manage access to project <a class="header-anchor" href="#manage-access-to-project" aria-label="Permalink to &quot;Manage access to project&quot;">​</a></h3><p>To give a member specific access to a project:</p><ol><li><p>Head to the project <strong>Settings</strong> page. In the <strong>Access</strong> section, click <strong>Add member</strong>.</p><p><img src="'+i+'" alt="project access"></p></li><li><p>In the popup, type the email address of the person you want to add and click <strong>Save</strong>. You can allow the person who is not a member of your organization to access projects that your org owns, who will be an outside collaborator. Adding an outside collaborator to a project will use one of your paid licenses.</p><p><img src="'+l+'" alt="project type email"></p></li><li><p>To manage member access, find the person whose access you&#39;d like to change. Hover “<strong>…</strong>” icon on the right side, select and click the new role.</p><p><img src="'+c+'" alt="manage project access"></p></li></ol>',25),g=[d];function h(m,u,f,b,y,v){return o(),t("div",null,g)}const _=e(p,[["render",h]]);export{w as __pageData,_ as default};