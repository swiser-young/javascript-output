const frameworkId = 1;

const data = [
  {
    order: "1",
    name: "Context (GV.OC)",
    description:
      '{"time":1716175110850,"blocks":[{"id":"DMl7FxglaC","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"qyLKw_mExr","type":"paragraph","data":{"text":"The circumstances - `mission`, \\"stakeholder\\" expectations, \'dependencies\', and legal, regulatory, and contractual requirements - surrounding the organization\'s cybersecurity risk management decisions are understood"},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
  {
    priority: 1,
    order: "1.1",
    name: "Cybersecurity with Mission",
    description:
      '{"time":1716169114470,"blocks":[{"id":"gpeEaQNLpZ","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"LGfLMxXt2F","type":"paragraph","data":{"text":"The organizational mission is understood and informs cybersecurity risk management"},"tunes":{"textVariant":""}},{"id":"d_rLu_36lG","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"LcnbezkgQZ","type":"list","data":{"style":"unordered","items":[{"content":"Share the organization\'s mission (e.g., through vision and mission statements, marketing, and service strategies) to provide a basis for identifying risks that may impede that mission","items":[]}]},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
  {
    priority: 2,
    order: "1.2",
    name: "Cybersecurity Approach",
    description:
      '{"time":1716169141382,"blocks":[{"id":"9mO06YYZ2K","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"w_UlLMim_t","type":"paragraph","data":{"text":"Internal and external stakeholders are understood, and their needs and expectations regarding cybersecurity risk management are understood and considered"},"tunes":{"textVariant":""}},{"id":"0lddbHzBTK","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"GYeMmCdmNE","type":"list","data":{"style":"unordered","items":[{"content":"Identify relevant internal stakeholders and their cybersecurity-related expectations (e.g., performance and risk expectations of officers, directors, and advisors; cultural expectations of employees","items":[]},{"content":"Identify relevant external stakeholders and their cybersecurity-related expectations (e.g., privacy expectations of customers, business expectations of partnerships, compliance expectations of regulators, ethics expectations of society)","items":[]}]},"tunes":{"textVariant":""}},{"id":"EC7nR85Yzg","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
  {
    order: "2",
    name: "Context (GV.OC)",
    description:
      '{"time":1716175110850,"blocks":[{"id":"DMl7FxglaC","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"qyLKw_mExr","type":"paragraph","data":{"text":"The circumstances - `mission`, \\"stakeholder\\" expectations, \'dependencies\', and legal, regulatory, and contractual requirements - surrounding the organization\'s cybersecurity risk management decisions are understood"},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
  {
    priority: 3,
    order: "2.1",
    name: "Cybersecurity with Mission",
    description:
      '{"time":1716169114470,"blocks":[{"id":"gpeEaQNLpZ","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"LGfLMxXt2F","type":"paragraph","data":{"text":"The organizational mission is understood and informs cybersecurity risk management"},"tunes":{"textVariant":""}},{"id":"d_rLu_36lG","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"LcnbezkgQZ","type":"list","data":{"style":"unordered","items":[{"content":"Share the organization\'s mission (e.g., through vision and mission statements, marketing, and service strategies) to provide a basis for identifying risks that may impede that mission","items":[]}]},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
  {
    order: "3",
    name: "Context (GV.OC)",
    description:
      '{"time":1716175110850,"blocks":[{"id":"DMl7FxglaC","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"qyLKw_mExr","type":"paragraph","data":{"text":"The circumstances - `mission`, \\"stakeholder\\" expectations, \'dependencies\', and legal, regulatory, and contractual requirements - surrounding the organization\'s cybersecurity risk management decisions are understood"},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
  {
    priority: 2,
    order: "3.1",
    name: "Cybersecurity Approach",
    description:
      '{"time":1716169141382,"blocks":[{"id":"9mO06YYZ2K","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"w_UlLMim_t","type":"paragraph","data":{"text":"Internal and external stakeholders are understood, and their needs and expectations regarding cybersecurity risk management are understood and considered"},"tunes":{"textVariant":""}},{"id":"0lddbHzBTK","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"GYeMmCdmNE","type":"list","data":{"style":"unordered","items":[{"content":"Identify relevant internal stakeholders and their cybersecurity-related expectations (e.g., performance and risk expectations of officers, directors, and advisors; cultural expectations of employees","items":[]},{"content":"Identify relevant external stakeholders and their cybersecurity-related expectations (e.g., privacy expectations of customers, business expectations of partnerships, compliance expectations of regulators, ethics expectations of society)","items":[]}]},"tunes":{"textVariant":""}},{"id":"EC7nR85Yzg","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
];

const output = [
  {
    key: "NIST_1",
    frameworkId: 1,
    referenceNo: "",
    domain: "",
    name: "Context (GV.OC)",
    description:
      '{"time":1716175110850,"blocks":[{"id":"DMl7FxglaC","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"qyLKw_mExr","type":"paragraph","data":{"text":"The circumstances - `mission`, \\"stakeholder\\" expectations, \'dependencies\', and legal, regulatory, and contractual requirements - surrounding the organization\'s cybersecurity risk management decisions are understood"},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
    order: 1,
    children: [
      {
        key: "NIST_2",
        frameworkId: 1,
        referenceNo: "",
        domain: "",
        name: "Cybersecurity with Mission",
        description:
          '{"time":1716169114470,"blocks":[{"id":"gpeEaQNLpZ","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"LGfLMxXt2F","type":"paragraph","data":{"text":"The organizational mission is understood and informs cybersecurity risk management"},"tunes":{"textVariant":""}},{"id":"d_rLu_36lG","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"LcnbezkgQZ","type":"list","data":{"style":"unordered","items":[{"content":"Share the organization\'s mission (e.g., through vision and mission statements, marketing, and service strategies) to provide a basis for identifying risks that may impede that mission","items":[]}]},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
        order: 2,
        priority: 1,
      },
      {
        key: "NIST_3",
        frameworkId: 1,
        referenceNo: "",
        domain: "",
        name: "Cybersecurity Approach",
        description:
          '{"time":1716169141382,"blocks":[{"id":"9mO06YYZ2K","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"w_UlLMim_t","type":"paragraph","data":{"text":"Internal and external stakeholders are understood, and their needs and expectations regarding cybersecurity risk management are understood and considered"},"tunes":{"textVariant":""}},{"id":"0lddbHzBTK","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"GYeMmCdmNE","type":"list","data":{"style":"unordered","items":[{"content":"Identify relevant internal stakeholders and their cybersecurity-related expectations (e.g., performance and risk expectations of officers, directors, and advisors; cultural expectations of employees","items":[]},{"content":"Identify relevant external stakeholders and their cybersecurity-related expectations (e.g., privacy expectations of customers, business expectations of partnerships, compliance expectations of regulators, ethics expectations of society)","items":[]}]},"tunes":{"textVariant":""}},{"id":"EC7nR85Yzg","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
        order: 3,
        priority: 2,
      },
    ],
  },
  {
    key: "NIST_4",
    frameworkId: 1,
    referenceNo: "",
    domain: "",
    name: "Context (GV.OC)",
    description:
      '{"time":1716175110850,"blocks":[{"id":"DMl7FxglaC","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"qyLKw_mExr","type":"paragraph","data":{"text":"The circumstances - `mission`, \\"stakeholder\\" expectations, \'dependencies\', and legal, regulatory, and contractual requirements - surrounding the organization\'s cybersecurity risk management decisions are understood"},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
    order: 4,
    children: [
      {
        key: "NIST_5",
        frameworkId: 1,
        referenceNo: "",
        domain: "",
        name: "Cybersecurity with Mission",
        description:
          '{"time":1716169114470,"blocks":[{"id":"gpeEaQNLpZ","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"LGfLMxXt2F","type":"paragraph","data":{"text":"The organizational mission is understood and informs cybersecurity risk management"},"tunes":{"textVariant":""}},{"id":"d_rLu_36lG","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"LcnbezkgQZ","type":"list","data":{"style":"unordered","items":[{"content":"Share the organization\'s mission (e.g., through vision and mission statements, marketing, and service strategies) to provide a basis for identifying risks that may impede that mission","items":[]}]},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
        order: 5,
        priority: 3,
      },
    ],
  },
  {
    key: "NIST_6",
    frameworkId: 1,
    referenceNo: "",
    domain: "",
    name: "Context (GV.OC)",
    description:
      '{"time":1716175110850,"blocks":[{"id":"DMl7FxglaC","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"qyLKw_mExr","type":"paragraph","data":{"text":"The circumstances - `mission`, \\"stakeholder\\" expectations, \'dependencies\', and legal, regulatory, and contractual requirements - surrounding the organization\'s cybersecurity risk management decisions are understood"},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
    order: 6,
    children: [
      {
        key: "NIST_7",
        frameworkId: 1,
        referenceNo: "",
        domain: "",
        name: "Cybersecurity Approach",
        description:
          '{"time":1716169141382,"blocks":[{"id":"9mO06YYZ2K","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"w_UlLMim_t","type":"paragraph","data":{"text":"Internal and external stakeholders are understood, and their needs and expectations regarding cybersecurity risk management are understood and considered"},"tunes":{"textVariant":""}},{"id":"0lddbHzBTK","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"GYeMmCdmNE","type":"list","data":{"style":"unordered","items":[{"content":"Identify relevant internal stakeholders and their cybersecurity-related expectations (e.g., performance and risk expectations of officers, directors, and advisors; cultural expectations of employees","items":[]},{"content":"Identify relevant external stakeholders and their cybersecurity-related expectations (e.g., privacy expectations of customers, business expectations of partnerships, compliance expectations of regulators, ethics expectations of society)","items":[]}]},"tunes":{"textVariant":""}},{"id":"EC7nR85Yzg","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
        order: 7,
        priority: 2,
      },
    ],
  },
];

const data2 = [
  {
    priority: "HIGH",
    order: "1",
    name: "Organizational Context (GV.OC)",
    description:
      '{"time":1716158261291,"blocks":[{"id":"dkVfru6hh6","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"13he7rxXwg","type":"paragraph","data":{"text":"The circumstances - mission, stakeholder expectations, dependencies, and legal, regulatory, and contractual requirements - surrounding the organization\'s cybersecurity risk management decisions are understood"},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
  {
    priority: "HIGH",
    order: "1.1",
    name: "Aligned Cybersecurity with Mission",
    description:
      '{"time":1716158200532,"blocks":[{"id":"oA5DbUTcMG","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"0WXnjyrHxQ","type":"paragraph","data":{"text":"The organizational mission is understood and informs cybersecurity risk management"},"tunes":{"textVariant":""}},{"id":"aoFXi70QDp","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"NslLI7T9qh","type":"list","data":{"style":"unordered","items":[{"content":"Share the organization\'s mission (e.g., through vision and mission statements, marketing, and service strategies) to provide a basis for identifying risks that may impede that mission","items":[]}]},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
  {
    priority: "HIGH",
    order: "1.2",
    name: "Stakeholder-Centric Cybersecurity Approach",
    description:
      '{"time":1716158413219,"blocks":[{"id":"VsU-TK9-y9","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"GLDu-Xb37k","type":"paragraph","data":{"text":"Internal and external stakeholders are understood, and their needs and expectations regarding cybersecurity risk management are understood and considered"},"tunes":{"textVariant":""}},{"id":"U3ukCpjw0W","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"qx0lTUnObu","type":"list","data":{"style":"unordered","items":[{"content":"Identify relevant internal stakeholders and their cybersecurity-related expectations (e.g., performance and risk expectations of officers, directors, and advisors; cultural expectations of employees","items":[]},{"content":"Identify relevant external stakeholders and their cybersecurity-related expectations (e.g., privacy expectations of customers, business expectations of partnerships, compliance expectations of regulators, ethics expectations of society)","items":[]}]},"tunes":{"textVariant":""}},{"id":"ej5TnphdYP","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
  {
    priority: "HIGH",
    order: "1.3",
    name: "Legal and Regulatory Cybersecurity Management",
    description:
      '{"time":1716158540586,"blocks":[{"id":"ZyUj_bQ7xJ","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"iCJ2kP4SJT","type":"paragraph","data":{"text":"Legal, regulatory, and contractual requirements regarding cybersecurity - including privacy and civil liberties obligations - are understood and managed"},"tunes":{"textVariant":""}},{"id":"eOY5HTa48u","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"jxkkwl88Np","type":"list","data":{"style":"unordered","items":[{"content":"Determine a process to track and manage legal and regulatory requirements regarding protection of individuals\' information (e.g., Health Insurance Portability and Accountability Act, California Consumer Privacy Act, General Data Protection Regulation)","items":[]},{"content":"Determine a process to track and manage contractual requirements for cybersecurity management of supplier, customer, and partner information","items":[]},{"content":"Align the organization\'s cybersecurity strategy with legal, regulatory, and contractual requirements","items":[]}]},"tunes":{"textVariant":""}},{"id":"ZNZLeBMHHp","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}},{"id":"eaTYmIUb25","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
  {
    priority: "HIGH",
    order: "1.4",
    name: "Communication of Stakeholder Expectations",
    description:
      '{"time":1716158711714,"blocks":[{"id":"XLSTmhWDkF","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"-AnY5Q4gNu","type":"paragraph","data":{"text":"Critical objectives, capabilities, and services that stakeholders depend on or expect from the organization are understood and communicated"},"tunes":{"textVariant":""}},{"id":"VCekF_7__9","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"Lh48NhCHC-","type":"list","data":{"style":"unordered","items":[{"content":"Establish criteria for determining the criticality of capabilities and services as viewed by internal and external stakeholders","items":[]},{"content":"Determine (e.g., from a business impact analysis) assets and business operations that are vital to achieving mission objectives and the potential impact of a loss (or partial loss) of such operations","items":[]},{"content":"Establish and communicate resilience objectives (e.g., recovery time objectives) for delivering critical capabilities and services in various operating states (e.g., under attack, during recovery, normal operation)","items":[]}]},"tunes":{"textVariant":""}},{"id":"DD28k9vkrz","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
  {
    priority: "HIGH",
    order: "1.5",
    name: "Organizational Dependency Understanding",
    description:
      '{"time":1716158786835,"blocks":[{"id":"Yz_HJKQoRh","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"urHhuxobVg","type":"paragraph","data":{"text":"Outcomes, capabilities, and services that the organization depends on are understood and communicated"},"tunes":{"textVariant":""}},{"id":"XHlrX0CwV6","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"OdSkhWU4EE","type":"list","data":{"style":"unordered","items":[{"content":"Create an inventory of the organization\'s dependencies on external resources (e.g., facilities, cloud-based hosting providers) and their relationships to organizational assets and business functions","items":[]},{"content":" Identify and document external dependencies that are potential points of failure for the organization\'s critical capabilities and services, and share that information with appropriate personnel","items":[]}]},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
  },
];

const output2 = [
  {
    key: "NIST_1",
    frameworkId: 1,
    referenceNo: "",
    domain: "",
    name: "Context (GV.OC)",
    description:
      '{"time":1716158261291,"blocks":[{"id":"dkVfru6hh6","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"13he7rxXwg","type":"paragraph","data":{"text":"The circumstances - mission, stakeholder expectations, dependencies, and legal, regulatory, and contractual requirements - surrounding the organization\'s cybersecurity risk management decisions are understood"},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
    order: 1,
    children: [
      {
        key: "NIST_2",
        frameworkId: 1,
        referenceNo: "",
        domain: "",
        name: "Cybersecurity with Mission",
        description:
          '{"time":1716158200532,"blocks":[{"id":"oA5DbUTcMG","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"0WXnjyrHxQ","type":"paragraph","data":{"text":"The organizational mission is understood and informs cybersecurity risk management"},"tunes":{"textVariant":""}},{"id":"aoFXi70QDp","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"NslLI7T9qh","type":"list","data":{"style":"unordered","items":[{"content":"Share the organization\'s mission (e.g., through vision and mission statements, marketing, and service strategies) to provide a basis for identifying risks that may impede that mission","items":[]}]},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
        order: 2,
        priority: 1,
      },
      {
        key: "NIST_3",
        frameworkId: 1,
        referenceNo: "",
        domain: "",
        name: "Cybersecurity Approach",
        description:
          '{"time":1716158413219,"blocks":[{"id":"VsU-TK9-y9","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"GLDu-Xb37k","type":"paragraph","data":{"text":"Internal and external stakeholders are understood, and their needs and expectations regarding cybersecurity risk management are understood and considered"},"tunes":{"textVariant":""}},{"id":"U3ukCpjw0W","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"qx0lTUnObu","type":"list","data":{"style":"unordered","items":[{"content":"Identify relevant internal stakeholders and their cybersecurity-related expectations (e.g., performance and risk expectations of officers, directors, and advisors; cultural expectations of employees","items":[]},{"content":"Identify relevant external stakeholders and their cybersecurity-related expectations (e.g., privacy expectations of customers, business expectations of partnerships, compliance expectations of regulators, ethics expectations of society)","items":[]}]},"tunes":{"textVariant":""}},{"id":"ej5TnphdYP","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
        order: 3,
        priority: 1,
      },
      {
        key: "NIST_4",
        frameworkId: 1,
        referenceNo: "",
        domain: "",
        name: "and Regulatory Cybersecurity Management",
        description:
          '{"time":1716158540586,"blocks":[{"id":"ZyUj_bQ7xJ","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"iCJ2kP4SJT","type":"paragraph","data":{"text":"Legal, regulatory, and contractual requirements regarding cybersecurity - including privacy and civil liberties obligations - are understood and managed"},"tunes":{"textVariant":""}},{"id":"eOY5HTa48u","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"jxkkwl88Np","type":"list","data":{"style":"unordered","items":[{"content":"Determine a process to track and manage legal and regulatory requirements regarding protection of individuals\' information (e.g., Health Insurance Portability and Accountability Act, California Consumer Privacy Act, General Data Protection Regulation)","items":[]},{"content":"Determine a process to track and manage contractual requirements for cybersecurity management of supplier, customer, and partner information","items":[]},{"content":"Align the organization\'s cybersecurity strategy with legal, regulatory, and contractual requirements","items":[]}]},"tunes":{"textVariant":""}},{"id":"ZNZLeBMHHp","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}},{"id":"eaTYmIUb25","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
        order: 4,
        priority: 1,
      },
      {
        key: "NIST_5",
        frameworkId: 1,
        referenceNo: "",
        domain: "",
        name: "of Stakeholder Expectations",
        description:
          '{"time":1716158711714,"blocks":[{"id":"XLSTmhWDkF","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"-AnY5Q4gNu","type":"paragraph","data":{"text":"Critical objectives, capabilities, and services that stakeholders depend on or expect from the organization are understood and communicated"},"tunes":{"textVariant":""}},{"id":"VCekF_7__9","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"Lh48NhCHC-","type":"list","data":{"style":"unordered","items":[{"content":"Establish criteria for determining the criticality of capabilities and services as viewed by internal and external stakeholders","items":[]},{"content":"Determine (e.g., from a business impact analysis) assets and business operations that are vital to achieving mission objectives and the potential impact of a loss (or partial loss) of such operations","items":[]},{"content":"Establish and communicate resilience objectives (e.g., recovery time objectives) for delivering critical capabilities and services in various operating states (e.g., under attack, during recovery, normal operation)","items":[]}]},"tunes":{"textVariant":""}},{"id":"DD28k9vkrz","type":"paragraph","data":{"text":""},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
        order: 5,
        priority: 1,
      },
      {
        key: "NIST_6",
        frameworkId: 1,
        referenceNo: "",
        domain: "",
        name: "Dependency Understanding",
        description:
          '{"time":1716158786835,"blocks":[{"id":"Yz_HJKQoRh","type":"header","data":{"text":"Description","level":2},"tunes":{"textVariant":""}},{"id":"urHhuxobVg","type":"paragraph","data":{"text":"Outcomes, capabilities, and services that the organization depends on are understood and communicated"},"tunes":{"textVariant":""}},{"id":"XHlrX0CwV6","type":"header","data":{"text":"Actions","level":2},"tunes":{"textVariant":""}},{"id":"OdSkhWU4EE","type":"list","data":{"style":"unordered","items":[{"content":"Create an inventory of the organization\'s dependencies on external resources (e.g., facilities, cloud-based hosting providers) and their relationships to organizational assets and business functions","items":[]},{"content":" Identify and document external dependencies that are potential points of failure for the organization\'s critical capabilities and services, and share that information with appropriate personnel","items":[]}]},"tunes":{"textVariant":""}}],"version":"2.29.0"}',
        order: 6,
        priority: 1,
      },
    ],
  },
];

export { data, data2 };
