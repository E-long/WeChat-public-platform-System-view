<script>
import utils from '@/utils'

export default {
    created () {
        let _this=this;
        this.$get('/admin/auth/logout')
        .then(resp=>{

                _this.$alert(_this.$t('alert.logout'), _this.$t('alert.title'), {
                confirmButtonText: _this.$t('button.confirm'),
                callback: action => {
                    utils.sessionStorage.clear()
                   _this.$router.push(resp.url);
                }})
        })
    }
}
</script>
