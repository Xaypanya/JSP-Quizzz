
let questions = [
  //////////////////////////////////////
  {
    id: 1,
    question: "Static web ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- Static web ແມ່ນເວັບທີ່ບໍ່ມີການຕິດຕໍ່ກັບຖານຂໍ້ມູນເປັນການນຳສະເຫນີເວັບໄຊແບບການອ່ານຫນັງສື ແມ່ນເວັບທີ່ມີເນື້ອໃນຕາຍໂຕ.",
    ]
  },
  //////////////////////////////////////
  {
    id: 2,
    question: "Dynamic web ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- Dynamic web ເປັນເວັບທີ່ມີເນື້ອໃນບໍ່ຕາຍໂຕ ທີເນື້ອຫາເວັບສາມາດປ່ຽນແປງເຊິ່ງຂື້ນກັບພາລາມິດເຕີ.",
    ]
  },
  //////////////////////////////////////
  {
    id: 3,
    question: "JSP ແມ່ນຫຍັງ,ຫຍໍ່ຈາກຫຍັງ?",
    answer: "x",
    options: [
      "- JSP ຫຍໍ້ມາຈາກ Java Server Page. <br> - JSP ເປັນເທັກໂນໂລຊີສຳລັບພັດທະນາ Web application ສາ້ງຂື້ນມາໃນປີ 2000 ໂດຍທ່ານ james Duncan Davidson ເປັນຜູ້ສ້າງ.",
    ]
  },
  //////////////////////////////////////
  {
    id: 4,
    question: "Tag Scriptlet <% %> ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- Tag Scriptlet <% %> ເປັນ Tag ທີ່ໃຊ້ສໍາລັບຂຽນໂຄດພາສາ Java, ເຊິ່ງ Tag ນີ້ຈະຂຶ້ນຕົ້ນດ້ວຍເຄື່ອງໝາຍ <% ແລະປິດດ້ວຍ %>.",
    ]
  },
  //////////////////////////////////////
  {
    id: 5,
    question: "Tag Declaration <%! %> ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- Tag Declaration <%! %> Tag ນີ້ຈະໃຊ້ສຳລັບປະກາດຕົວປ່ຽນ ຫຼື ເມເຕີດ (Method) ທີ່ໃຊ້ໃນ JSP.",
    ]
  },
  //////////////////////////////////////
  {
    id: 6,
    question: "Tag Expression <%= %> ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- Tag Expression <%= %> Tag ນີ້ໃຊ້ສຳລັບສະ ແດງຄ່າຂອງຕົວປ່ຽນຫຼືການເອີ້ນໃຊ້ Method ອອກທາງບຣາວເຊີຄ່າຂອງຕົວປ່ຽນທີ່ຈະນໍາມາສະແດງນັ້ນຕ້ອງມີການປ່ຽນໃຫ້ມີຮູບແບບຕົວອັກສອນກ່ອນສະເໝີ.",
    ]
  },
  //////////////////////////////////////
  {
    id: 7,
    question: "Tag Directive  <%@ %> ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      ' Tag Directive  <%@ %> ເປັນການເອີ້ນໃຊ້ຊັບພະຍາກອນທີ່ມີຢູ່ຫຼືກຳນົດຄຸນສົມບັດຂອງໜ້າ(page) Directives ແບ່ງອອກເປັນ 3 ສ່ວນຄື: <br>-	Page  <%@page Attribute=” ຄ່າທີກຳນົດໃຫ້ Attribute” %> ປົກກະຕິສ່ວນນີ້ຈະເຫັນຢູ່ເທິງສຸດຂອງ JSP page ເຊິ່ງໃຊ້ກຳນົດຄ່າຕ່າງໆທີ່ກ່ຽວຂ້ອງກັບ JSP page ນັ້ນໆ( set ຄ່າ Attribute ຕ່າງໆຂອງ JSP ) ຫຼືກ່ຽວຂ້ອງກັບການຕິດຕໍ່ກັບ JSP Container.<br>-	Include  <%@include file=”URL ຂອງໄຟລ” %> ເປັນການນຳເອົາໄຟລ໌ອື່ນເຂົ້າມາໃຊ້ໃນໄຟລ໌ JSP ຂອງເຮົາ.<br>-	TagLib <%@ taglib uri="uri" prefix="prefixOfTag" > ໜ້າທີ່ຂອງ Directive ຊະນິດນີ້ຈະບອກໃຫ້ JSP container ຮູ້ວ່າພາຍໃນ JSP ນີ້ຈະໃຊ້ Tag ທີ່ສ້າງຂຶ້ນມາໃໝ່ ເຊິ່ງການສ້າງ Tag ຂຶ້ນມາໃຊ້ເອງນັ້ນຂ້ອນຂ້າງຈະສັບສົນ, ດັ່ງນັ້ນໃນບົດນີ້ຈະບໍ່ໄດ້ລົງເລິກເລື່ອງການສ້າງ Tag.',
    ]
  },
  //////////////////////////////////////
  {
    id: 8,
    question: "Tag Comment <%-- --%> ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- Tag Comment <%-- --%> ຄືສ່ວນທີ່ເປັນໝາຍເຫດຂອງໂປຣແກຣມ ຫຼື ຂໍ້ຄວາມອະທິບາຍການເຮັດວຽກຂອງໂຄດ, ເຊິ່ງສ່ວນນີ້ຈະບໍ່ຖືກນຳໄປປະມວນຜົນ.",
    ]
  },
  //////////////////////////////////////
  {
    id: 9,
    question: "ຊະນິດຂໍ້ມູນໃນພາສາ JSP ມີຫຍັງແນ່?",
    answer: "x",
    options: [
      "ຊະນິດຂໍ້ມູນໃນພາສາ JSP ຈະຄືກັນກັບພາສາ Java ເຊິ່ງແບ່ງອອກເປັນ 4 ຊະນິດດັ່ງນີ້: <br>-	ຈຳນວນຖ້ວນ ຕົວປ່ຽນຈຳນວນຖ້ວນຈະປະກອບໄປດ້ວຍ bye, short, int, long. <br>-	ຈຳນວນຈິງ  ສຳລັບຕົວປ່ຽນຈຳນວນຈິງຈະປະກອບໄປດ້ວຍ float ແລະ double. <br>- ຕົວອັກສອນ ສຳລັບຂໍ້ມູນປະເພດຕົວອັກສອນຈະປະກອບມີ char ແລະ String.<br>- ບູລິນ(Boolean) ຂໍ້ມູນປະເພດນີ້ຈະໃຊ້ສຳລັບຄ່າຄວາມເປັນຈິງທາງຕັກກະສາດ ເຊິ່ງຄ່າຂອງມັນເປັນໄປໄດ້ພຽງສອງຄ່າຄື true ກັບ false ເທົ່ານັ້ນ.",
    ]
  },
  //////////////////////////////////////
  {
    id: 10,
    question: "ຄວາມສາມາມາດບັນຈຸຂອງຂໍ້ມູນແຕ່ລະຊະນິດຂໍ້ມູນແມ່ນເທົ່າໃດ?",
    answer: "x",
    options: [
      "- byte :8bits :- 128 to 127. <br>- short: 16bits: -32 768 to 32 767. <br>- int : 32 bits : -2 147 483 648 to 2 147 483 647. <br>- long 64bits :-2^63 to (2^63)-1. <br>- float 32bits : -3,4E38 to 3,4E38. <br>- double 64bits :1,7E308 to 1,7E308. <br>- char 16bits:ເກັບອັກສອນໄດ້ຕົວດຽວ",
    ]
  },
  //////////////////////////////////////
  {
    id: 11,
    question: "Method ຂອງ String ແລະ integer ທີ່ຄວນຮູ້ມີຫຍັງແນ່?",
    answer: "x",
    options: [
      "•	length(), charAt(), substring(), equals(), trim(), toUpperCase(), toLowerCase(), paresInt(), toString().",
    ]
  },
  //////////////////////////////////////
  {
    id: 12,
    question: "length() Method ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- length() Method ໃຊ້ຊອກຫາຄວາມຍາວຂອງ string ທີ່ກຳນົດ.",
    ]
  },
  //////////////////////////////////////
  {
    id: 13,
    question: "charAt() Method ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- charAt() Method ໃຊ້ຊອກຫາຕົວອັກສອນໃນສະຕິງຕາມຕຳແໜ່ງທີ່ເຮົາກຳນົດ.ເຊິ່ງຕົວອັກສອນທຳອິດຈະຢູ່ຕຳແໜ່ງທີ່ 0.",
    ]
  },
  //////////////////////////////////////
  {
    id: 14,
    question: "substring() Method ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- substring() Method ໃຊ້ໃນການ Copy ສະຕິງຍ່ອຍຈາກສະຕິງຫຼັກ.",
    ]
  },
  //////////////////////////////////////
  {
    id: 15,
    question: "equals() Method ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- equals() Method ໃຊ້ສຳລັບປຽບທຽບ 2 ສະຕິງວ່າເທົ່າກັນຫຼືບໍ່ຖ້າເທົ່າກັນຈະສົ່ງຄ່າກັບເປັນ trueຖ້າບໍ່ເທົ່າກັນຈະສົ່ງຄ່າກັບເປັນ false.",
    ]
  },
  //////////////////////////////////////
  {
    id: 16,
    question: "trim() Method ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- trim() Method ໃຊ້ສຳລັບຕັດຊ່ອງຫວ່າງທາງດ້ານໜ້າ ແລະດ້ານຫຼັງຂອງສະຕິງອອກ.",
    ]
  },
  //////////////////////////////////////
  {
    id: 17,
    question: "toUpperCase() ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- toUpperCase() ໃຊ້ສຳລັບປ່ຽນສະຕິງໃຫ້ເປັນຕົວອັກສອນໃຫຍ່.",
    ]
  },
  //////////////////////////////////////
  {
    id: 18,
    question: "toLowerCase() Method ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- toLowerCase() Method ໃຊ້ສຳລັບປ່ຽນສະຕິງໃຫ້ເປັນຕົວອັກສອນນ້ອຍ.",
    ]
  },
  //////////////////////////////////////
  {
    id: 19,
    question: "paresInt() Method ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- paresInt() Method ໃຊ້ສຳລັບປ່ຽນຂໍ້ມູນສະຕິງໃຫ້ເປັນຕົວເລກ.",
    ]
  },
  //////////////////////////////////////
  {
    id: 20,
    question: "toString() Method ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- toString() Method ໃຊ້ສຳລັບປ່ຽນຂໍ້ມູນຕົວເລກໃຫ້ເປັນສະຕິງ",
    ]
  },
  //////////////////////////////////////
  {
    id: 21,
    question: "Condition ແລະ Loop ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- Condition ແລະ Loop ເປັນຄຳສັ່ງທີ່ໃຊ້ໃນການກວດສອບເງື່ອນໄຂວ່າເປັນຈິງ ຫຼື ບໍ່.",
    ]
  },
  //////////////////////////////////////
  {
    id: 22,
    question: "Post request method ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- Post request method ເປັນຮູບແບບການ submit ແລະສົ່ງຄ່າຈາກ form ຂອງ html ໄປຫາ JSP",
    ]
  },
  //////////////////////////////////////
  {
    id: 23,
    question: "Get request method ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- Get request method ເປັນການສົ່ງຄ່າແບບ QueryString ຫຼື ຜ່ານ URL",
    ]
  },
  //////////////////////////////////////
  {
    id: 24,
    question: "sendRedirect() Method ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      '- sendRedirect ເປັນການຍ້າຍຕຳແໜ່ງຂອງ URL ໄປຫາຕຳແໜ່ງອື່ນທີ່ຕ້ອງການ ຫຼືຍ້າຍໄຟລ໌ກໍ່ໄດ້ຕົວຢ່າງ: response.sendRedirect("Project6_1_index.jsp");',
    ]
  },
  //////////////////////////////////////
  {
    id: 25,
    question: "Session ແມ່ນຫຍັງ?",
    answer: "x",
    options: [
      "- Session ເປັນ Object ທີ່ເຮັດໜ້າທີ່ຈັດເກັບຄ່າຂອງໂຕປ່ຽນໄວ້ໃນ Memory ຂອງ Web Server ເຮົາສາມາດເອີ້ນໃຊ້ໂຕປ່ຽນໄດ້ໃນທຸກໆສ່ວນຂອງໂປຣແກຣມໂດຍປົກກະຕິແລ້ວ Session ຈະໃຊ້ໃນການສ້າງ Login",
    ]
  },
  //////////////////////////////////////
  {
    id: 26,
    question: "ໄຊປັນຍາ ຫຼໍ່ບໍ່?",
    answer: "x",
    options: [
      "ຫຼໍ່ເທ້",
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first] = questions[count].options;

  question.innerHTML = `
  <h2>ຄຳຖາມທີ ${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
