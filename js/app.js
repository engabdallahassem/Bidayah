document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const dashboardsContainer = document.getElementById('dashboards');

    // Comprehensive User Model with Enhanced Analytics
    const users = {
        student: {
            email: 'student@bidayah.com',
            password: 'student123',
            profile: {
                name: 'John Doe',
                learningGoals: ['Master Programming', 'AI Fundamentals'],
                educationalBackground: 'Computer Science Major'
            },
            performanceData: {
                overallProgress: 75,
                skillProficiency: {
                    mathematics: 80,
                    programming: 85,
                    communication: 70
                },
                learningTrends: [65, 70, 75, 80, 85]
            }
        },
        teacher: {
            email: 'teacher@bidayah.com',
            password: 'teacher123',
            classPerformanceData: {
                studentScores: [75, 82, 68, 90, 60],
                subjectPerformance: {
                    mathematics: 75,
                    programming: 80,
                    science: 70
                }
            }
        },
        admin: {
            email: 'admin@bidayah.com',
            password: 'admin123',
            systemAnalytics: {
                userEngagement: [500, 650, 700, 800, 900],
                learningTrends: {
                    courses: ['Programming', 'AI', 'Data Science'],
                    enrollments: [250, 180, 150]
                }
            }
        },
        external: {
            email: 'external@bidayah.com',
            password: 'external123',
            comprehensiveReports: {
                studentPerformanceOverview: [70, 75, 80, 85, 90],
                learningPotential: {
                    lowPotential: 20,
                    mediumPotential: 50,
                    highPotential: 30
                }
            }
        }
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const role = document.getElementById('userRole').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (users[role] && 
            users[role].email === email && 
            users[role].password === password) {
            
            // Redirect based on user role
            switch(role) {
                case 'student':
                    window.location.href = 'student-profile.html';
                    break;
                case 'teacher':
                    window.location.href = 'teacher-dashboard.html';
                    break;
                case 'admin':
                    window.location.href = 'admin-dashboard.html';
                    break;
                case 'external':
                    window.location.href = 'external-stakeholder.html';
                    break;
            }
        } else {
            alert('Invalid login credentials');
        }
    });

    function initStudentDashboard(studentData) {
        document.getElementById('studentName').textContent = studentData.profile.name;

        // Learning Progress Chart
        const learningProgressCtx = document.getElementById('learningProgressChart').getContext('2d');
        new Chart(learningProgressCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                datasets: [{
                    label: 'Learning Progress',
                    data: studentData.performanceData.learningTrends,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }
        });

        // Skill Proficiency Radar Chart
        const skillProficiencyCtx = document.getElementById('skillProficiencyChart').getContext('2d');
        new Chart(skillProficiencyCtx, {
            type: 'radar',
            data: {
                labels: ['Mathematics', 'Programming', 'Communication'],
                datasets: [{
                    label: 'Skill Proficiency',
                    data: [
                        studentData.performanceData.skillProficiency.mathematics,
                        studentData.performanceData.skillProficiency.programming,
                        studentData.performanceData.skillProficiency.communication
                    ],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)'
                }]
            }
        });
    }

    function initTeacherDashboard(teacherData) {
        // Student Performance Comparison Bar Chart
        const classPerformanceCtx = document.getElementById('classPerformanceChart').getContext('2d');
        new Chart(classPerformanceCtx, {
            type: 'bar',
            data: {
                labels: ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5'],
                datasets: [{
                    label: 'Student Scores',
                    data: teacherData.classPerformanceData.studentScores,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                }]
            }
        });

        // Subject-wise Performance Pie Chart
        const subjectPerformanceCtx = document.getElementById('subjectPerformanceChart').getContext('2d');
        new Chart(subjectPerformanceCtx, {
            type: 'pie',
            data: {
                labels: ['Mathematics', 'Programming', 'Science'],
                datasets: [{
                    data: Object.values(teacherData.classPerformanceData.subjectPerformance),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)'
                    ]
                }]
            }
        });
    }

    function initAdminDashboard(adminData) {
        // User Engagement Line Chart
        const userEngagementCtx = document.getElementById('userEngagementChart').getContext('2d');
        new Chart(userEngagementCtx, {
            type: 'line',
            data: {
                labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5'],
                datasets: [{
                    label: 'User Engagement',
                    data: adminData.systemAnalytics.userEngagement,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }
        });

        // Learning Trends Bar Chart
        const learningTrendsCtx = document.getElementById('learningTrendsChart').getContext('2d');
        new Chart(learningTrendsCtx, {
            type: 'bar',
            data: {
                labels: adminData.systemAnalytics.learningTrends.courses,
                datasets: [{
                    label: 'Course Enrollments',
                    data: adminData.systemAnalytics.learningTrends.enrollments,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)'
                    ]
                }]
            }
        });
    }

    function initExternalStakeholderDashboard(externalData) {
        // Student Performance Overview Line Chart
        const performanceOverviewCtx = document.getElementById('studentPerformanceOverviewChart').getContext('2d');
        new Chart(performanceOverviewCtx, {
            type: 'line',
            data: {
                labels: ['Cohort 1', 'Cohort 2', 'Cohort 3', 'Cohort 4', 'Cohort 5'],
                datasets: [{
                    label: 'Student Performance',
                    data: externalData.comprehensiveReports.studentPerformanceOverview,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }
        });

        // Learning Potential Doughnut Chart
        const learningPotentialCtx = document.getElementById('learningPotentialChart').getContext('2d');
        new Chart(learningPotentialCtx, {
            type: 'doughnut',
            data: {
                labels: ['Low Potential', 'Medium Potential', 'High Potential'],
                datasets: [{
                    data: [
                        externalData.comprehensiveReports.learningPotential.lowPotential,
                        externalData.comprehensiveReports.learningPotential.mediumPotential,
                        externalData.comprehensiveReports.learningPotential.highPotential
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ]
                }]
            }
        });
    }
});
