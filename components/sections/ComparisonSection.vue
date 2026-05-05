<script setup>
const rows = [
  { capability: 'AI-native architecture', traditional: false },
  { capability: 'Confidence scoring per doc', traditional: false },
  { capability: 'Multi-dimensional quality assessment', traditional: false },
  { capability: 'Human-in-the-loop review workflows', traditional: false },
  { capability: 'Gamified community contributions', traditional: false },
  { capability: 'Real-time ROI dashboard', traditional: false },
  { capability: 'ISO / SOC2 compliance reporting', traditional: false },
  { capability: 'CI/CD quality gate integration', traditional: false },
  { capability: 'Basic markdown editing', traditional: true },
  { capability: 'Team collaboration', traditional: true }
]
</script>

<template>
  <section class="bg-white py-20 px-6" aria-labelledby="comparison-heading">
    <div class="max-w-7xl mx-auto">

      <!-- Section header -->
      <div class="text-center mb-12">
        <p class="text-brand-orange font-semibold text-xs tracking-widest uppercase mb-3">
          WHY TECHNIDOX
        </p>
        <h2 id="comparison-heading" class="text-3xl sm:text-4xl font-bold text-brand-indigo mb-4">
          Not Just Another Documentation Tool
        </h2>
        <p class="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          See how TechniDox stacks up against traditional documentation approaches.
        </p>
      </div>

      <!-- Table wrapper -->
      <div class="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm max-w-5xl mx-auto">
        <table class="w-full min-w-[560px]">
          <thead>
            <tr class="bg-brand-indigo">
              <th class="text-left px-6 py-4 text-white font-semibold text-sm rounded-tl-2xl">
                Capability
              </th>
              <th class="text-center px-6 py-4 text-white font-semibold text-sm">
                TechniDox
              </th>
              <th class="text-center px-6 py-4 text-white font-semibold text-sm rounded-tr-2xl">
                Traditional Documentation
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, index) in rows"
              :key="row.capability"
              class="border-t border-gray-100"
            >
              <td
                class="px-6 py-4 text-gray-600 text-sm"
                :class="{ 'table-corner-bl': index === rows.length - 1 }"
              >
                {{ row.capability }}
              </td>
              <td class="px-6 py-4 text-center text-gray-700 font-bold text-base">✓</td>
              <td
                class="px-6 py-4 text-center font-bold text-base"
                :class="{ 'table-corner-br': index === rows.length - 1 }"
              >
                <span v-if="row.traditional" class="text-gray-700">✓</span>
                <span v-else class="text-gray-400">—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
</template>
