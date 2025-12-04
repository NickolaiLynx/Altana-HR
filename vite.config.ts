// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  base: '/Altana-HR/',
  plugins: [react()],
  resolve: {
    alias: {
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      'react-hook-form@7.55.0': 'react-hook-form',
      'react-day-picker@8.10.1': 'react-day-picker',
      'lucide-react@0.487.0': 'lucide-react',
      'input-otp@1.4.2': 'input-otp',

      'figma:asset/ffb334aaf8a0014068f9783d8e898fa4ca100420.png': path.resolve(__dirname, './src/assets/ffb334aaf8a0014068f9783d8e898fa4ca100420.png'),
      'figma:asset/fe0d53ef2df1aecd3231f659c30a203bcd95db65.png': path.resolve(__dirname, './src/assets/fe0d53ef2df1aecd3231f659c30a203bcd95db65.png'),
      'figma:asset/fc417515b4d917f0cd09715535524a59b4557ec9.png': path.resolve(__dirname, './src/assets/fc417515b4d917f0cd09715535524a59b4557ec9.png'),
      'figma:asset/f4acc8c37b74693962185deedfd2e1f2f1d15001.png': path.resolve(__dirname, './src/assets/f4acc8c37b74693962185deedfd2e1f2f1d15001.png'),
      'figma:asset/e02265a69b62bf05b05edb2a527c703f5214a3d7.png': path.resolve(__dirname, './src/assets/e02265a69b62bf05b05edb2a527c703f5214a3d7.png'),
      'figma:asset/ddd8adc0609b934c1b149f1f91a2f7fe34e3f982.png': path.resolve(__dirname, './src/assets/ddd8adc0609b934c1b149f1f91a2f7fe34e3f982.png'),
      'figma:asset/d8bc45b2c1d3fc5bd8b3c204d57111b41fe58515.png': path.resolve(__dirname, './src/assets/d8bc45b2c1d3fc5bd8b3c204d57111b41fe58515.png'),
      'figma:asset/a517b9ade2ca696c966796682c963a0d724ddaf3.png': path.resolve(__dirname, './src/assets/a517b9ade2ca696c966796682c963a0d724ddaf3.png'),
      'figma:asset/9546cd84e1d0d3163b25020fbea4f9ca58e11ac6.png': path.resolve(__dirname, './src/assets/9546cd84e1d0d3163b25020fbea4f9ca58e11ac6.png'),
      'figma:asset/8ecd77df5a3bf29cd24c6c331f025615ec69e25c.png': path.resolve(__dirname, './src/assets/8ecd77df5a3bf29cd24c6c331f025615ec69e25c.png'),
      'figma:asset/886fff9ee068b36fde0894b327efdfbe3e25c988.png': path.resolve(__dirname, './src/assets/886fff9ee068b36fde0894b327efdfbe3e25c988.png'),
      'figma:asset/7c5010af0f741794207816b385f9ffdc8c5feecf.png': path.resolve(__dirname, './src/assets/7c5010af0f741794207816b385f9ffdc8c5feecf.png'),
      'figma:asset/73679c08456b44c216c4323eab0db946d0da439f.png': path.resolve(__dirname, './src/assets/73679c08456b44c216c4323eab0db946d0da439f.png'),
      'figma:asset/6df535769b12d782f2ba137165bc33d65b5b7155.png': path.resolve(__dirname, './src/assets/6df535769b12d782f2ba137165bc33d65b5b7155.png'),
      'figma:asset/6a03586588d23f95d73f361bf3b54924119b7e25.png': path.resolve(__dirname, './src/assets/6a03586588d23f95d73f361bf3b54924119b7e25.png'),
      'figma:asset/3cee41ac29b373a7bd10cf7f32d4b75c53a144e3.png': path.resolve(__dirname, './src/assets/3cee41ac29b373a7bd10cf7f32d4b75c53a144e3.png'),
      'figma:asset/39ef2491a7e061ee8a838d9a623d925275094347.png': path.resolve(__dirname, './src/assets/39ef2491a7e061ee8a838d9a623d925275094347.png'),
      'figma:asset/24c34c55fc42d622ac490eb0f52dad6a54d9eca8.png': path.resolve(__dirname, './src/assets/24c34c55fc42d622ac490eb0f52dad6a54d9eca8.png'),
      'figma:asset/1f795df9daaf955ae5945eb1daef1d60261b1cd0.png': path.resolve(__dirname, './src/assets/1f795df9daaf955ae5945eb1daef1d60261b1cd0.png'),
      'figma:asset/1e41a915b0a03f512de5665f44247b61a9860726.png': path.resolve(__dirname, './src/assets/1e41a915b0a03f512de5665f44247b61a9860726.png'),
      'figma:asset/091600e663ce22495609bdfbd22694ced0f7a139.png': path.resolve(__dirname, './src/assets/091600e663ce22495609bdfbd22694ced0f7a139.png'),
      'figma:asset/061496b1fdd7f6229114d9bc4655d1f29f475296.png': path.resolve(__dirname, './src/assets/061496b1fdd7f6229114d9bc4655d1f29f475296.png'),
      'figma:asset/03b21bfdc284b04af50d24a9fc6318c36213669b.png': path.resolve(__dirname, './src/assets/03b21bfdc284b04af50d24a9fc6318c36213669b.png'),
      'figma:asset/012309a8f718373ca710c7c77587b48df162ad7c.png': path.resolve(__dirname, './src/assets/012309a8f718373ca710c7c77587b48df162ad7c.png'),

      'cmdk@1.1.1': 'cmdk',
      'class-variance-authority@0.7.1': 'class-variance-authority',
      '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
      '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
      '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
      '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
      '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
      '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
      '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
      '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
      '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
      '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
      '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
      '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
      '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',

      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
})
