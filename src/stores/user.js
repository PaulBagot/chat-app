import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/supabase'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const fetchUserProfile = async (userId) => {
    if(!userId) {
        user.value = null
        return
    }

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
    
    if(error) {
        console.error('Error fetching user profiles:', error)
    } else {
        user.value = data
    }
  }

  return { user, fetchUserProfile }
})
