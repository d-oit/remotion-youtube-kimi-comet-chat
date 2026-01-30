# Orchestration Plan: Kimi Comet Chat Video Production

## Goal
Upload Kimi Comet Chat videos to YouTube and create GitHub gist with negotiation prompt.

## State
**Initial State**: Videos exist on Dropbox, short video local, YouTube/Gist pending  
**Final State**: Videos uploaded with metadata, gist created with prompt

## Agents Required (4 Specialist Agents)

### Agent 1: DropBox Downloader
- **Task**: Download full video from Dropbox to local
- **Input**: Dropbox URL https://www.dropbox.com/scl/fi/nczmxmi5fdidq8c8qaetq/kimi-comet-chat-final.mp4?rlkey=wl5dcp55hkgmhtl2bk8bch98h&dl=0
- **Output**: Local file `remotion-video/out/kimi-comet-chat-final.mp4`
- **Parallel**: YES (can work simultaneously with Agent 2)

### Agent 2: YouTube Metadata Creator
- **Task**: Create best-practice YouTube metadata (title, description, tags, timestamps)
- **Input**: Video content analysis, AGENTS.md guidelines
- **Output**: `plans/agent-outputs/youtube-metadata.md`
- **Parallel**: YES (can work simultaneously with Agent 1)
- **Depends on**: Video structure from FullVideo.tsx

### Agent 3: YouTube Uploader (Sequential - waits for Agent 1 & 2)
- **Task**: Upload both videos to YouTube
- **Input**: 
  - Main video: `kimi-comet-chat-final.mp4` (from Agent 1)
  - Short video: `kimi-comet-chat-short-video.mp4` (already local)
  - Metadata: from Agent 2
- **Output**: YouTube video URLs, upload confirmation
- **Parallel**: NO (requires Agent 1 & 2 complete)

### Agent 4: GitHub Gist Creator (Parallel with Agent 3)
- **Task**: Create GitHub gist with Kimi negotiation prompt
- **Input**: User's prompt text about Kimi sale page analysis
- **Output**: Gist URL
- **Parallel**: YES (can work simultaneously with Agent 3)

## Workflow

```
Phase 1 (Parallel):
├── Agent 1: Download from Dropbox ───────┐
└── Agent 2: Create YouTube metadata ─────┤
                                          ↓
Phase 2 (Parallel, after Phase 1):
├── Agent 3: Upload to YouTube ───────────┤
└── Agent 4: Create GitHub Gist ──────────┘
                                          ↓
Phase 3:
└── Results Aggregator: Report all URLs
```

## Success Criteria
- [ ] Main video uploaded with SEO-optimized metadata
- [ ] Short video uploaded linking to main video
- [ ] GitHub gist created with complete negotiation prompt
- [ ] All URLs reported to user

## Parallel Execution Matrix

| Time | Agent 1 | Agent 2 | Agent 3 | Agent 4 |
|------|---------|---------|---------|---------|
| 0-5m | Download | Create metadata | (Blocked) | (Blocked) |
| 5-10m | Complete | Complete | Upload | Create gist |
| 10m | Done | Done | Done | Done |

**Total Wall Time**: ~10 minutes (vs 20 minutes sequential)

## Context Files Required

All agents need access to:
- `AGENTS.md` - Project guidelines and tech stack
- `skills/brand-compliant-thumbnails/SKILL.md` - For thumbnail creation (if needed during upload phase)
- `plans/thumbnail-generation-plan.md` - Thumbnail generation coordination
- `remotion-video/src/compositions/FullVideo.tsx` - Video structure for timestamps
- `remotion-video/src/Root.tsx` - Video duration info

## Related Plans
- **Thumbnail Generation**: See `plans/thumbnail-generation-plan.md` (uses `@skills/brand-compliant-thumbnails/` skill)

## Output Locations

- `plans/agent-outputs/dropbox-downloader/` - Download status
- `plans/agent-outputs/youtube-metadata/` - Metadata files
- `plans/agent-outputs/youtube-uploader/` - Upload results
- `plans/agent-outputs/gist-creator/` - Gist URL
- `plans/handoffs/` - Handoff documents

## Session IDs

- `dropbox-download` - Agent 1
- `youtube-metadata` - Agent 2
- `youtube-upload` - Agent 3
- `gist-creation` - Agent 4
