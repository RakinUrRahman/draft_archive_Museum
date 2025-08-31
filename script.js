        // Sample data storage (using variables instead of localStorage)
        let artifacts = [
            {
                id: 1,
                collectionNo: "BNM-2024-001",
                name: "Liberation War Medal",
                category: "Liberation War",
                donor: "Freedom Fighter Association",
                description: "Bronze medal awarded to freedom fighters during the 1971 Liberation War",
                status: "Published",
                dateAdded: "2024-08-15",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Crect width='50' height='50' fill='%23f39c12'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-size='20'%3E🏅%3C/text%3E%3C/svg%3E"
            },
            {
                id: 2,
                collectionNo: "BNM-2024-002",
                name: "Mughal Era Coin",
                category: "Coins",
                donor: "Dr. Ahmed Rahman",
                description: "Silver coin from the Mughal period, depicting Emperor Akbar",
                status: "Published",
                dateAdded: "2024-08-10",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ccircle cx='25' cy='25' r='23' fill='%23c0392b' stroke='%23922b21' stroke-width='2'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-size='20'%3E🪙%3C/text%3E%3C/svg%3E"
            },
            {
                id: 3,
                collectionNo: "BNM-2024-003",
                name: "Traditional Pottery",
                category: "Pottery",
                donor: "Cultural Heritage Foundation",
                description: "Handmade clay pot from rural Bangladesh, 18th century",
                status: "Under Review",
                dateAdded: "2024-08-20",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Crect width='50' height='50' fill='%238e44ad'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-size='20'%3E🏺%3C/text%3E%3C/svg%3E"
            },
            {
                id: 4,
                collectionNo: "BNM-2024-004",
                name: "Ancient Manuscript",
                category: "Manuscripts",
                donor: "University of Dhaka",
                description: "Sanskrit manuscript on palm leaf, 15th century",
                status: "Draft",
                dateAdded: "2024-08-25",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Crect width='50' height='50' fill='%2327ae60'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-size='20'%3E📜%3C/text%3E%3C/svg%3E"
            }
        ];

        let users = [
            {
                id: 1,
                name: "Admin User",
                email: "admin@museum.bd",
                role: "Admin",
                department: "Administration",
                lastLogin: "2024-08-31",
                status: "Active"
            },
            {
                id: 2,
                name: "Dr. Sarah Khan",
                email: "sarah.khan@museum.bd",
                role: "Staff",
                department: "Archaeology",
                lastLogin: "2024-08-30",
                status: "Active"
            },
            {
                id: 3,
                name: "Mohammad Rahman",
                email: "m.rahman@researcher.bd",
                role: "Researcher",
                department: "History",
                lastLogin: "2024-08-28",
                status: "Active"
            }
        ];

        let currentUser = { name: "Admin User", role: "Admin" };
        let editingArtifactId = null;

        // Login functionality
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email === 'admin@museum.bd' && password === 'admin123') {
                document.getElementById('loginPage').style.display = 'none';
                document.getElementById('mainApp').style.display = 'flex';
                loadDashboard();
            } else {
                alert('Invalid credentials. Use: admin@museum.bd / admin123');
            }
        });

        // Navigation
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Remove active class from all menu items
            document.querySelectorAll('.sidebar-menu a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Add active class to clicked menu item
            event.target.classList.add('active');
            
            // Load page-specific data
            if (pageId === 'dashboard') loadDashboard();
            else if (pageId === 'artifacts') loadArtifacts();
            else if (pageId === 'users') loadUsers();
            else if (pageId === 'reports') loadReports();
        }

        function logout() {
            document.getElementById('mainApp').style.display = 'none';
            document.getElementById('loginPage').style.display = 'flex';
        }

        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('open');
        }

        // Dashboard functionality
        function loadDashboard() {
            updateStats();
            createMonthlyChart();
        }

        function updateStats() {
            document.getElementById('totalArtifacts').textContent = artifacts.length;
            document.getElementById('totalUsers').textContent = users.length;
            document.getElementById('newArtifacts').textContent = artifacts.filter(a => 
                new Date(a.dateAdded) > new Date(Date.now() - 30*24*60*60*1000)
            ).length;
            document.getElementById('pendingReview').textContent = artifacts.filter(a => 
                a.status === 'Under Review'
            ).length;
        }

        function createMonthlyChart() {
            const ctx = document.getElementById('monthlyChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    datasets: [{
                        label: 'Artifacts Added',
                        data: [65, 59, 80, 81, 56, 55, 40, 45],
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Artifacts functionality
        function loadArtifacts() {
            displayArtifacts(artifacts);
        }

        function displayArtifacts(artifactList) {
            const tbody = document.getElementById('artifactsTableBody');
            tbody.innerHTML = '';
            
            artifactList.forEach(artifact => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><img src="${artifact.image}" alt="${artifact.name}" class="artifact-img"></td>
                    <td>${artifact.collectionNo}</td>
                    <td>${artifact.name}</td>
                    <td>${artifact.category}</td>
                    <td>${artifact.donor || 'N/A'}</td>
                    <td><span class="status-badge status-${artifact.status.toLowerCase().replace(' ', '')}">${artifact.status}</span></td>
                    <td>${artifact.dateAdded}</td>
                    <td class="action-buttons">
                        <button class="action-btn btn-primary" onclick="editArtifact(${artifact.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn btn-danger" onclick="deleteArtifact(${artifact.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        document.getElementById('artifactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newArtifact = {
                id: artifacts.length + 1,
                collectionNo: document.getElementById('collectionNo').value,
                name: document.getElementById('artifactName').value,
                category: document.getElementById('category').value,
                donor: document.getElementById('donor').value,
                description: document.getElementById('description').value,
                status: document.getElementById('status').value,
                dateAdded: document.getElementById('dateAcquired').value || new Date().toISOString().split('T')[0],
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Crect width='50' height='50' fill='%2334495e'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-size='20'%3E📦%3C/text%3E%3C/svg%3E"
            };
            
            artifacts.push(newArtifact);
            displayArtifacts(artifacts);
            clearForm();
            updateStats();
            alert('Artifact added successfully!');
        });

        function clearForm() {
            document.getElementById('artifactForm').reset();
        }

        function searchArtifacts(query) {
            const filtered = artifacts.filter(artifact =>
                artifact.name.toLowerCase().includes(query.toLowerCase()) ||
                artifact.collectionNo.toLowerCase().includes(query.toLowerCase()) ||
                artifact.category.toLowerCase().includes(query.toLowerCase()) ||
                (artifact.donor && artifact.donor.toLowerCase().includes(query.toLowerCase()))
            );
            displayArtifacts(filtered);
        }

        function filterArtifacts() {
            const categoryFilter = document.getElementById('filterCategory').value;
            const statusFilter = document.getElementById('filterStatus').value;
            
            let filtered = artifacts;
            
            if (categoryFilter) {
                filtered = filtered.filter(artifact => artifact.category === categoryFilter);
            }
            
            if (statusFilter) {
                filtered = filtered.filter(artifact => artifact.status === statusFilter);
            }
            
            displayArtifacts(filtered);
        }

        function editArtifact(id) {
            const artifact = artifacts.find(a => a.id === id);
            if (artifact) {
                editingArtifactId = id;
                document.getElementById('editCollectionNo').value = artifact.collectionNo;
                document.getElementById('editArtifactName').value = artifact.name;
                document.getElementById('editDonor').value = artifact.donor || '';
                document.getElementById('editCategory').value = artifact.category;
                document.getElementById('editDescription').value = artifact.description;
                document.getElementById('editStatus').value = artifact.status;
                document.getElementById('editModal').style.display = 'block';
            }
        }

        function deleteArtifact(id) {
            if (confirm('Are you sure you want to delete this artifact?')) {
                artifacts = artifacts.filter(a => a.id !== id);
                displayArtifacts(artifacts);
                updateStats();
                alert('Artifact deleted successfully!');
            }
        }

        document.getElementById('editArtifactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const artifactIndex = artifacts.findIndex(a => a.id === editingArtifactId);
            if (artifactIndex !== -1) {
                artifacts[artifactIndex] = {
                    ...artifacts[artifactIndex],
                    collectionNo: document.getElementById('editCollectionNo').value,
                    name: document.getElementById('editArtifactName').value,
                    donor: document.getElementById('editDonor').value,
                    category: document.getElementById('editCategory').value,
                    description: document.getElementById('editDescription').value,
                    status: document.getElementById('editStatus').value
                };
                
                displayArtifacts(artifacts);
                closeModal();
                alert('Artifact updated successfully!');
            }
        });

        function closeModal() {
            document.getElementById('editModal').style.display = 'none';
            editingArtifactId = null;
        }

        // Users functionality
        function loadUsers() {
            displayUsers();
        }

        function displayUsers() {
            const tbody = document.getElementById('usersTableBody');
            tbody.innerHTML = '';
            
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td><span class="status-badge status-published">${user.role}</span></td>
                    <td>${user.department}</td>
                    <td>${user.lastLogin}</td>
                    <td><span class="status-badge status-published">${user.status}</span></td>
                    <td class="action-buttons">
                        <button class="action-btn btn-warning" onclick="editUser(${user.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn btn-danger" onclick="deleteUser(${user.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        function showAddUserModal() {
            document.getElementById('userModal').style.display = 'block';
        }

        function closeUserModal() {
            document.getElementById('userModal').style.display = 'none';
        }

        document.getElementById('addUserForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newUser = {
                id: users.length + 1,
                name: document.getElementById('userName').value,
                email: document.getElementById('userEmail').value,
                role: document.getElementById('userRole').value,
                department: document.getElementById('userDepartment').value,
                lastLogin: 'Never',
                status: 'Active'
            };
            
            users.push(newUser);
            displayUsers();
            closeUserModal();
            document.getElementById('addUserForm').reset();
            updateStats();
            alert('User added successfully!');
        });

        function editUser(id) {
            alert('Edit user functionality - would open edit modal');
        }

        function deleteUser(id) {
            if (confirm('Are you sure you want to delete this user?')) {
                users = users.filter(u => u.id !== id);
                displayUsers();
                updateStats();
                alert('User deleted successfully!');
            }
        }

        // Reports functionality
        function loadReports() {
            generateReport();
            createReportCharts();
        }

        function generateReport() {
            const reportType = document.getElementById('reportType').value;
            const header = document.getElementById('reportTableHeader');
            const tbody = document.getElementById('reportTableBody');
            
            let data = [];
            let headers = [];
            
            switch(reportType) {
                case 'artifacts':
                    headers = ['Collection No', 'Name', 'Category', 'Donor', 'Status', 'Date Added'];
                    data = artifacts.map(a => [a.collectionNo, a.name, a.category, a.donor || 'N/A', a.status, a.dateAdded]);
                    break;
                case 'monthly':
                    headers = ['Month', 'Artifacts Added', 'Categories', 'Donors'];
                    data = [
                        ['August 2024', '4', '4', '3'],
                        ['July 2024', '8', '5', '6'],
                        ['June 2024', '12', '6', '8']
                    ];
                    break;
                case 'donors':
                    headers = ['Donor', 'Artifacts Donated', 'Last Donation'];
                    const donorStats = {};
                    artifacts.forEach(a => {
                        if (a.donor) {
                            donorStats[a.donor] = donorStats[a.donor] || { count: 0, lastDate: a.dateAdded };
                            donorStats[a.donor].count++;
                            if (a.dateAdded > donorStats[a.donor].lastDate) {
                                donorStats[a.donor].lastDate = a.dateAdded;
                            }
                        }
                    });
                    data = Object.entries(donorStats).map(([donor, stats]) => [donor, stats.count, stats.lastDate]);
                    break;
                case 'categories':
                    headers = ['Category', 'Total Artifacts', 'Published', 'Draft', 'Under Review'];
                    const categoryStats = {};
                    artifacts.forEach(a => {
                        categoryStats[a.category] = categoryStats[a.category] || { total: 0, published: 0, draft: 0, review: 0 };
                        categoryStats[a.category].total++;
                        if (a.status === 'Published') categoryStats[a.category].published++;
                        else if (a.status === 'Draft') categoryStats[a.category].draft++;
                        else if (a.status === 'Under Review') categoryStats[a.category].review++;
                    });
                    data = Object.entries(categoryStats).map(([cat, stats]) => [cat, stats.total, stats.published, stats.draft, stats.review]);
                    break;
            }
            
            // Update table headers
            header.innerHTML = headers.map(h => `<th>${h}</th>`).join('');
            
            // Update table body
            tbody.innerHTML = data.map(row => 
                `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
            ).join('');
        }

        function createReportCharts() {
            // Category Chart
            const categoryCtx = document.getElementById('categoryChart').getContext('2d');
            const categoryData = {};
            artifacts.forEach(a => {
                categoryData[a.category] = (categoryData[a.category] || 0) + 1;
            });
            
            new Chart(categoryCtx, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(categoryData),
                    datasets: [{
                        data: Object.values(categoryData),
                        backgroundColor: ['#3498db', '#2ecc71', '#f39c12', '#e74c3c', '#9b59b6', '#1abc9c', '#34495e', '#f1c40f']
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });

            // Donation Chart
            const donationCtx = document.getElementById('donationChart').getContext('2d');
            new Chart(donationCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    datasets: [{
                        label: 'Donations',
                        data: [12, 8, 15, 10, 7, 9, 14, 11],
                        backgroundColor: '#2ecc71'
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        function exportExcel() {
            // Simulate Excel export
            const reportData = artifacts.map(a => [
                a.collectionNo,
                a.name,
                a.category,
                a.donor || 'N/A',
                a.status,
                a.dateAdded,
                a.description
            ]);
            
            let csvContent = "Collection No,Name,Category,Donor,Status,Date Added,Description\n";
            reportData.forEach(row => {
                csvContent += row.map(field => `"${field}"`).join(',') + "\n";
            });
            
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'museum_artifacts_report.csv';
            a.click();
            window.URL.revokeObjectURL(url);
            
            alert('Excel report exported successfully!');
        }

        function exportPDF() {
            // Simulate PDF export
            alert('PDF export functionality would be implemented with a PDF library like jsPDF');
        }

        // File upload handling
        document.getElementById('imageUpload').addEventListener('change', function(e) {
            const files = e.target.files;
            console.log(`${files.length} files selected for upload`);
            // In a real implementation, you would handle file upload here
        });

        // Drag and drop for file upload
        const fileUpload = document.querySelector('.file-upload');
        
        fileUpload.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('dragover');
        });
        
        fileUpload.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
        });
        
        fileUpload.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
            const files = e.dataTransfer.files;
            console.log(`${files.length} files dropped`);
            // Handle dropped files
        });

        // Initialize the application
        window.addEventListener('load', function() {
            // Set default dates for report filters
            const today = new Date();
            const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            document.getElementById('dateFrom').value = firstDayOfMonth.toISOString().split('T')[0];
            document.getElementById('dateTo').value = today.toISOString().split('T')[0];
        });

        // Close modals when clicking outside
        window.addEventListener('click', function(e) {
            const editModal = document.getElementById('editModal');
            const userModal = document.getElementById('userModal');
            
            if (e.target === editModal) {
                editModal.style.display = 'none';
            }
            if (e.target === userModal) {
                userModal.style.display = 'none';
            }
        });
