const machines = [
  {
    id: 1,
    name: "CNC Milling Machine",
    reference: "REF-0012A",
    status: "Active",
    temperature: 75,
    speed: 1200,
    production: 85,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZpXC7foD2YEu2Mjz9UC7_H7qP4E1uTWlxD1RTkhSbqK4dz7C2XExKpknHrllNpyPbLURtDDjE7mh2TNr0dedFEw4ogcVx8f1pj9T5pdIHlOXKfJbG-SrlGOvd-j1oi7iHrBY-tlOLdhuwXlaxZSpGCz234KRbTXBH_wOgtvvJKwkb6y2oH2-6Iq67fI1Go9Q2AmKNKvJ4mbLiSZhSENOkPUVl7gGqVuZkk70H198hQvTbA2-iIUOIrnwVd6EeNmPnxcu1yC_FBLvJ",
  },
  {
    id: 2,
    name: "Robotic Welder",
    reference: "REF-0024B",
    status: "Breakdown",
    temperature: 150,
    speed: 0,
    production: 0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMQePFyKOIfdUglZD2ofruf1lgaZ7_KkM6ms6-i-LDz_ZOcQYgaC9Ml8OwOL7uyOjt7Rf1ydRKkSNTwtYrRsXB_jXCMK5vD36Yj-g_75nv4kGEQTiTEao4HXzRXejIk-eNEySlifmFSLiYd01djOULjaKDwWixAMddjehmwaRovu41oX7elPKGRmbpLdtV0edZVa4_aCGgZEy5mUGzZ8K8khg5fFpBcKzUnysXB5qPofJR0Ig6tAa_-vOT2ExBtksQKXLjrC-qXNF5",
  },
  {
    id: 3,
    name: "Hydraulic Press",
    reference: "REF-0007C",
    status: "Maintenance",
    temperature: 30,
    speed: 0,
    production: 0,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdGbgT9xydDWPHStLZmeQgqqmWBCzqs07ieARKa8P99XYnBJmaxSV9h1DHq2r1SFMtNe8Vv4SZP4MtJ5e3l6WDrYMxGkat3AksWO652eiPcVErL6WgVEIO2fnk5cRSZPgP-8LFpiISNcyBYSbR5iCuS0ewZbtMePaW9wwXJegJdux5LUQKgq9xbsAXApiv78DKWKtigQO-0LhRMza2VzmxBfgy0nQuIfrrc4wUUljm_SZrLtGbRoLFoHAewUsp0mkDjJq4bFnnGzWA",
  },
];

const machineRepository = {
  getAll: () => machines,
  getById: (id) => machines.find((m) => m.id == id),
  add: (machine) => {
    machine.id = machines.length + 1;
    machines.push(machine);
    return machine;
  },
  updateStatus: (id, status) => {
    const machine = machines.find((m) => m.id == id);
    if (machine) machine.status = status;
    return machine;
  },
};

module.exports = machineRepository;
