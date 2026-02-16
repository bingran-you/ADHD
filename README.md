# ADHD Parent Coach App
面向 ADHD 儿童家长的“日常教练 + 记录 + AI 复盘”应用，帮助家长用最小行动持续改善孩子的行为、情绪与家庭协作。

## 项目结构
- `adhd-rn`：Expo + React Native 客户端（当前主要开发目录）
- `ADHD_assessment_items.md`：每日记录指标与策略映射
- `PRD_ADHD_parent_coach.md`：产品需求文档（MVP）
- `Reference/`：两套原始参考资料（六步法 / Step by Step）

## 技术栈
- Expo SDK: `~54.0.33`
- React: `19.1.0`
- React Native: `0.81.5`
- TypeScript: `~5.9.2`

## 运行与调试
```bash
cd /Users/bingran_you/Documents/GitHub_MacBook/ADHD/adhd-rn
npm install

# iOS 模拟器
npm run ios

# Android 模拟器/真机
npm run android

# Web
npm run web
```

## 配置信息（当前）
### Expo (`adhd-rn/app.json`)
- `name`: `adhd-rn`
- `slug`: `adhd-rn`
- `version`: `1.0.0`
- `orientation`: `portrait`
- `userInterfaceStyle`: `light`
- `newArchEnabled`: `true`
- `splash`: `./assets/splash-icon.png`（`resizeMode: contain`, `backgroundColor: #ffffff`）
- `ios.supportsTablet`: `true`
- `android.edgeToEdgeEnabled`: `true`
- `android.predictiveBackGestureEnabled`: `false`
- `android.adaptiveIcon`: `./assets/adaptive-icon.png`
- `web.favicon`: `./assets/favicon.png`

### 脚本 (`adhd-rn/package.json`)
- `npm run start` → `expo start`
- `npm run ios` → `expo start --ios --port 8082`
- `npm run android` → `expo start --android`
- `npm run web` → `expo start --web`

### TypeScript (`adhd-rn/tsconfig.json`)
- `extends: expo/tsconfig.base`
- `compilerOptions.strict: true`

## 常见问题与排查
### 0. 如何启动 iOS Simulator（第一次）
```bash
# 打开 Simulator 应用
open -a Simulator
```

如果 Simulator 中没有设备/运行时（会报 `No iOS devices available`），执行：
```bash
# 安装 iOS Simulator 运行时
xcodebuild -downloadPlatform iOS

# 创建并启动一个设备（如 iPhone 16）
xcrun simctl create "iPhone 16" com.apple.CoreSimulator.SimDeviceType.iPhone-16 com.apple.CoreSimulator.SimRuntime.iOS-26-2
open -a Simulator
xcrun simctl boot "iPhone 16"
```

然后再运行：
```bash
cd /Users/bingran_you/Documents/GitHub_MacBook/ADHD/adhd-rn
npm run ios
```

### 1. `npm run ios` 提示端口被占用
Expo 默认使用 `8081`。如果端口被其他进程占用，CLI 会询问是否切换端口；在非交互模式下会直接报错。

**解决办法 A：换端口启动**
```bash
cd /Users/bingran_you/Documents/GitHub_MacBook/ADHD/adhd-rn
EXPO_PORT=8082 npm run ios
# 或
npx expo start --ios --port 8082
```

**解决办法 B：释放 8081 端口**
```bash
lsof -i :8081
kill -9 <PID>
```

> 本次排查中，端口 `8081` 被一个 Java 进程占用（可能来自 IntelliJ / 后端服务）。  
> 如果你正在运行其他服务，建议优先用“换端口”方式启动 Expo。

## 参考资料
- STEP by STEP HELP for CHILDREN with ADHD: A Self-Help Manual for Parents
- 多动症儿童养育六步法（家长自助书）
