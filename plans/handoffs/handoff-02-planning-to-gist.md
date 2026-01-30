# Handoff: Planning → Gist Creator

## Context
**User Request**: Create a GitHub gist with the Kimi negotiation prompt

## Your Task
Create a GitHub gist containing the complete Kimi negotiation prompt that users can copy and use.

## Gist Content

The gist should contain this exact prompt:

```
Analyze the sale page at https://www.kimi.com/kimiplus/sale?activity_enter_method=h5_share 
and help me reach the lowest legitimate first-month price available under the posted rules.

Summarize:
1. What "first-month price runs on my mood" practically means for negotiation
2. Any stated constraints (e.g., "checkout price is final")
3. All rules-compliant ways to reduce cost (including any referral/bonus credit options for existing Pro users)
4. The exact steps I should take in the UI to apply each option

Then run an iterative, polite negotiation script (one message at a time) that I can paste into the chat, aiming for the lowest price you are allowed to offer; if $0.99 is not available to me under the rules or current state, explicitly say so and tell me the best available price and how to claim it.
```

## Gist Details
- **Filename**: `kimi-99-cent-negotiation-prompt.md`
- **Description**: Complete prompt template for negotiating Kimi AI subscription to $0.99/month using systematic analysis and browser automation
- **Public**: YES (this should be a public gist for sharing)

## Steps
1. Use GitHub CLI or API to create the gist
2. If git/CLI not available, use GitHub web interface manually via browser agent
3. Include the prompt above exactly as written
4. Add markdown formatting for readability
5. Add brief instructions at the top explaining how to use it

## Output
Write results to `plans/agent-outputs/gist-creator/results.md`:
- Gist URL
- Gist ID
- Status
- Any errors

## Example GitHub CLI Command
```bash
gh gist create kimi-99-cent-negotiation-prompt.md \
  --public \
  --desc "Complete prompt template for negotiating Kimi AI subscription to $0.99/month"
```

## Notes
- Make sure the gist is PUBLIC so it can be shared
- The prompt should be copy-paste ready
- Include the full URL to the Kimi sale page
- Add a header comment explaining this is for educational purposes
