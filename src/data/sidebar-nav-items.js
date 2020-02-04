export default function() {
  return [
    {
      title: "Home",
      to: "/home",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    // {
    //   title: "Blog Posts",
    //   htmlBefore: '<i class="material-icons">vertical_split</i>',
    //   to: "/blog-posts",
    // },
    // {
    //   title: "Add New Post",
    //   htmlBefore: '<i class="material-icons">note_add</i>',
    //   to: "/add-new-post",
    // },
    {
      title: "Add New Employee",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-employee",
    },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    {
      title: "Employees",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/employees",
    },
    {
      title: "Report",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/report",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile",
    },
    {
      title: "Settings",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/settings",
    }
  ];
}
