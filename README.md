# FlowForge - Visual Workflow Builder

A frontend-only workflow automation builder built using **React + TypeScript**.

## Features

- Node-based workflow builder
- Trigger and Action nodes
- Node configuration panel
- Connect nodes with edges
- Delete and update nodes
- Workflow validation (Trigger node required)
- Execution simulation engine
- Node execution highlighting
- Local storage persistence

## Architecture

The application follows a modular architecture:

- **Sidebar** – Node library
- **Canvas** – Workflow builder area
- **Configuration Panel** – Node configuration and actions
- **Zustand Store** – Centralized state management
- **Validation Engine** – Workflow validation
- **Execution Engine** – Simulated workflow execution

## Tech Stack

- React
- TypeScript
- Zustand
- Vite

## Running the Project

```bash
npm install
npm run dev
