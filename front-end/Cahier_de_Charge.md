# Cahier des Charges - MES Gestion Ressources (Front-End)

## 1. Introduction

### 1.1 Contexte du Projet

Le système MES (Manufacturing Execution System) Gestion Ressources est une application web front-end conçue pour optimiser la gestion des ressources dans un environnement de fabrication. Elle permet de surveiller, contrôler et analyser les opérations de production en temps réel, facilitant ainsi la prise de décision et l'amélioration de l'efficacité opérationnelle.

### 1.2 Objectif du Cahier des Charges

Ce document définit les spécifications fonctionnelles et techniques pour le développement du front-end de l'application MES Gestion Ressources. Il sert de référence pour les développeurs, les testeurs et les parties prenantes afin d'assurer une compréhension commune des exigences et des attentes.

## 2. Objectifs du Projet

- Fournir une interface utilisateur intuitive pour la gestion des ressources de fabrication.
- Permettre la surveillance en temps réel des machines, interventions, stocks et alertes.
- Faciliter la gestion des opérateurs et des pannes.
- Assurer une expérience utilisateur fluide avec un design responsive et moderne.
- Intégrer des fonctionnalités de recherche, filtrage et notification.

## 3. Exigences Fonctionnelles

### 3.1 Dashboard (Tableau de Bord)

- **Description** : Page d'accueil affichant un aperçu des métriques clés.
- **Fonctionnalités** :
  - Affichage des statistiques générales (machines actives, alertes en cours, etc.).
  - Graphiques et indicateurs visuels pour les performances.
  - Navigation rapide vers d'autres sections.

### 3.2 Gestion des Machines (MachineList)

- **Description** : Liste et gestion des machines de production.
- **Fonctionnalités** :
  - Affichage d'une liste paginée des machines avec statut (active, inactive, en maintenance).
  - Recherche et filtrage par nom, type ou statut.
  - Détails de chaque machine (historique, spécifications).
  - Actions : ajouter, modifier, supprimer une machine.

### 3.3 Gestion des Interventions (InterventionList)

- **Description** : Suivi des interventions de maintenance.
- **Fonctionnalités** :
  - Liste des interventions planifiées et réalisées.
  - Filtrage par date, machine ou type d'intervention.
  - Ajout d'interventions avec détails (description, responsable, durée).
  - Mise à jour du statut (planifiée, en cours, terminée).

### 3.4 Gestion des Stocks (StockManagement)

- **Description** : Gestion de l'inventaire des pièces et matériaux.
- **Fonctionnalités** :
  - Affichage des niveaux de stock avec alertes de seuil.
  - Recherche par référence ou catégorie.
  - Mise à jour des quantités (entrée/sortie).
  - Historique des mouvements de stock.

### 3.5 Gestion des Alertes (AlertManagement)

- **Description** : Surveillance et gestion des alertes système.
- **Fonctionnalités** :
  - Liste des alertes avec niveaux de criticité (critique, avertissement, info, succès).
  - Filtrage par onglets (Tous, Non lus, Critiques, Résolus).
  - Recherche par mot-clé, source ou date.
  - Actions sur les alertes (marquer comme lu, assigner, résoudre).
  - Notifications toast pour les nouvelles alertes.

### 3.6 Gestion des Opérateurs (OperatorsManagement)

- **Description** : Gestion des utilisateurs et opérateurs.
- **Fonctionnalités** :
  - Liste des opérateurs avec rôles et statuts.
  - Ajout/modification des profils.
  - Attribution de permissions.

### 3.7 Gestion des Pannes (BreakdownsList)

- **Description** : Suivi des pannes et arrêts de production.
- **Fonctionnalités** :
  - Liste des pannes avec causes et durées.
  - Filtrage par machine ou période.
  - Analyse des tendances.

### 3.8 Composants Communs

- **Sidebar** : Navigation latérale avec liens vers les pages principales.
- **Header** : Barre supérieure avec titre et boutons d'action.
- **Authentification** : (À implémenter si nécessaire) Connexion/déconnexion.

## 4. Exigences Non-Fonctionnelles

### 4.1 Performance

- Temps de chargement des pages < 2 secondes.
- Support pour au moins 100 utilisateurs simultanés.
- Optimisation pour les appareils mobiles et desktop.

### 4.2 Sécurité

- Authentification sécurisée (si implémentée).
- Protection contre les attaques XSS et CSRF.
- Conformité aux normes de confidentialité des données.

### 4.3 Accessibilité

- Conformité WCAG 2.1 niveau AA.
- Support des lecteurs d'écran et navigation clavier.

### 4.4 Maintenabilité

- Code modulaire et bien documenté.
- Utilisation de TypeScript pour la sécurité des types.
- Tests unitaires et d'intégration.

## 5. Spécifications Techniques

### 5.1 Technologies

- **Framework** : React 18+
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Build Tool** : Vite
- **Linting** : ESLint
- **État** : React Hooks (useState, useEffect)

### 5.2 Architecture

- Structure modulaire avec composants réutilisables.
- Routage avec React Router (si applicable).
- Gestion d'état locale avec hooks React.

### 5.3 Design

- Thème sombre/clair supporté.
- Palette de couleurs cohérente (primaires, critiques, avertissements, etc.).
- Icônes Material Symbols.
- Responsive design avec Tailwind CSS.

### 5.4 Intégration

- API REST pour la communication avec le back-end (endpoints à définir).
- Gestion des erreurs et états de chargement.

## 6. Cas d'Utilisation

### 6.1 Utilisateur Opérateur

- Consulter le dashboard pour un aperçu rapide.
- Vérifier les alertes et les résoudre.
- Gérer les interventions assignées.

### 6.2 Utilisateur Administrateur

- Gérer les machines, stocks et opérateurs.
- Analyser les pannes et interventions.
- Configurer les alertes et notifications.

## 7. Livrables

- Code source complet et documenté.
- Tests automatisés.
- Documentation utilisateur.
- Guide de déploiement.

## 8. Contraintes et Risques

- **Contraintes** : Développement en TypeScript pour la robustesse.
- **Risques** : Dépendance à l'API back-end ; assurer la compatibilité.
- **Planning** : À définir selon les ressources disponibles.

## 9. Validation et Tests

- Tests unitaires pour chaque composant.
- Tests d'intégration pour les fonctionnalités clés.
- Tests utilisateurs pour valider l'UX.

---

Ce cahier des charges est sujet à évolution en fonction des retours des parties prenantes. Toute modification doit être approuvée et documentée.
