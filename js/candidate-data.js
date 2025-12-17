const DEFAULT_CANDIDATES = [
  {
    id: 1,
    fullname: "Lê Mạnh Hùng",
    email: "lemanhhung.backend.dev@gmail.com",
    position: "nhân viên",

    phone: "0123456789",

    recruitmentCampaign: "Fresher Backend Java 2025",
    appliedPosition: "Backend Developer Java Spring Boot",
    jobPost: "Tuyển Fresher Backend Hà Nội",
    recruitmentStage: "CV",
    rating: "★★★",

    applyDate: "24/10/2025",
    candidateSource: "LinkedIn",

    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH CNTT",
    major: "Công nghệ thông tin",
    lastCompany: "—",

    hrOwner: "Nguyễn HR A",
    department: "Khối Công nghệ",
    profileMatching: "Phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Ứng tuyển online",
    talentPool: "Có",
    tags: "Java, Backend",

    candidateStatus: "Đang xử lý",
    gender: "Nam",
    dateOfBirth: "1998",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "24/10/2025",
    offerStatus: "Chưa gửi",

    note: "Ứng viên tiềm năng, cần follow-up",
  },
  {
    id: 2,
    fullname: "Nguyễn Minh Phong",
    email: "minhphong.tester@gmail.com",
    phone: "0988777666",

    recruitmentCampaign: "QC / Tester 2025",
    appliedPosition: "QC / Tester",
    jobPost: "QC / Tester Hà Nội",
    recruitmentStage: "Đã tuyển",
    rating: "★",

    applyDate: "18/07/2025",
    candidateSource: "Website",

    educationLevel: "Cao đẳng",
    educationPlace: "CĐ CNTT",
    major: "Kiểm thử phần mềm",
    lastCompany: "—",

    hrOwner: "Trần HR B",
    department: "Khối QA",
    profileMatching: "Rất phù hợp",
    workingArea: "Hồ Chí Minh",

    referrer: "",
    receiveMethod: "Website tuyển dụng",
    talentPool: "Không",
    tags: "Tester, Manual",

    candidateStatus: "Đã onboard",
    gender: "Nam",
    dateOfBirth: "1997",
    address: "TP. Hồ Chí Minh",

    rejectReason: "",
    collaborator: "",
    receiveDate: "18/07/2025",
    offerStatus: "Đã nhận việc",

    note: "Đã ký HĐLĐ",
  },
  {
    id: 3,
    fullname: "Trần Minh Giang",
    email: "minhphong.tester@gmail.com",
    phone: "0988777666",

    recruitmentCampaign: "QC / Tester 2025",
    appliedPosition: "QC / Tester",
    jobPost: "QC / Tester Hà Nội",
    recruitmentStage: "Đã tuyển",
    rating: "★",

    applyDate: "18/07/2025",
    candidateSource: "Website",

    educationLevel: "Cao đẳng",
    educationPlace: "CĐ CNTT",
    major: "Kiểm thử phần mềm",
    lastCompany: "—",

    hrOwner: "Trần HR B",
    department: "Khối QA",
    profileMatching: "Rất phù hợp",
    workingArea: "Hồ Chí Minh",

    referrer: "",
    receiveMethod: "Website tuyển dụng",
    talentPool: "Không",
    tags: "Tester, Manual",

    candidateStatus: "Đã onboard",
    gender: "Nam",
    dateOfBirth: "1997",
    address: "TP. Hồ Chí Minh",

    rejectReason: "",
    collaborator: "",
    receiveDate: "18/07/2025",
    offerStatus: "Đã nhận việc",

    note: "Đã ký HĐLĐ",
  },
  {
    id: 4,
    fullname: "Phạm Thị Lan",
    email: "phamthilan@gmail.com",
    phone: "0911223344",

    recruitmentCampaign: "Fresher Frontend 2025",
    appliedPosition: "Frontend Developer React",
    jobPost: "Tuyển Fresher Frontend Hà Nội",
    recruitmentStage: "CV",
    rating: "★★",

    applyDate: "01/11/2025",
    candidateSource: "Facebook",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH Bách Khoa Hà Nội",
    major: "Công nghệ thông tin",
    lastCompany: "—",

    hrOwner: "Nguyễn HR C",
    department: "Khối Công nghệ",
    profileMatching: "Phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Ứng tuyển online",
    talentPool: "Có",
    tags: "React, Frontend",

    candidateStatus: "Đang xử lý",
    gender: "Nữ",
    dateOfBirth: "2000",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "01/11/2025",
    offerStatus: "Chưa gửi",

    note: "Ứng viên triển vọng",
  },
  {
    id: 5,
    fullname: "Lê Văn Dũng",
    email: "levandung@gmail.com",
    phone: "0933445566",

    recruitmentCampaign: "Backend Python 2025",
    appliedPosition: "Backend Developer Python",
    jobPost: "Tuyển Backend Python Hà Nội",
    recruitmentStage: "Phỏng vấn",
    rating: "★★★",

    applyDate: "28/10/2025",
    candidateSource: "LinkedIn",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH CNTT",
    major: "Công nghệ phần mềm",
    lastCompany: "Công ty ABC",

    hrOwner: "Trần HR D",
    department: "Khối Công nghệ",
    profileMatching: "Rất phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Ứng tuyển online",
    talentPool: "Có",
    tags: "Python, Backend",

    candidateStatus: "Đang xử lý",
    gender: "Nam",
    dateOfBirth: "1999",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "28/10/2025",
    offerStatus: "Chưa gửi",

    note: "Kinh nghiệm dự án tốt",
  },
  {
    id: 6,
    fullname: "Ngô Thị Mai",
    email: "ngothimai@gmail.com",
    phone: "0977889900",

    recruitmentCampaign: "UI/UX Designer 2025",
    appliedPosition: "UI/UX Designer",
    jobPost: "Tuyển UI/UX Hà Nội",
    recruitmentStage: "CV",
    rating: "★★",

    applyDate: "30/10/2025",
    candidateSource: "Website",
    educationLevel: "Đại học Mỹ thuật",
    educationPlace: "ĐH Mỹ thuật Việt Nam",
    major: "Thiết kế đồ họa",
    lastCompany: "Công ty XYZ",

    hrOwner: "Nguyễn HR E",
    department: "Khối Design",
    profileMatching: "Phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Website tuyển dụng",
    talentPool: "Có",
    tags: "UI, UX, Figma",

    candidateStatus: "Đang xử lý",
    gender: "Nữ",
    dateOfBirth: "2001",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "30/10/2025",
    offerStatus: "Chưa gửi",

    note: "Có portfolio ấn tượng",
  },
  {
    id: 7,
    fullname: "Trương Minh Tuấn",
    email: "truongminhtuan@gmail.com",
    phone: "0966554433",

    recruitmentCampaign: "DevOps 2025",
    appliedPosition: "DevOps Engineer",
    jobPost: "Tuyển DevOps Hà Nội",
    recruitmentStage: "Phỏng vấn",
    rating: "★★★",

    applyDate: "02/11/2025",
    candidateSource: "LinkedIn",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH FPT",
    major: "Công nghệ thông tin",
    lastCompany: "Công ty DEF",

    hrOwner: "Trần HR F",
    department: "Khối Công nghệ",
    profileMatching: "Rất phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Ứng tuyển online",
    talentPool: "Có",
    tags: "DevOps, AWS, Docker",

    candidateStatus: "Đang xử lý",
    gender: "Nam",
    dateOfBirth: "1998",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "02/11/2025",
    offerStatus: "Chưa gửi",

    note: "Kỹ năng tốt",
  },
  {
    id: 8,
   fullname: "Phan Thị Hồng",
    email: "phanthihong@gmail.com",
    phone: "0944332211",

    recruitmentCampaign: "Marketing 2025",
    appliedPosition: "Marketing Executive",
    jobPost: "Tuyển Marketing Hà Nội",
    recruitmentStage: "CV",
    rating: "★★",

    applyDate: "03/11/2025",
    candidateSource: "Facebook",
    educationLevel: "Đại học Kinh tế",
    educationPlace: "ĐH Kinh tế Quốc dân",
    major: "Marketing",
    lastCompany: "Công ty GHI",

    hrOwner: "Nguyễn HR G",
    department: "Khối Marketing",
    profileMatching: "Phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Website tuyển dụng",
    talentPool: "Không",
    tags: "Marketing, Content",

    candidateStatus: "Đang xử lý",
    gender: "Nữ",
    dateOfBirth: "1999",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "03/11/2025",
    offerStatus: "Chưa gửi",

    note: "Có kinh nghiệm thực tập",
  },
  {
    id: 9,
    fullname: "Võ Văn Hải",
    email: "vovanhai@gmail.com",
    phone: "0912345678",

    recruitmentCampaign: "Frontend 2025",
    appliedPosition: "Frontend Developer Vue.js",
    jobPost: "Tuyển Frontend Hà Nội",
    recruitmentStage: "CV",
    rating: "★★",

    applyDate: "04/11/2025",
    candidateSource: "LinkedIn",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH Bách Khoa",
    major: "Công nghệ thông tin",
    lastCompany: "Công ty JKL",

    hrOwner: "Nguyễn HR H",
    department: "Khối Công nghệ",
    profileMatching: "Phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Ứng tuyển online",
    talentPool: "Có",
    tags: "Vue, Frontend",

    candidateStatus: "Đang xử lý",
    gender: "Nam",
    dateOfBirth: "1999",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "04/11/2025",
    offerStatus: "Chưa gửi",

    note: "Ứng viên mới tốt nghiệp",
  },
  {
    id: 10,
   fullname: "Trần Thị Hạnh",
    email: "tranthihanh@gmail.com",
    phone: "0922334455",

    recruitmentCampaign: "QA 2025",
    appliedPosition: "Tester Automation",
    jobPost: "Tuyển QA Hà Nội",
    recruitmentStage: "Phỏng vấn",
    rating: "★★★",

    applyDate: "05/11/2025",
    candidateSource: "Website",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH CNTT",
    major: "Kiểm thử phần mềm",
    lastCompany: "Công ty MNO",

    hrOwner: "Trần HR I",
    department: "Khối QA",
    profileMatching: "Rất phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Website tuyển dụng",
    talentPool: "Có",
    tags: "Automation, Selenium",

    candidateStatus: "Đang xử lý",
    gender: "Nữ",
    dateOfBirth: "2000",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "05/11/2025",
    offerStatus: "Chưa gửi",

    note: "Có kinh nghiệm thực tập Automation",
  },
  {
    id: 11,
    fullname: "Nguyễn Văn Khoa",
    email: "nguyenvankhoa@gmail.com",
    phone: "0933556677",

    recruitmentCampaign: "Backend 2025",
    appliedPosition: "Backend Developer Node.js",
    jobPost: "Tuyển Backend Hà Nội",
    recruitmentStage: "CV",
    rating: "★★",

    applyDate: "06/11/2025",
    candidateSource: "LinkedIn",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH FPT",
    major: "Công nghệ phần mềm",
    lastCompany: "Công ty PQR",

    hrOwner: "Nguyễn HR J",
    department: "Khối Công nghệ",
    profileMatching: "Phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Ứng tuyển online",
    talentPool: "Có",
    tags: "Node.js, Backend",

    candidateStatus: "Đang xử lý",
    gender: "Nam",
    dateOfBirth: "1998",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "06/11/2025",
    offerStatus: "Chưa gửi",

    note: "Có dự án thực tế",
  },
  {
    id: 12,
   fullname: "Phạm Minh Quân",
    email: "phamminhquan@gmail.com",
    phone: "0944556677",

    recruitmentCampaign: "Fullstack 2025",
    appliedPosition: "Fullstack Developer",
    jobPost: "Tuyển Fullstack Hà Nội",
    recruitmentStage: "CV",
    rating: "★★★",

    applyDate: "07/11/2025",
    candidateSource: "Facebook",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH Bách Khoa",
    major: "Công nghệ thông tin",
    lastCompany: "Công ty STU",

    hrOwner: "Trần HR K",
    department: "Khối Công nghệ",
    profileMatching: "Rất phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Ứng tuyển online",
    talentPool: "Có",
    tags: "React, Node.js, Fullstack",

    candidateStatus: "Đang xử lý",
    gender: "Nam",
    dateOfBirth: "1997",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "07/11/2025",
    offerStatus: "Chưa gửi",

    note: "Có kinh nghiệm dự án Fullstack",
  },
   {
    id: 13,
    fullname: "Lê Thị Bích",
    email: "lethibich@gmail.com",
    phone: "0955667788",

    recruitmentCampaign: "Designer 2025",
    appliedPosition: "Graphic Designer",
    jobPost: "Tuyển Designer Hà Nội",
    recruitmentStage: "CV",
    rating: "★★",

    applyDate: "08/11/2025",
    candidateSource: "Website",
    educationLevel: "Đại học Mỹ thuật",
    educationPlace: "ĐH Mỹ thuật Việt Nam",
    major: "Thiết kế đồ họa",
    lastCompany: "Công ty VWX",

    hrOwner: "Nguyễn HR L",
    department: "Khối Design",
    profileMatching: "Phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Website tuyển dụng",
    talentPool: "Có",
    tags: "Photoshop, Illustrator",

    candidateStatus: "Đang xử lý",
    gender: "Nữ",
    dateOfBirth: "2000",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "08/11/2025",
    offerStatus: "Chưa gửi",

    note: "Portfolio tốt",
  },
  {
    id: 14,
    fullname: "Đỗ Văn Minh",
    email: "dovanminh@gmail.com",
    phone: "0966778899",

    recruitmentCampaign: "DevOps 2025",
    appliedPosition: "DevOps Engineer",
    jobPost: "Tuyển DevOps Hà Nội",
    recruitmentStage: "Phỏng vấn",
    rating: "★★★",

    applyDate: "09/11/2025",
    candidateSource: "LinkedIn",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH FPT",
    major: "Công nghệ thông tin",
    lastCompany: "Công ty YZA",

    hrOwner: "Trần HR M",
    department: "Khối Công nghệ",
    profileMatching: "Rất phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Ứng tuyển online",
    talentPool: "Có",
    tags: "AWS, Docker, Kubernetes",

    candidateStatus: "Đang xử lý",
    gender: "Nam",
    dateOfBirth: "1998",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "09/11/2025",
    offerStatus: "Chưa gửi",

    note: "Có kỹ năng DevOps tốt",
  },
   {
    id: 15,
    fullname: "Nguyễn Thị Thanh",
    email: "nguyenthithanh@gmail.com",
    phone: "0977881122",

    recruitmentCampaign: "Marketing 2025",
    appliedPosition: "Marketing Executive",
    jobPost: "Tuyển Marketing Hà Nội",
    recruitmentStage: "CV",
    rating: "★★",

    applyDate: "10/11/2025",
    candidateSource: "Facebook",
    educationLevel: "Đại học Kinh tế",
    educationPlace: "ĐH Kinh tế Quốc dân",
    major: "Marketing",
    lastCompany: "Công ty BCD",

    hrOwner: "Nguyễn HR N",
    department: "Khối Marketing",
    profileMatching: "Phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Website tuyển dụng",
    talentPool: "Không",
    tags: "Marketing, Content, SEO",

    candidateStatus: "Đang xử lý",
    gender: "Nữ",
    dateOfBirth: "1999",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "10/11/2025",
    offerStatus: "Chưa gửi",

    note: "Có kinh nghiệm thực tập",
  },
  {
    id: 16,
    fullname: "Phạm Quang Huy",
    email: "phamquanghuy@gmail.com",
    phone: "0988991122",

    recruitmentCampaign: "Backend 2025",
    appliedPosition: "Backend Developer Java",
    jobPost: "Tuyển Backend Hà Nội",
    recruitmentStage: "CV",
    rating: "★★",

    applyDate: "11/11/2025",
    candidateSource: "LinkedIn",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH Bách Khoa",
    major: "Công nghệ phần mềm",
    lastCompany: "Công ty EFG",

    hrOwner: "Trần HR O",
    department: "Khối Công nghệ",
    profileMatching: "Phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Ứng tuyển online",
    talentPool: "Có",
    tags: "Java, Spring Boot, Backend",

    candidateStatus: "Đang xử lý",
    gender: "Nam",
    dateOfBirth: "1998",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "11/11/2025",
    offerStatus: "Chưa gửi",

    note: "Ứng viên tiềm năng",
  },
  {
    id: 17,
    fullname: "Trần Thị Ngọc",
    email: "tranthingoc@gmail.com",
    phone: "0911223345",

    recruitmentCampaign: "Frontend 2025",
    appliedPosition: "Frontend Developer Angular",
    jobPost: "Tuyển Frontend Hà Nội",
    recruitmentStage: "CV",
    rating: "★★",

    applyDate: "12/11/2025",
    candidateSource: "Website",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH FPT",
    major: "Công nghệ thông tin",
    lastCompany: "Công ty HIJ",

    hrOwner: "Nguyễn HR P",
    department: "Khối Công nghệ",
    profileMatching: "Phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Website tuyển dụng",
    talentPool: "Có",
    tags: "Angular, Frontend",

    candidateStatus: "Đang xử lý",
    gender: "Nữ",
    dateOfBirth: "2000",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "12/11/2025",
    offerStatus: "Chưa gửi",

    note: "Có kiến thức tốt về Angular",
  },
  {
    id: 18,
    fullname: "Lý Minh Tuấn",
    email: "lyminhtuan@gmail.com",
    phone: "0922334456",

    recruitmentCampaign: "Fullstack 2025",
    appliedPosition: "Fullstack Developer",
    jobPost: "Tuyển Fullstack Hà Nội",
    recruitmentStage: "Phỏng vấn",
    rating: "★★★",

    applyDate: "13/11/2025",
    candidateSource: "LinkedIn",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH Bách Khoa",
    major: "Công nghệ thông tin",
    lastCompany: "Công ty KLM",

    hrOwner: "Trần HR Q",
    department: "Khối Công nghệ",
    profileMatching: "Rất phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Ứng tuyển online",
    talentPool: "Có",
    tags: "React, Node.js, Fullstack",

    candidateStatus: "Đang xử lý",
    gender: "Nam",
    dateOfBirth: "1997",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "13/11/2025",
    offerStatus: "Chưa gửi",

    note: "Kinh nghiệm dự án Fullstack",
  },
  {
    id: 19,
    fullname: "Phạm Thị Nhung",
    email: "phamthinung@gmail.com",
    phone: "0933445567",

    recruitmentCampaign: "UI/UX 2025",
    appliedPosition: "UI/UX Designer",
    jobPost: "Tuyển UI/UX Hà Nội",
    recruitmentStage: "CV",
    rating: "★★",

    applyDate: "14/11/2025",
    candidateSource: "Facebook",
    educationLevel: "Đại học Mỹ thuật",
    educationPlace: "ĐH Mỹ thuật Việt Nam",
    major: "Thiết kế đồ họa",
    lastCompany: "Công ty NOP",

    hrOwner: "Nguyễn HR R",
    department: "Khối Design",
    profileMatching: "Phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Website tuyển dụng",
    talentPool: "Có",
    tags: "Figma, Adobe XD",

    candidateStatus: "Đang xử lý",
    gender: "Nữ",
    dateOfBirth: "2000",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "14/11/2025",
    offerStatus: "Chưa gửi",

    note: "Portfolio tốt",
  },
  {
    id: 20,
    fullname: "Nguyễn Hữu Phúc",
    email: "nguyenhuuphuc@gmail.com",
    phone: "0944556678",

    recruitmentCampaign: "Backend 2025",
    appliedPosition: "Backend Developer Python",
    jobPost: "Tuyển Backend Hà Nội",
    recruitmentStage: "CV",
    rating: "★★★",

    applyDate: "15/11/2025",
    candidateSource: "LinkedIn",
    educationLevel: "Đại học CNTT",
    educationPlace: "ĐH FPT",
    major: "Công nghệ thông tin",
    lastCompany: "Công ty QRS",

    hrOwner: "Trần HR S",
    department: "Khối Công nghệ",
    profileMatching: "Rất phù hợp",
    workingArea: "Hà Nội",

    referrer: "",
    receiveMethod: "Ứng tuyển online",
    talentPool: "Có",
    tags: "Python, Django, Backend",

    candidateStatus: "Đang xử lý",
    gender: "Nam",
    dateOfBirth: "1998",
    address: "Hà Nội",

    rejectReason: "",
    collaborator: "",
    receiveDate: "15/11/2025",
    offerStatus: "Chưa gửi",

    note: "Có kinh nghiệm dự án Python",
  },
  
];

export default DEFAULT_CANDIDATES;
