# Turborepo Boilerplate

Eine Monorepo-Vorlage basierend auf pnpm, Turbo und Next.js für skalierbare Full-Stack-Projekte.

## Übersicht
Dieses Monorepo nutzt [pnpm](https://pnpm.io/), [Turborepo](https://turborepo.org/) und [Next.js](https://nextjs.org/) als Boilerplate für mehrere Pakete und Anwendungen:
- **apps/web**: Next.js Beispiel-Applikation
- **packages/eslint-config**: Gemeinsame ESLint-Konfiguration
- **packages/typescript-config**: TS-Config Presets
- **packages/ui**: Wiederverwendbare UI-Komponenten

## Voraussetzungen
- Node.js >= 18 (mit [pnpm](https://pnpm.io/) global installiert)
- pnpm >= 8
- Turbo-CLI (wird per pnpm installiert)
- Git
- Optional: Docker (für Container-Builds)

## Erste Schritte
1. Repository klonen:
   ```bash
   git clone https://github.com/smnclmns/turborepo-boilerplate.git
   cd turborepo-boilerplate
   ```
2. Abhängigkeiten installieren:
   ```bash
   pnpm install
   ```

## Lokale Entwicklung
### Alle Anwendungen parallel starten
```bash
pnpm dev
```

### Docker-Image erstellen
```bash
# Ersetze <PROJECT> durch 'web' oder dein App-Verzeichnis
docker build \
  --build-arg PROJECT=<PROJECT> \
  -t turborepo-boilerplate:<PROJECT> .
```
### Container starten
```bash
docker run -p 8080:8080 \
  --env PROJECT=<PROJECT> \
  turborepo-boilerplate:<PROJECT>
```
**Hinweis:** Du kannst den Host-Port beliebig wählen, indem du ihn im `-p`-Parameter vor dem Container-Port angibst (z. B. `-p 3001:8080`). Die Anwendung liest den Container-Port aus der Umgebungsvariable `PORT`, sodass die Weiterleitung automatisch funktioniert.

## Projektstruktur
```
/
├─ apps/
│  └─ web/                # Next.js Anwendung
├─ packages/
│  ├─ eslint-config/      # ESLint-Konfiguration
│  ├─ typescript-config/  # TypeScript-Presets
│  └─ ui/                 # UI-Komponenten
├─ turbo.json             # Turbo-Pipeline-Konfiguration
├─ pnpm-workspace.yaml
├─ package.json
└─ Dockerfile
```

## Linting & Formatierung
```bash
pnpm lint       # ESLint prüfen
pnpm lint:fix   # Autofix anwenden
pnpm format     # Code mit Prettier formatieren
```

## Weitere Informationen
- Details zu ESLint-Konfiguration: `packages/eslint-config/README.md`
- TypeScript-Presets: `packages/typescript-config/README.md`
- Web-Anwendung: `apps/web/README.md`

## Mitwirken
Beiträge sind willkommen! Eröffne gern ein Issue oder Pull Request.

## Lizenz
MIT
