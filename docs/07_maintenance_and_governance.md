# Maintenance and Governance

## Versioning

Use semantic-ish public versions:
- v0.1: China seed atlas
- v0.2: Japan/Korea/Singapore comparison pages
- v0.3: relationship graph
- v0.4: partnership explorer
- v1.0: public launch with methodology and source library

## Changelog format

Each update should record:
- Date
- New entities
- Updated entities
- New sources
- New relationship edges
- Changed confidence ratings
- Retired or deprecated claims
- Open questions

## Entity review schedule

Tier 1: monthly
Tier 2: quarterly
Tier 3: every 6 months or when source updates appear
Tier 4 leads: leave unpublic until verified

## Data quality checks

Before publishing:
- Every entity has at least one source.
- Every public relationship has at least one source.
- No entity has a blank country or type.
- Every source has language, publisher, publication date or access date.
- Confidence level is set.
- Last verified date is set.
- Local-language names are included when available.
- Sensitive claims have conservative wording.

## Public methodology page

The methodology page should explain:
- Source reliability scale
- Confidence levels
- What counts as a relationship edge
- What is excluded
- How local-language sources are used
- How often data is updated
- How readers can suggest corrections

## Correction workflow

1. Receive correction.
2. Ask for source.
3. Verify source.
4. Update data.
5. Add changelog note.
6. If significant, add correction note on public page.
