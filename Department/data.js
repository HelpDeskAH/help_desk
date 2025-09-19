// University Departments Data
const departmentsData = {
    categories: [
        {
            id: 'administration',
            name: 'Administration',
            icon: 'Building2',
            color: 'bg-blue-500',
            description: 'University administrative offices and management',
            departments: [
                {
                    id: 'vc-office',
                    name: 'Vice Chancellor Office',
                    icon: 'Crown',
                    color: 'bg-blue-600',
                    description: 'The highest administrative office overseeing all university operations',
                    faculty: [
                        {
                            id: 'vc-001',
                            name: 'Dr. Rajesh Kumar',
                            designation: 'Vice Chancellor',
                            department: 'Vice Chancellor Office',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543210',
                            email: 'vc@cvrubihar.ac.in',
                            achievements: 'Leading the university with 25+ years of academic excellence. Published 100+ research papers in international journals. Former Dean of Engineering at prestigious institutions.',
                            specialization: 'Educational Leadership, Strategic Planning',
                            experience: '25+ years',
                            education: 'Ph.D. in Engineering, M.Tech, B.Tech',
                            location: {
                                building: 'Administrative Block',
                                floor: '3rd Floor, Room 301',
                                coordinates: { lat: 28.6139, lng: 77.2090 }
                            }
                        }
                    ]
                },
                {
                    id: 'registrar',
                    name: 'Registrar Office',
                    icon: 'FileText',
                    color: 'bg-blue-500',
                    description: 'Academic records, admissions, and student registration services',
                    faculty: [
                        {
                            id: 'reg-001',
                            name: 'Prof. Sunita Sharma',
                            designation: 'Registrar',
                            department: 'Registrar Office',
                            photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543211',
                            email: 'registrar@cvrubihar.ac.in',
                            achievements: 'Expert in academic administration with 20+ years experience. Streamlined university admission processes and implemented digital record management.',
                            specialization: 'Academic Administration, Student Services',
                            experience: '20+ years',
                            education: 'Ph.D. in Education, M.A. in Public Administration',
                            location: {
                                building: 'Administrative Block',
                                floor: '2nd Floor, Room 201',
                                coordinates: { lat: 28.6140, lng: 77.2091 }
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 'engineering',
            name: 'Faculty of Engineering & Technology',
            icon: 'Cpu',
            color: 'bg-purple-500',
            description: 'Engineering and technology departments with cutting-edge research',
            departments: [
                {
                    id: 'cse',
                    name: 'Computer Science & Engineering',
                    icon: 'Monitor',
                    color: 'bg-purple-600',
                    description: 'Leading department in computer science education and research',
                    faculty: [
                        {
                            id: 'cse-001',
                            name: 'Dr. Amit Patel',
                            designation: 'Head of Department',
                            department: 'Computer Science & Engineering',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543220',
                            email: 'hod.cse@cvrubihar.ac.in',
                            achievements: 'AI/ML researcher with 50+ publications and 3 patents in computer science. Led multiple industry-academia collaboration projects worth ₹2 crores.',
                            specialization: 'Artificial Intelligence, Machine Learning, Data Science',
                            experience: '15+ years',
                            education: 'Ph.D. in Computer Science, M.Tech CSE, B.Tech CSE',
                            location: {
                                building: 'Engineering Block A',
                                floor: '1st Floor, Room 101',
                                coordinates: { lat: 28.6141, lng: 77.2092 }
                            }
                        },
                        {
                            id: 'cse-002',
                            name: 'Dr. Neha Agarwal',
                            designation: 'Associate Professor',
                            department: 'Computer Science & Engineering',
                            photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543225',
                            email: 'neha.agarwal@cvrubihar.ac.in',
                            achievements: 'Cybersecurity expert with 30+ research papers. Consultant for government cybersecurity initiatives.',
                            specialization: 'Cybersecurity, Network Security, Blockchain',
                            experience: '12+ years',
                            education: 'Ph.D. in Cybersecurity, M.Tech IT, B.Tech CSE',
                            location: {
                                building: 'Engineering Block A',
                                floor: '1st Floor, Room 105',
                                coordinates: { lat: 28.6141, lng: 77.2092 }
                            }
                        }
                    ]
                },
                {
                    id: 'ece',
                    name: 'Electronics & Communication Engineering',
                    icon: 'Radio',
                    color: 'bg-purple-500',
                    description: 'Specializing in electronics and communication technologies',
                    faculty: [
                        {
                            id: 'ece-001',
                            name: 'Dr. Priya Singh',
                            designation: 'Head of Department',
                            department: 'Electronics & Communication Engineering',
                            photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543221',
                            email: 'hod.ece@cvrubihar.ac.in',
                            achievements: 'Expert in wireless communication with 40+ research papers. Developed innovative 5G communication protocols.',
                            specialization: 'Wireless Communication, 5G Technology, Signal Processing',
                            experience: '18+ years',
                            education: 'Ph.D. in Electronics, M.Tech ECE, B.Tech ECE',
                            location: {
                                building: 'Engineering Block A',
                                floor: '2nd Floor, Room 201',
                                coordinates: { lat: 28.6142, lng: 77.2093 }
                            }
                        }
                    ]
                },
                {
                    id: 'mechanical',
                    name: 'Mechanical Engineering',
                    icon: 'Cog',
                    color: 'bg-purple-400',
                    description: 'Excellence in mechanical engineering education and research',
                    faculty: [
                        {
                            id: 'mech-001',
                            name: 'Prof. Vikram Gupta',
                            designation: 'Head of Department',
                            department: 'Mechanical Engineering',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543222',
                            email: 'hod.me@cvrubihar.ac.in',
                            achievements: 'Thermal engineering specialist with 30+ years industry experience. Holds 5 patents in renewable energy systems.',
                            specialization: 'Thermal Engineering, Renewable Energy, Manufacturing',
                            experience: '30+ years',
                            education: 'Ph.D. in Mechanical Engineering, M.Tech Thermal, B.Tech Mechanical',
                            location: {
                                building: 'Engineering Block B',
                                floor: '1st Floor, Room 101',
                                coordinates: { lat: 28.6143, lng: 77.2094 }
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 'science',
            name: 'Faculty of Science',
            icon: 'FlaskConical',
            color: 'bg-green-500',
            description: 'Pure sciences with advanced research facilities',
            departments: [
                {
                    id: 'physics',
                    name: 'Department of Physics',
                    icon: 'Atom',
                    color: 'bg-green-600',
                    description: 'Advanced physics research and undergraduate education',
                    faculty: [
                        {
                            id: 'phy-001',
                            name: 'Dr. Kiran Joshi',
                            designation: 'Head of Department',
                            department: 'Department of Physics',
                            photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543230',
                            email: 'hod.physics@cvrubihar.ac.in',
                            achievements: 'Quantum physics researcher with international recognition. Published in Nature Physics and received national science award.',
                            specialization: 'Quantum Physics, Condensed Matter Physics, Nanotechnology',
                            experience: '22+ years',
                            education: 'Ph.D. in Physics, M.Sc. Physics, B.Sc. Physics',
                            location: {
                                building: 'Science Block',
                                floor: '2nd Floor, Room 201',
                                coordinates: { lat: 28.6144, lng: 77.2095 }
                            }
                        }
                    ]
                },
                {
                    id: 'chemistry',
                    name: 'Department of Chemistry',
                    icon: 'TestTube',
                    color: 'bg-green-500',
                    description: 'Comprehensive chemistry education and research programs',
                    faculty: [
                        {
                            id: 'chem-001',
                            name: 'Prof. Meera Reddy',
                            designation: 'Head of Department',
                            department: 'Department of Chemistry',
                            photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543231',
                            email: 'hod.chemistry@cvrubihar.ac.in',
                            achievements: 'Organic chemistry expert with 25+ years teaching experience. Developed eco-friendly synthesis methods.',
                            specialization: 'Organic Chemistry, Green Chemistry, Drug Design',
                            experience: '25+ years',
                            education: 'Ph.D. in Chemistry, M.Sc. Organic Chemistry, B.Sc. Chemistry',
                            location: {
                                building: 'Science Block',
                                floor: '1st Floor, Room 101',
                                coordinates: { lat: 28.6145, lng: 77.2096 }
                            }
                        }
                    ]
                },
                {
                    id: 'mathematics',
                    name: 'Department of Mathematics',
                    icon: 'Calculator',
                    color: 'bg-green-400',
                    description: 'Pure and applied mathematics with computational focus',
                    faculty: [
                        {
                            id: 'math-001',
                            name: 'Dr. Suresh Yadav',
                            designation: 'Head of Department',
                            department: 'Department of Mathematics',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543232',
                            email: 'hod.math@cvrubihar.ac.in',
                            achievements: 'Applied mathematics researcher specializing in numerical analysis. Published 60+ papers in international journals.',
                            specialization: 'Numerical Analysis, Computational Mathematics, Statistics',
                            experience: '20+ years',
                            education: 'Ph.D. in Mathematics, M.Sc. Applied Mathematics, B.Sc. Mathematics',
                            location: {
                                building: 'Science Block',
                                floor: '3rd Floor, Room 301',
                                coordinates: { lat: 28.6146, lng: 77.2097 }
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 'arts',
            name: 'Faculty of Arts & Humanities',
            icon: 'Palette',
            color: 'bg-blue-500',
            description: 'Creative arts, literature, and humanities with cultural heritage focus',
            departments: [
                {
                    id: 'english',
                    name: 'Department of English Literature',
                    icon: 'BookOpen',
                    color: 'bg-blue-600',
                    description: 'Literature, language studies, and creative writing programs',
                    faculty: [
                        {
                            id: 'eng-001',
                            name: 'Dr. Priyanka Sharma',
                            designation: 'Head of Department',
                            department: 'Department of English Literature',
                            photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543260',
                            email: 'hod.english@cvrubihar.ac.in',
                            achievements: 'Renowned scholar in contemporary literature with 35+ publications. Recipient of National Award for Literary Excellence. Published 3 books on Indian English Literature.',
                            specialization: 'Contemporary Literature, Indian English Literature, Creative Writing',
                            experience: '18+ years',
                            education: 'Ph.D. in English Literature, M.A. English, B.A. English Honors',
                            location: {
                                building: 'Arts Block',
                                floor: '1st Floor, Room 101',
                                coordinates: { lat: 28.6150, lng: 77.2101 }
                            }
                        },
                        {
                            id: 'eng-002',
                            name: 'Prof. Arjun Mishra',
                            designation: 'Professor',
                            department: 'Department of English Literature',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543261',
                            email: 'arjun.mishra@cvrubihar.ac.in',
                            achievements: 'Shakespeare scholar with international recognition. Conducted workshops at Oxford University. Published critical analysis of Indian adaptations of Shakespeare.',
                            specialization: 'Shakespearean Studies, Comparative Literature, Drama',
                            experience: '22+ years',
                            education: 'Ph.D. in English Literature, M.A. English Literature, B.A. English',
                            location: {
                                building: 'Arts Block',
                                floor: '1st Floor, Room 103',
                                coordinates: { lat: 28.6150, lng: 77.2101 }
                            }
                        },
                        {
                            id: 'eng-003',
                            name: 'Prof. Arjun Mishra',
                            designation: 'Professor',
                            department: 'Department of English Literature',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543261',
                            email: 'arjun.mishra@cvrubihar.ac.in',
                            achievements: 'Shakespeare scholar with international recognition. Conducted workshops at Oxford University. Published critical analysis of Indian adaptations of Shakespeare.',
                            specialization: 'Shakespearean Studies, Comparative Literature, Drama',
                            experience: '22+ years',
                            education: 'Ph.D. in English Literature, M.A. English Literature, B.A. English',
                            location: {
                                building: 'Arts Block',
                                floor: '1st Floor, Room 103',
                                coordinates: { lat: 28.6150, lng: 77.2101 }
                            }
                        },
                        {
                            id: 'eng-004',
                            name: 'Prof. Arjun Mishra',
                            designation: 'Professor',
                            department: 'Department of English Literature',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543261',
                            email: 'arjun.mishra@cvrubihar.ac.in',
                            achievements: 'Shakespeare scholar with international recognition. Conducted workshops at Oxford University. Published critical analysis of Indian adaptations of Shakespeare.',
                            specialization: 'Shakespearean Studies, Comparative Literature, Drama',
                            experience: '22+ years',
                            education: 'Ph.D. in English Literature, M.A. English Literature, B.A. English',
                            location: {
                                building: 'Arts Block',
                                floor: '1st Floor, Room 103',
                                coordinates: { lat: 28.6150, lng: 77.2101 }
                            }
                        }
                    ]
                },
                {
                    id: 'history',
                    name: 'Department of History',
                    icon: 'Scroll',
                    color: 'bg-blue-500',
                    description: 'Ancient, medieval, and modern history with archaeological research',
                    faculty: [
                        {
                            id: 'hist-001',
                            name: 'Dr. Rajesh Kumar Singh',
                            designation: 'Head of Department',
                            department: 'Department of History',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543262',
                            email: 'hod.history@cvrubihar.ac.in',
                            achievements: 'Expert in ancient Indian history and archaeology. Led excavation projects in Bihar and Uttar Pradesh. Published 25+ research papers on Mauryan Empire.',
                            specialization: 'Ancient Indian History, Archaeology, Mauryan Studies',
                            experience: '20+ years',
                            education: 'Ph.D. in Ancient History, M.A. History, B.A. History',
                            location: {
                                building: 'Arts Block',
                                floor: '2nd Floor, Room 201',
                                coordinates: { lat: 28.6151, lng: 77.2102 }
                            }
                        },
                        {
                            id: 'hist-002',
                            name: 'Dr. Kavita Devi',
                            designation: 'Associate Professor',
                            department: 'Department of History',
                            photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543263',
                            email: 'kavita.devi@cvrubihar.ac.in',
                            achievements: 'Specialist in medieval Indian history and women studies. Authored 2 books on medieval Indian society. Recipient of UGC Research Award.',
                            specialization: 'Medieval History, Women Studies, Social History',
                            experience: '15+ years',
                            education: 'Ph.D. in Medieval History, M.A. History, B.A. History',
                            location: {
                                building: 'Arts Block',
                                floor: '2nd Floor, Room 203',
                                coordinates: { lat: 28.6151, lng: 77.2102 }
                            }
                        }
                    ]
                },
                {
                    id: 'fine-arts',
                    name: 'Department of Fine Arts',
                    icon: 'Paintbrush',
                    color: 'bg-blue-500',
                    description: 'Visual arts, painting, sculpture, and digital art programs',
                    faculty: [
                        {
                            id: 'art-001',
                            name: 'Prof. Anita Kumari',
                            designation: 'Head of Department',
                            department: 'Department of Fine Arts',
                            photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543264',
                            email: 'hod.fineart@cvrubihar.ac.in',
                            achievements: 'Renowned artist with 50+ exhibitions nationwide. Works displayed in National Gallery. Recipient of Lalit Kala Akademi Award for outstanding contribution to Indian art.',
                            specialization: 'Contemporary Painting, Traditional Art, Art Therapy',
                            experience: '25+ years',
                            education: 'Ph.D. in Fine Arts, M.F.A. Painting, B.F.A. Applied Arts',
                            location: {
                                building: 'Arts Block',
                                floor: '3rd Floor, Room 301',
                                coordinates: { lat: 28.6152, lng: 77.2103 }
                            }
                        },
                        {
                            id: 'art-002',
                            name: 'Dr. Manoj Tiwari',
                            designation: 'Associate Professor',
                            department: 'Department of Fine Arts',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543265',
                            email: 'manoj.tiwari@cvrubihar.ac.in',
                            achievements: 'Sculptor and digital artist with expertise in 3D modeling. Created public art installations in Delhi and Mumbai. Pioneer in digital art education in Bihar.',
                            specialization: 'Sculpture, Digital Art, 3D Modeling',
                            experience: '16+ years',
                            education: 'Ph.D. in Sculpture, M.F.A. Sculpture, B.F.A. Fine Arts',
                            location: {
                                building: 'Arts Block',
                                floor: '3rd Floor, Room 305',
                                coordinates: { lat: 28.6152, lng: 77.2103 }
                            }
                        }
                    ]
                },
                {
                    id: 'music',
                    name: 'Department of Music',
                    icon: 'Music2',
                    color: 'bg-blue-600',
                    description: 'Classical and contemporary music education with performance opportunities',
                    faculty: [
                        {
                            id: 'music-001',
                            name: 'Pandit Ramesh Chandra',
                            designation: 'Head of Department',
                            department: 'Department of Music',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543266',
                            email: 'hod.music@cvrubihar.ac.in',
                            achievements: 'Master of Indian classical music with 40+ years of experience. Performed at major festivals across India. Trained 200+ students in classical music. Recipient of Sangeet Natak Akademi Award.',
                            specialization: 'Indian Classical Music, Tabla, Hindustani Vocal',
                            experience: '40+ years',
                            education: 'Ph.D. in Music, M.A. Music, Sangeet Prabhakar',
                            location: {
                                building: 'Arts Block',
                                floor: '1st Floor, Room 110',
                                coordinates: { lat: 28.6153, lng: 77.2104 }
                            }
                        },
                        {
                            id: 'music-002',
                            name: 'Dr. Sushma Rani',
                            designation: 'Associate Professor',
                            department: 'Department of Music',
                            photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543267',
                            email: 'sushma.rani@cvrubihar.ac.in',
                            achievements: 'Accomplished vocalist and music therapist. Conducted research on music therapy applications. Published 15+ papers on therapeutic benefits of Indian classical music.',
                            specialization: 'Vocal Music, Music Therapy, Ethnomusicology',
                            experience: '18+ years',
                            education: 'Ph.D. in Music Therapy, M.A. Music, B.A. Music',
                            location: {
                                building: 'Arts Block',
                                floor: '1st Floor, Room 112',
                                coordinates: { lat: 28.6153, lng: 77.2104 }
                            }
                        }
                    ]
                },
                {
                    id: 'philosophy',
                    name: 'Department of Philosophy',
                    icon: 'Lightbulb',
                    color: 'bg-blue-500',
                    description: 'Eastern and Western philosophy with focus on ethics and logic',
                    faculty: [
                        {
                            id: 'phil-001',
                            name: 'Dr. Vishnu Prasad',
                            designation: 'Head of Department',
                            department: 'Department of Philosophy',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543268',
                            email: 'hod.philosophy@cvrubihar.ac.in',
                            achievements: 'Renowned philosopher specializing in Indian philosophy and ethics. Published 8 books on Vedantic philosophy. Visiting professor at Universities in Europe and USA.',
                            specialization: 'Indian Philosophy, Ethics, Vedanta',
                            experience: '28+ years',
                            education: 'Ph.D. in Philosophy, M.A. Philosophy, B.A. Philosophy',
                            location: {
                                building: 'Arts Block',
                                floor: '2nd Floor, Room 210',
                                coordinates: { lat: 28.6154, lng: 77.2105 }
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 'commerce',
            name: 'Faculty of Commerce & Management',
            icon: 'TrendingUp',
            color: 'bg-orange-500',
            description: 'Business education and management studies',
            departments: [
                {
                    id: 'bba',
                    name: 'BBA Department',
                    icon: 'Briefcase',
                    color: 'bg-orange-600',
                    description: 'Preparing future business leaders with practical knowledge',
                    faculty: [
                        {
                            id: 'bba-001',
                            name: 'Dr. Rohit Malhotra',
                            designation: 'Head of Department',
                            department: 'BBA Department',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543240',
                            email: 'hod.bba@cvrubihar.ac.in',
                            achievements: 'Business management expert with MBA from IIM and industry experience. Former VP at Fortune 500 company.',
                            specialization: 'Strategic Management, Marketing, Entrepreneurship',
                            experience: '16+ years',
                            education: 'Ph.D. in Management, MBA from IIM, B.Com',
                            location: {
                                building: 'Commerce Block',
                                floor: '1st Floor, Room 101',
                                coordinates: { lat: 28.6146, lng: 77.2097 }
                            }
                        }
                    ]
                },
                {
                    id: 'mba',
                    name: 'MBA Department',
                    icon: 'GraduationCap',
                    color: 'bg-orange-500',
                    description: 'Advanced business education with industry connections',
                    faculty: [
                        {
                            id: 'mba-001',
                            name: 'Prof. Anita Kapoor',
                            designation: 'Head of Department',
                            department: 'MBA Department',
                            photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543241',
                            email: 'hod.mba@cvrubihar.ac.in',
                            achievements: 'Strategic management consultant with Fortune 500 company experience. Published business case studies used globally.',
                            specialization: 'Strategic Management, Finance, International Business',
                            experience: '18+ years',
                            education: 'Ph.D. in Management, MBA Finance, B.Com',
                            location: {
                                building: 'Commerce Block',
                                floor: '2nd Floor, Room 201',
                                coordinates: { lat: 28.6147, lng: 77.2098 }
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 'support',
            name: 'Utility and Support Departments',
            icon: 'Headphones',
            color: 'bg-indigo-500',
            description: 'Essential support services for university operations',
            departments: [
                {
                    id: 'library',
                    name: 'Library',
                    icon: 'BookOpen',
                    color: 'bg-indigo-600',
                    description: 'Central repository of knowledge with modern facilities',
                    faculty: [
                        {
                            id: 'lib-001',
                            name: 'Dr. Lakshmi Iyer',
                            designation: 'Chief Librarian',
                            department: 'Library',
                            photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543250',
                            email: 'librarian@cvrubihar.ac.in',
                            achievements: 'Library science expert managing 100,000+ books and digital resources. Implemented modern digital library systems.',
                            specialization: 'Library Science, Information Management, Digital Archives',
                            experience: '15+ years',
                            education: 'Ph.D. in Library Science, M.Lib.Sc., B.Lib.Sc.',
                            location: {
                                building: 'Central Library',
                                floor: 'Ground Floor, Main Desk',
                                coordinates: { lat: 28.6148, lng: 77.2099 }
                            }
                        }
                    ]
                },
                {
                    id: 'placement',
                    name: 'Training & Placement Cell',
                    icon: 'Users',
                    color: 'bg-indigo-500',
                    description: 'Connecting students with career opportunities and skill development',
                    faculty: [
                        {
                            id: 'place-001',
                            name: 'Mr. Suresh Kumar',
                            designation: 'Placement Officer',
                            department: 'Training & Placement Cell',
                            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                            phone: '+91-9876543251',
                            email: 'placement@cvrubihar.ac.in',
                            achievements: 'Achieved 95% placement rate with top companies recruiting from campus. Built relationships with 200+ companies.',
                            specialization: 'Career Counseling, Industry Relations, Skill Development',
                            experience: '12+ years',
                            education: 'MBA HR, B.Tech, Certified Career Counselor',
                            location: {
                                building: 'Administrative Block',
                                floor: '1st Floor, Room 105',
                                coordinates: { lat: 28.6149, lng: 77.2100 }
                            }
                        }
                    ]
                }
            ]
        }
    ]
};

// Icons mapping
const icons = {
    Building2: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
    Cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M20 15h2"/><path d="M2 9h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
    FlaskConical: '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
    TrendingUp: '<polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/>',
    Headphones: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
    Crown: '<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519L20.69 18.25A1.5 1.5 0 0 1 19.202 19.5H4.798a1.5 1.5 0 0 1-1.488-1.25L2.019 6.019a.5.5 0 0 1 .798-.519l4.277 3.664a1 1 0 0 0 1.516-.294z"/>',
    FileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    Monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
    Radio: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
    Cog: '<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m1.05 9 1.73 1"/><path d="m22.95 9-1.73 1"/><path d="m8 12-2-2"/><path d="m16 12 2-2"/><path d="m1.05 15 1.73-1"/><path d="m22.95 15-1.73-1"/>',
    Atom: '<circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/>',
    TestTube: '<path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/>',
    Calculator: '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
    Briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    GraduationCap: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    BookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    Users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    ExternalLink: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    Palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    Book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    Clock: '<circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>',
    Music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    Brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/>',
    Palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    Book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    Clock: '<circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>',
    Music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    Brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/>',
    Scroll: '<path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v11a3 3 0 0 0 3 3z"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/>',
    Paintbrush: '<path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/><path d="M14.5 17.5 4.5 15"/>',
    Music2: '<circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/>',
    Lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>'
};

// Make data globally available
if (typeof window !== 'undefined') {
    window.departmentsData = departmentsData;
    window.icons = icons;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { departmentsData, icons };
}