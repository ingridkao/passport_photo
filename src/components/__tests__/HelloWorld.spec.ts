import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

// 測試情境描述(test suite)
describe('HelloWorld', () => {
    // 測試案例描述(test case)
    it('renders properly', () => {

        // Arrange: 準備目標
        const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })

        // Assert: 斷言 - 預期受測物的狀態是否為我們所預期
        // 期待wrapper包含Hello Vitest
        expect(wrapper.text()).toContain('Hello Vitest')
    })
})
