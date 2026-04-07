// Modal data for expertise details
const expertiseDetails = {
  securite: {
    title: 'Sécurité Électronique',
    icon: 'fa-video',
    color: 'var(--primary-color)',
    description:
      'Nous offrons des solutions complètes de sécurité électronique pour protéger vos biens et votre personnel. Nos systèmes sont conçus pour répondre aux besoins des entreprises et des particuliers.',
    features: [
      'Caméras de surveillance HD et 4K',
      "Systèmes d'alarme anti-intrusion",
      "Contrôle d'accès biométrique et badges",
      'Vidéophone et interphones connectés',
      'Monitoring 24/7 disponible',
      'Installation professionnelle',
      'Maintenance et support technique',
    ],
    price: 'À partir de 150 000 FCFA',
  },
  reseaux: {
    title: 'Réseaux Téléphoniques & Informatiques',
    icon: 'fa-network-wired',
    color: 'var(--accent-color)',
    description:
      "Notre équipe d'experts vous accompagne dans la conception, l'installation et la maintenance de votre infrastructure réseau pour une connectivité optimale.",
    features: [
      'Câblage structuré cat6 et cat7',
      'Installation de réseaux LAN/WAN',
      'Configuration de serveurs',
      'Téléphonie IP professionnelle',
      'Solutions cloud et virtualisation',
      'Dépannage et maintenance',
      'Audit de sécurité réseau',
    ],
    price: 'À partir de 200 000 FCFA',
  },
  froid: {
    title: 'Froid & Climatisation',
    icon: 'fa-snowflake',
    color: 'var(--accent3-color)',
    description:
      "Gardez votre espace confortable toute l'année avec nos solutions de climatisation et de froid commercial. Nous intervenons pour les particuliers et les professionnels.",
    features: [
      'Installation de climatiseurs split et gainable',
      'Climatisation centrale',
      'Chambres froides commerciales',
      'Entrepôt frigorifique',
      'Entretien préventif',
      "Dépannage d'urgence 24/7",
      'Récupération et recyclage des fluides',
    ],
    price: 'À partir de 100 000 FCFA',
  },
  plomberie: {
    title: 'Plomberie Professionnelle',
    icon: 'fa-wrench',
    color: 'var(--accent2-color)',
    description:
      "Nos plombiers qualifiés interviennent pour tous vos travaux de plomberie, de l'installation à la rénovation, en passant par les dépannages urgents.",
    features: [
      'Installation sanitaire complète',
      "Réparation de fuites d'eau",
      'Débouchage de canalisations',
      'Rénovation de salle de bain',
      'Installation de chauffe-eau',
      'Détection de fuites non destructive',
      'Vidange de fosse septique',
    ],
    price: 'À partir de 50 000 FCFA',
  },
}

// Make functions globally accessible
window.openExpertiseModal = function (expertiseKey) {
  const modal = document.getElementById('expertiseModal')
  const data = expertiseDetails[expertiseKey]

  if (!modal || !data) return

  // Update modal content
  const iconElement = modal.querySelector('.modal-icon')
  const titleElement = modal.querySelector('.modal-title')
  const descElement = modal.querySelector('.modal-description')
  const featuresElement = modal.querySelector('.modal-features')
  const priceElement = modal.querySelector('.modal-price')

  if (iconElement) {
    iconElement.style.background = `linear-gradient(135deg, ${data.color}, var(--accent3-color))`
    iconElement.innerHTML = `<i class="fas ${data.icon} text-3xl text-white"></i>`
  }

  if (titleElement) titleElement.textContent = data.title
  if (descElement) descElement.textContent = data.description
  if (priceElement) priceElement.textContent = data.price

  if (featuresElement) {
    featuresElement.innerHTML = data.features
      .map(
        (feature) => `
      <li class="flex items-start gap-3">
        <i class="fas fa-check-circle text-[var(--accent4-color)] mt-1"></i>
        <span class="text-[var(--gray-text-color)]">${feature}</span>
      </li>
    `
      )
      .join('')
  }

  // Show modal
  modal.classList.remove('hidden')
  modal.classList.add('flex')
  modal.style.display = 'flex'
  document.body.style.overflow = 'hidden'
}

window.closeExpertiseModal = function () {
  const modal = document.getElementById('expertiseModal')
  if (modal) {
    modal.classList.add('hidden')
    modal.classList.remove('flex')
    modal.style.display = 'none'
    document.body.style.overflow = 'auto'
  }
}

// Alias for compatibility
const openExpertiseModal = window.openExpertiseModal
const closeExpertiseModal = window.closeExpertiseModal

// Initialize modal event listeners
function initExpertiseModals() {
  // Close button
  const closeBtn = document.querySelector('.modal-close-btn')
  if (closeBtn) {
    closeBtn.addEventListener('click', closeExpertiseModal)
  }

  // Close on backdrop click
  const modal = document.getElementById('expertiseModal')
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeExpertiseModal()
      }
    })
  }

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeExpertiseModal()
    }
  })
}

// Export functions
export { openExpertiseModal, closeExpertiseModal, initExpertiseModals }

// Initialize modals when DOM is ready
export function init() {
  initExpertiseModals()
}

// Cleanup function
export function teardown() {
  const closeBtn = document.querySelector('.modal-close-btn')
  if (closeBtn) {
    closeBtn.removeEventListener('click', closeExpertiseModal)
  }
  document.removeEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeExpertiseModal()
  })
}
