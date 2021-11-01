import { defineAbility  } from '@casl/ability'

export default defineAbility(can => {
    can('read', 'all')
})
