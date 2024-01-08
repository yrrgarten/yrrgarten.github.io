const nodes = [
  { id: 'NIS-a', group: 'NIS', label: 'Policies on Risk Analysis&#10;and Information System Security' },
  { id: 'NIS-b', group: 'NIS', label: 'Incident Handling' },
  { id: 'NIS-c', group: 'NIS', label: 'Business Continuity,&#10;such as Backup Management&#10;and Disaster Recovery,&#10;and Crisis Canagement' },
  { id: 'NIS-d', group: 'NIS', label: 'Supply Chain Security,&#10;including security-related aspects&#10;concerning the Relationships between each&#10;Entity and its direct Suppliers&#10;or Service Providers' },
  { id: 'NIS-e', group: 'NIS', label: 'Security in Network and&#10;Information Systems Acquisition,&#10;Development and Maintenance, including&#10;Vulnerability Handling and Disclosure' },
  { id: 'NIS-f', group: 'NIS', label: 'Policies and Procedures&#10;to Assess the Effectiveness of&#10;Cybersecurity Risk-Management Measures' },
  { id: 'NIS-g', group: 'NIS', label: 'Basic Cyber Hygiene Practices&#10;and Cybersecurity Training' },
  { id: 'NIS-h', group: 'NIS', label: 'Policies and Procedures regarding&#10;the use of Cryptography and,&#10;where appropriate, Encryption' },
  { id: 'NIS-i', group: 'NIS', label: 'Human Resources Security,&#10;Access Control Policies and&#10;Asset Management' },
  { id: 'NIS-j', group: 'NIS', label: 'The Use of Multi-Factor Authentication&#10;or Continuous Authentication Solutions,&#10;Secured Voice, Video and Text Communications&#10;and Secured Emergency Communication&#10;Systems within the Entity,&#10;where appropriate' },
  {id: 'ISO-6-1', group: 'ISO', label: 'Information Security Risk Assessment & Treatment (Chapter 6)' },
  {id: 'ISO-9', group: 'ISO', label: 'Performance Evaluation (Chapter 9)' },
  { id: 'ISO-A-5-1', group: 'ISO', label: 'Policies for information security (A.5.1)' },
  { id: 'ISO-A-5-2', group: 'ISO', label: 'Information security roles and responsibilities (A.5.2)' },
  { id: 'ISO-A-5-3', group: 'ISO', label: 'Segregation of duties (A.5.3)' },
  { id: 'ISO-A-5-4', group: 'ISO', label: 'Management responsibilities (A.5.4)' },
  { id: 'ISO-A-5-5', group: 'ISO', label: 'Contact with authorities (A.5.5)' },
  { id: 'ISO-A-5-6', group: 'ISO', label: 'Contact with special interest groups (A.5.6)' },
  { id: 'ISO-A-5-7', group: 'ISO', label: 'Threat intelligence (A.5.7)' },
  { id: 'ISO-A-5-8', group: 'ISO', label: 'Information security in project management (A.5.8)' },
  { id: 'ISO-A-5-9', group: 'ISO', label: 'Inventory of information andother associated assets (A.5.9)' },
  { id: 'ISO-A-5-10', group: 'ISO', label: 'Acceptable use of informationand other associated assets (A.5.10)' },
  { id: 'ISO-A-5-11', group: 'ISO', label: 'Return of assets (A.5.11)' },
  { id: 'ISO-A-5-12', group: 'ISO', label: 'Classification of information (A.5.12)' },
  { id: 'ISO-A-5-13', group: 'ISO', label: 'Labelling of information (A.5.13)' },
  { id: 'ISO-A-5-14', group: 'ISO', label: 'Information transfer (A.5.14)' },
  { id: 'ISO-A-5-15', group: 'ISO', label: 'Access control (A.5.15)' },
  { id: 'ISO-A-5-16', group: 'ISO', label: 'Identity management (A.5.16)' },
  { id: 'ISO-A-5-17', group: 'ISO', label: 'Authentication information (A.5.17)' },
  { id: 'ISO-A-5-18', group: 'ISO', label: 'Access rights (A.5.18)' },
  { id: 'ISO-A-5-19', group: 'ISO', label: 'Information security in supplier relationships (A.5.19)' },
  { id: 'ISO-A-5-20', group: 'ISO', label: 'Addressing information security within supplier agreements (A.5.20)' },
  { id: 'ISO-A-5-21', group: 'ISO', label: 'Managing information security in the information and communication technology (ICT) supplychain (A.5.21)' },
  { id: 'ISO-A-5-22', group: 'ISO', label: 'Monitoring, review and change management of supplier services (A.5.22)' },
  { id: 'ISO-A-5-23', group: 'ISO', label: 'Information security for use of cloud services (A.5.23)' },
  { id: 'ISO-A-5-24', group: 'ISO', label: 'Information security incident management planning and preparation (A.5.24)' },
  { id: 'ISO-A-5-25', group: 'ISO', label: 'Assessment and decision on information security events (A.5.25)' },
  { id: 'ISO-A-5-26', group: 'ISO', label: 'Response to information security incidents (A.5.26)' },
  { id: 'ISO-A-5-27', group: 'ISO', label: 'Learning from information security incidents (A.5.27)' },
  { id: 'ISO-A-5-28', group: 'ISO', label: 'Collection of evidence (A.5.28)' },
  { id: 'ISO-A-5-29', group: 'ISO', label: 'Information security during disruption (A.5.29)' },
  { id: 'ISO-A-5-30', group: 'ISO', label: 'ICT readiness for business continuity (A.5.30)' },
  { id: 'ISO-A-5-31', group: 'ISO', label: 'Legal, statutory, regulatory and contractual requirements (A.5.31)' },
  { id: 'ISO-A-5-32', group: 'ISO', label: 'Intellectual property rights (A.5.32)' },
  { id: 'ISO-A-5-33', group: 'ISO', label: 'Protection of records (A.5.33)' },
  { id: 'ISO-A-5-34', group: 'ISO', label: 'Privacy and protection of personal identifiable information (PII) (A.5.34)' },
  { id: 'ISO-A-5-35', group: 'ISO', label: 'Independent review of information security (A.5.35)' },
  { id: 'ISO-A-5-36', group: 'ISO', label: 'Compliance with policies, rulesand standards for informationsecurity (A.5.36)' },
  { id: 'ISO-A-5-37', group: 'ISO', label: 'Documented operating procedures (A.5.37)' },
  { id: 'ISO-A-6-1', group: 'ISO', label: 'Screening (A.6.1)' },
  { id: 'ISO-A-6-2', group: 'ISO', label: 'Terms and conditions of employment (A.6.2)' },
  { id: 'ISO-A-6-3', group: 'ISO', label: 'Information security awareness, education and training (A.6.3)' },
  { id: 'ISO-A-6-4', group: 'ISO', label: 'Disciplinary process (A.6.4)' },
  { id: 'ISO-A-6-5', group: 'ISO', label: 'Responsibilities after termination or change of employment (A.6.5)' },
  { id: 'ISO-A-6-6', group: 'ISO', label: 'Confidentiality or non-disclosure agreements (A.6.6)' },
  { id: 'ISO-A-6-7', group: 'ISO', label: 'Remote working (A.6.7)' },
  { id: 'ISO-A-6-8', group: 'ISO', label: 'Information security event reporting (A.6.8)' },
  { id: 'ISO-A-7-1', group: 'ISO', label: 'Physical security perimeters (A.7.1)' },
  { id: 'ISO-A-7-2', group: 'ISO', label: 'Physical entry (A.7.2)' },
  { id: 'ISO-A-7-3', group: 'ISO', label: 'Securing offices, rooms and fecilities (A.7.3)' },
  { id: 'ISO-A-7-4', group: 'ISO', label: 'Physical security monitoring (A.7.4)' },
  { id: 'ISO-A-7-5', group: 'ISO', label: 'Protecting against physical and environmental threats (A.7.5)' },
  { id: 'ISO-A-7-6', group: 'ISO', label: 'Working in secure areas (A.7.6)' },
  { id: 'ISO-A-7-7', group: 'ISO', label: 'Clear desk and clear screen (A.7.7)' },
  { id: 'ISO-A-7-8', group: 'ISO', label: 'Equipment siting and protection (A.7.8)' },
  { id: 'ISO-A-7-9', group: 'ISO', label: 'Security of assets off-premises (A.7.9)' },
  { id: 'ISO-A-7-10', group: 'ISO', label: 'Storage media (A.7.10)' },
  { id: 'ISO-A-7-11', group: 'ISO', label: 'Supporting utilities (A.7.11)' },
  { id: 'ISO-A-7-12', group: 'ISO', label: 'Cabling security (A.7.12)' },
  { id: 'ISO-A-7-13', group: 'ISO', label: 'Equipment maintenance (A.7.13)' },
  { id: 'ISO-A-7-14', group: 'ISO', label: 'Secure disposal or reuse of equipment (A.7.14)' },
  { id: 'ISO-A-8-1', group: 'ISO', label: 'User end point devices (A.8.1)' },
  { id: 'ISO-A-8-2', group: 'ISO', label: 'Privileged access rights (A.8.2)' },
  { id: 'ISO-A-8-3', group: 'ISO', label: 'Information access restriction (A.8.3)' },
  { id: 'ISO-A-8-4', group: 'ISO', label: 'Access to source code (A.8.4)' },
  { id: 'ISO-A-8-5', group: 'ISO', label: 'Secure authentication (A.8.5)' },
  { id: 'ISO-A-8-6', group: 'ISO', label: 'Capacity management (A.8.6)' },
  { id: 'ISO-A-8-7', group: 'ISO', label: 'Protection against malware (A.8.7)' },
  { id: 'ISO-A-8-8', group: 'ISO', label: 'Management of technical vulnerabilities (A.8.8)' },
  { id: 'ISO-A-8-9', group: 'ISO', label: 'Configuration management (A.8.9)' },
  { id: 'ISO-A-8-10', group: 'ISO', label: 'Information deletion (A.8.10)' },
  { id: 'ISO-A-8-11', group: 'ISO', label: 'Data masking (A.8.11)' },
  { id: 'ISO-A-8-12', group: 'ISO', label: 'Data leakage prevention (A.8.12)' },
  { id: 'ISO-A-8-13', group: 'ISO', label: 'Information backup (A.8.13)' },
  { id: 'ISO-A-8-14', group: 'ISO', label: 'Redundancy of information processing facilities (A.8.14)' },
  { id: 'ISO-A-8-15', group: 'ISO', label: 'Logging (A.8.15)' },
  { id: 'ISO-A-8-16', group: 'ISO', label: 'Monitoring activities (A.8.16)' },
  { id: 'ISO-A-8-17', group: 'ISO', label: 'Clock synchronization (A.8.17)' },
  { id: 'ISO-A-8-18', group: 'ISO', label: 'Use of privileged utility programs (A.8.18)' },
  { id: 'ISO-A-8-19', group: 'ISO', label: 'Installation of software on operational systems (A.8.19)' },
  { id: 'ISO-A-8-20', group: 'ISO', label: 'Networks security (A.8.20)' },
  { id: 'ISO-A-8-21', group: 'ISO', label: 'Security of network services (A.8.21)' },
  { id: 'ISO-A-8-22', group: 'ISO', label: 'Segregation of networks (A.8.22)' },
  { id: 'ISO-A-8-23', group: 'ISO', label: 'Web filtering (A.8.23)' },
  { id: 'ISO-A-8-24', group: 'ISO', label: 'Use of cryptography (A.8.24)' },
  { id: 'ISO-A-8-25', group: 'ISO', label: 'Secure development life cycle (A.8.25)' },
  { id: 'ISO-A-8-26', group: 'ISO', label: 'Application security requirements (A.8.26)' },
  { id: 'ISO-A-8-27', group: 'ISO', label: 'Secure system architecture and engineering principles (A.8.27)' },
  { id: 'ISO-A-8-28', group: 'ISO', label: 'Secure coding (A.8.28)' },
  { id: 'ISO-A-8-29', group: 'ISO', label: 'Security testing in development and acceptance (A.8.29)' },
  { id: 'ISO-A-8-30', group: 'ISO', label: 'Outsourced development (A.8.30)' },
  { id: 'ISO-A-8-31', group: 'ISO', label: 'Separation of development, testand production environments (A.8.31)' },
  { id: 'ISO-A-8-32', group: 'ISO', label: 'Change management (A.8.32)' },
  { id: 'ISO-A-8-33', group: 'ISO', label: 'Test information (A.8.33)' },
  { id: 'ISO-A-8-34', group: 'ISO', label: 'Protection of information systems during audit testing (A.8.34)' }
];

const links = [
  { source: 'NIS-a', target: 'ISO-6-1' },
  { source: 'NIS-b', target: 'ISO-A-5-5' },
  { source: 'NIS-b', target: 'ISO-A-5-7' },
  { source: 'NIS-b', target: 'ISO-A-5-24' },
  { source: 'NIS-b', target: 'ISO-A-5-25' },
  { source: 'NIS-b', target: 'ISO-A-5-26' },
  { source: 'NIS-b', target: 'ISO-A-5-27' },
  { source: 'NIS-b', target: 'ISO-A-5-28' },
  { source: 'NIS-b', target: 'ISO-A-8-7' },
  { source: 'NIS-b', target: 'ISO-A-8-8' },
  { source: 'NIS-b', target: 'ISO-A-8-15' },
  { source: 'NIS-b', target: 'ISO-A-8-16' },
  { source: 'NIS-c', target: 'ISO-A-5-29' },
  { source: 'NIS-c', target: 'ISO-A-5-30' },
  { source: 'NIS-c', target: 'ISO-A-8-13' },
  { source: 'NIS-c', target: 'ISO-A-8-14' },
  { source: 'NIS-d', target: 'ISO-A-5-19' },
  { source: 'NIS-d', target: 'ISO-A-5-20' },
  { source: 'NIS-d', target: 'ISO-A-5-21' },
  { source: 'NIS-d', target: 'ISO-A-5-22' },
  { source: 'NIS-d', target: 'ISO-A-5-23' },
  { source: 'NIS-e', target: 'ISO-A-8-6' },
  { source: 'NIS-e', target: 'ISO-A-8-8' },
  { source: 'NIS-e', target: 'ISO-A-8-25' },
  { source: 'NIS-e', target: 'ISO-A-8-26' },
  { source: 'NIS-e', target: 'ISO-A-8-27' },
  { source: 'NIS-e', target: 'ISO-A-8-28' },
  { source: 'NIS-e', target: 'ISO-A-8-29' },
  { source: 'NIS-e', target: 'ISO-A-8-30' },
  { source: 'NIS-e', target: 'ISO-A-8-31' },
  { source: 'NIS-e', target: 'ISO-A-8-32' },
  { source: 'NIS-e', target: 'ISO-A-8-20' },
  { source: 'NIS-e', target: 'ISO-A-8-21' },
  { source: 'NIS-e', target: 'ISO-A-8-22' },
  { source: 'NIS-f', target: 'ISO-A-5-36' },
  { source: 'NIS-f', target: 'ISO-9' },
  { source: 'NIS-f', target: 'ISO-A-5-1' },
  { source: 'NIS-g', target: 'ISO-A-6-3' },
  { source: 'NIS-g', target: 'ISO-A-6-7' },
  { source: 'NIS-g', target: 'ISO-A-6-8' },
  { source: 'NIS-g', target: 'ISO-A-7-7' },
  { source: 'NIS-g', target: 'ISO-A-7-8' },
  { source: 'NIS-h', target: 'ISO-A-7-10' },
  { source: 'NIS-h', target: 'ISO-A-8-3' },
  { source: 'NIS-h', target: 'ISO-A-8-11' },
  { source: 'NIS-h', target: 'ISO-A-8-12' },
  { source: 'NIS-h', target: 'ISO-A-8-24' },
  { source: 'NIS-h', target: 'ISO-A-8-26' },
  { source: 'NIS-i', target: 'ISO-A-5-18' },
  { source: 'NIS-i', target: 'ISO-A-6-1' },
  { source: 'NIS-i', target: 'ISO-A-6-2' },
  { source: 'NIS-i', target: 'ISO-A-6-5' },
  { source: 'NIS-i', target: 'ISO-A-6-7' },
  { source: 'NIS-i', target: 'ISO-A-8-2' },
  { source: 'NIS-i', target: 'ISO-A-8-3' },
  { source: 'NIS-i', target: 'ISO-A-5-9' },
  { source: 'NIS-i', target: 'ISO-A-5-10' },
  { source: 'NIS-i', target: 'ISO-A-5-11' },
  { source: 'NIS-i', target: 'ISO-A-5-12' },
  { source: 'NIS-i', target: 'ISO-A-5-13' },
  { source: 'NIS-i', target: 'ISO-A-7-13' },
  { source: 'NIS-i', target: 'ISO-A-7-14' },
  { source: 'NIS-j', target: 'ISO-A-5-14' },
  { source: 'NIS-j', target: 'ISO-A-5-16' },
  { source: 'NIS-j', target: 'ISO-A-5-17' },
  { source: 'NIS-j', target: 'ISO-A-5-15' },
  { source: 'NIS-j', target: 'ISO-A-8-5' },
  { source: 'NIS-j', target: 'ISO-A-8-24' }
];

// Canvas Size and Initial SVG
const width = 960;
const height = 900;

const svg = d3.select('body').append('svg')
  .attr('width', width)
  .attr('height', height);
  
// Define the vertical spacing and the left margin
const verticalSpacing = 75;
const leftMargin = 250; // Adjust this value to move nodes closer/further from the edge
const topMargin = 30; // Adjust as needed to provide space for the headings

// Adjust the margins for the labels
const labelMargin = 20; // The space between the label and the node circle
const nodeRadius = 10; // Assuming the radius of the NIS2 nodes is 10

// New left and right margins for the nodes
const leftNodeMargin = leftMargin + labelMargin + nodeRadius;
const rightNodeMargin = width - (leftMargin + labelMargin + nodeRadius) - 50;

// Filter out only the NIS nodes
const nis2NodesData = nodes.filter(node => node.group === 'NIS');

// Create SVG circles for NIS2 nodes
const nis2Nodes = svg.selectAll('.nis2-node')
  .data(nis2NodesData)
  .enter()
  .append('circle')
  .attr('class', 'nis2-node')
  .attr('r', 10) // Radius of the nodes
  .attr('cx', leftNodeMargin) // X-coordinate on the left side
  .attr('cy', (d, i) => topMargin + (i + 1) * verticalSpacing) // Y-coordinate based on index
  .attr('fill', 'blue'); // Fill color of the nodes

// Filter out only the ISO nodes
const isoNodesData = nodes.filter(node => node.group === 'ISO');

// Calculate new vertical spacing for ISO nodes
const isoNodeCount = isoNodesData.length;
const isoVerticalSpacing = (height - topMargin - 20) / (isoNodeCount + 1); // Leave some margin at the top and bottom

// Define the right margin for the ISO nodes
const rightMargin = width - leftMargin; // Adjust to place nodes on the right side

// Create SVG circles for ISO nodes
const isoNodes = svg.selectAll('.iso-node')
  .data(isoNodesData)
  .enter()
  .append('circle')
  .attr('class', 'iso-node')
  .attr('r', 3) // Adjusted radius of the nodes
  .attr('cx', rightNodeMargin) // X-coordinate on the right side
  .attr('cy', (d, i) => topMargin + (i + 1) * isoVerticalSpacing) // Y-coordinate based on index
  .attr('fill', 'green'); // Fill color of the nodes, change if needed

// Create a group for each NIS2 node and its label
const nis2NodeGroups = svg.selectAll('.nis2-node-group')
  .data(nis2NodesData)
  .enter()
  .append('g')
  .attr('class', 'nis2-node-group')
  .on('mouseover', handleMouseOver)
  .on('mouseout', handleMouseOut);

// Create SVG circles for NIS2 nodes within the group
nis2NodeGroups.append('circle')
  .attr('class', 'nis2-node')
  .attr('r', 10) // Radius of the nodes
  .attr('cx', leftNodeMargin) // X-coordinate on the left side
  .attr('cy', (d, i) => topMargin + (i + 1) * verticalSpacing) // Y-coordinate based on index
  .attr('fill', 'blue'); // Fill color of the nodes

// Create SVG text for NIS2 node labels within the group
nis2NodeGroups.each(function(d, i) {
  const group = d3.select(this);
  const labelY = topMargin + (i + 1) * verticalSpacing;
  group.append('text')
    .attr('x', leftMargin - 10) // Adjust as needed
    .attr('y', labelY)
    .attr('text-anchor', 'end')
    .attr('alignment-baseline', 'middle')
    .attr('font-size', '11px')
    .selectAll('tspan')
    .data(d.label.split('&#10;')) // Split the label on line breaks
    .enter()
    .append('tspan')
    .attr('x', leftMargin - 10) // Adjust as needed
    .attr('dy', (d, i) => i === 0 ? 0 : '1.1em') // Adjust line height as needed
    .text(d => d);
});

// Create SVG lines for the links with dark grey color
const link = svg.append('g')
  .attr('class', 'links')
  .selectAll('line')
  .data(links)
  .enter()
  .append('line')
  .attr('stroke-width', 1) // Width of the line
  .attr('stroke', '#333') // Dark grey color
  .attr('class', d => `link link-source-${d.source} link-target-${d.target}`);

// Function to handle mouseover event on NIS2 nodes
function handleMouseOver(d) {
  // Select all lines connected to the hovered node and apply styles
  d3.selectAll(`.link-source-${d.id}`)
    .attr('stroke', 'black')
    .attr('stroke-width', 2);
}

// Function to handle mouseout event on NIS2 nodes
function handleMouseOut(d) {
  // Revert the lines to their original styles
  d3.selectAll(`.link-source-${d.id}`)
    .attr('stroke', '#333')
    .attr('stroke-width', 1);
}

// Add event listeners to NIS2 nodes
nis2Nodes.on('mouseover', handleMouseOver)
         .on('mouseout', handleMouseOut);

// Function to find the node data by id
const findNodeById = id => nodes.find(node => node.id === id);

const leftLineMargin = 18; // Margin between node and line
const rightLineMargin = 10; // Margin between node and line

/* // Update the positions of the links with a margin
link.attr('x1', d => findNodeById(d.source).group === 'NIS' ? leftNodeMargin + leftLineMargin : rightNodeMargin - rightLineMargin)
    .attr('y1', d => (nis2NodesData.findIndex(node => node.id === d.source) + 1) * verticalSpacing)
    .attr('x2', d => findNodeById(d.target).group === 'NIS' ? leftNodeMargin + leftLineMargin : rightNodeMargin - rightLineMargin)
    .attr('y2', d => (isoNodesData.findIndex(node => node.id === d.target) + 1) * isoVerticalSpacing); */

// Create SVG text for ISO node labels with added classes for hover functionality
const isoLabels = svg.selectAll('.iso-label')
  .data(isoNodesData)
  .enter()
  .append('text')
  .attr('class', d => `iso-label label-target-${d.id}`) // Add class for link target
  .attr('x', rightNodeMargin + nodeRadius + labelMargin) // Position to the right of the circle
  .attr('y', (d, i) => topMargin + (i + 1) * isoVerticalSpacing + 4) // Align with the circle's center
  .text(d => d.label) // Set the label text
  .attr('text-anchor', 'start') // Anchor text to the start for right alignment
  .attr('alignment-baseline', 'middle') // Align text vertically
  .attr('font-size', '10px'); // Adjust font size as needed

// Replace lines with paths for curved links
svg.selectAll('line').remove(); // Remove existing lines

const linkPath = svg.append('g')
  .attr('class', 'links')
  .selectAll('path')
  .data(links)
  .enter()
  .append('path')
  .attr('stroke', '#333') // Dark grey color
  .attr('stroke-width', 1)
  .attr('fill', 'none')
  .attr('class', d => `link link-source-${d.source} link-target-${d.target}`);

// Function to calculate the path for each link
const linkDiagonal = d3.linkHorizontal()
  .x(d => d.x)
  .y(d => d.y);

// Update the positions and shapes of the paths
linkPath.attr('d', d => {
  const source = findNodeById(d.source);
  const target = findNodeById(d.target);
  const sourceY = topMargin + (nis2NodesData.findIndex(node => node.id === source.id) + 1) * verticalSpacing;
  const targetY = topMargin + (isoNodesData.findIndex(node => node.id === target.id) + 1) * isoVerticalSpacing;
  return linkDiagonal({
    source: { x: source.group === 'NIS' ? leftNodeMargin + leftLineMargin : rightNodeMargin - rightLineMargin, y: sourceY },
    target: { x: target.group === 'NIS' ? leftNodeMargin + leftlineMargin : rightNodeMargin - rightLineMargin, y: targetY }
  });
});

// Update event listeners to work with paths instead of lines
/* function handleMouseOver(event, d) {
    d3.selectAll(`.link-source-${d.id}`)
      .attr('stroke', 'black')
      .attr('stroke-width', 2);
  }
  
  function handleMouseOut(event, d) {
    d3.selectAll(`.link-source-${d.id}`)
      .attr('stroke', '#333')
      .attr('stroke-width', 1);
  } */
// Update the handleMouseOver function to also emphasize the ISO labels
function handleMouseOver(event, d) {
// Emphasize the lines
d3.selectAll(`.link-source-${d.id}`)
    .attr('stroke', 'black')
    .attr('stroke-width', 2);

// Emphasize the ISO labels connected to the hovered NIS2 node
links.forEach(link => {
    if (link.source === d.id) {
    d3.select(`.label-target-${link.target}`)
        .attr('font-weight', 'bold') // Example of style change
        .attr('fill', 'red'); // Change text color to red, for example
    }
});
}
  
// Update the handleMouseOut function to revert the ISO labels style
function handleMouseOut(event, d) {
// Revert the lines to their original styles
d3.selectAll(`.link-source-${d.id}`)
    .attr('stroke', '#333')
    .attr('stroke-width', 1);

// Revert the ISO labels style
links.forEach(link => {
    if (link.source === d.id) {
    d3.select(`.label-target-${link.target}`)
        .attr('font-weight', null) // Revert font weight
        .attr('fill', null); // Revert text color
    }
});
}

// Add hover interaction using JavaScript
nis2Nodes.on('mouseover', function(event, d) {
    d3.selectAll(`.link-source-${d.id}`)
      .attr('stroke', 'black')
      .attr('stroke-width', 3);
  })
  .on('mouseout', function(event, d) {
    d3.selectAll(`.link-source-${d.id}`)
      .attr('stroke', '#333')
      .attr('stroke-width', 1);
  });

// Add a heading for the NIS2 column
svg.append('text')
.attr('x', leftMargin - 50) // Position the text above the NIS2 labels
.attr('y', 15) // Adjust the y-coordinate as needed to position above the nodes
.attr('text-anchor', 'right') // Center the text horizontally
.attr('alignment-baseline', 'middle') // Center the text vertically
.attr('font-size', '16px') // Adjust font size as needed
.attr('font-weight', 'bold') // Make the text bold
.text('NIS 2'); // The text content

// Add a heading for the ISO 27001 column
svg.append('text')
.attr('x', rightNodeMargin + 25) // Position the text above the ISO labels
.attr('y', 15) // Adjust the y-coordinate as needed to position above the nodes
.attr('text-anchor', 'right') // Center the text horizontally
.attr('alignment-baseline', 'middle') // Center the text vertically
.attr('font-size', '16px') // Adjust font size as needed
.attr('font-weight', 'bold') // Make the text bold
.text('ISO 27001'); // The text content

// Apply the font-family style to all text elements in the SVG
svg.selectAll('text')
  .style('font-family', 'Noto Sans, sans-serif');